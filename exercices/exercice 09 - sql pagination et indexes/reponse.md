# Exercice 9 - Réponse

## 1. Diagnostic de getAllLogs()

Dans la branche violations, `getAllLogs()` contient :

```java
// AVANT - 3 full table scans pour une seule requête HTTP
public Page<MovieLogDto> getAllLogs(int page, int size) {
    // Full table scan #1 : charger tous les logs
    List<MovieLog> allLogs = repository.findAllOrderByWatchedAtDesc();

    // Full table scan #2 : "au cas où" les données auraient changé
    List<MovieLog> freshLogs = repository.findAllOrderByWatchedAtDesc();

    // Tri en mémoire Java (déjà trié par SQL)
    List<MovieLog> sorted = freshLogs.stream()
        .sorted(Comparator.comparing(MovieLog::getWatchedAt).reversed())
        .collect(Collectors.toList());

    // Pagination en Java
    int start = page * size;
    int end = Math.min(start + size, sorted.size());
    List<MovieLog> pageContent = sorted.subList(start, end);

    // Full table scan #3 : compter
    long total = repository.findAll().size();  // instancie TOUS les objets

    // Mapping dupliqué (au lieu d'appeler toDto())
    List<MovieLogDto> dtos = pageContent.stream().map(log -> {
        MovieLogDto dto = new MovieLogDto();
        dto.setId(log.getId());
        // ... 11 lignes de mapping copiées-collées
        return dto;
    }).toList();

    return new PageImpl<>(dtos, PageRequest.of(page, size), total);
}
```

**Réponses :**
- Nombre de requêtes SQL : **3** (2 × findAll + 1 × findAll pour le count)
- Pagination : **Java** (subList après chargement complet)
- Count : **findAll().size()** - charge toutes les entités en mémoire
- Full table scans : **3** par requête HTTP

## 2. Solution - MovieLogRepository.java

```java
@Repository
public interface MovieLogRepository extends JpaRepository<MovieLog, Long> {
    Page<MovieLog> findAllByOrderByWatchedAtDescCreatedAtDesc(Pageable pageable);
    List<MovieLog> findByTmdbId(Integer tmdbId);
}
```

## 3. Solution - MovieLogService.java

```java
public Page<MovieLogDto> getAllLogs(int page, int size) {
    return repository.findAllByOrderByWatchedAtDescCreatedAtDesc(PageRequest.of(page, size))
            .map(this::toDto);
}
```

**Ce que Spring Data génère :**
```sql
-- Requête de données (1 seule requête)
SELECT * FROM movie_logs
ORDER BY watched_at DESC, created_at DESC
LIMIT 6 OFFSET 0;

-- Requête de count (automatique avec Page)
SELECT COUNT(*) FROM movie_logs;
```

**2 requêtes SQL** au lieu de 3, et surtout **aucun chargement complet en mémoire**.

## 4. Solution - Indexes

```sql
-- db/updates/add_indexes.sql

-- Accélérer la recherche par film (fiche détail)
CREATE INDEX IF NOT EXISTS idx_movie_logs_tmdb_id ON movie_logs (tmdb_id);

-- Accélérer le tri pour la pagination de l'historique
CREATE INDEX IF NOT EXISTS idx_movie_logs_watched_at ON movie_logs (watched_at DESC, created_at DESC);
```

**Impact des indexes :**

| Nombre de lignes | Full Table Scan O(n) | B-tree Index O(log n) | Facteur |
|------------------|:--------------------:|:---------------------:|:-------:|
| 100              | 100 lectures         | 7 lectures            | 14×     |
| 10 000           | 10 000 lectures      | 14 lectures           | 714×    |
| 1 000 000        | 1 000 000 lectures   | 20 lectures           | 50 000× |

## 5. Solution - toDto() unifié

```java
private MovieLogDto toDto(MovieLog log) {
    MovieLogDto dto = new MovieLogDto();
    dto.setId(log.getId());
    dto.setTmdbId(log.getTmdbId());
    dto.setTitle(log.getTitle());
    dto.setYear(log.getYear());
    dto.setPosterPath(log.getPosterPath() != null ? TMDB_IMAGE_BASE + log.getPosterPath() : null);
    dto.setDirector(log.getDirector());
    dto.setSynopsis(log.getSynopsis());
    dto.setRating(log.getRating());
    dto.setWatchedAt(log.getWatchedAt());
    dto.setComment(log.getComment());
    dto.setCreatedAt(log.getCreatedAt());
    return dto;
}
```

Utilisé partout via `this::toDto` ou `.map(this::toDto)` - zéro duplication.

## Résultats mesurés (benchmark.sh)

| Endpoint              | Avant    | Après    | Gain      |
|-----------------------|----------|----------|-----------|
| GET /api/logs?size=20 | 79 req/s | 140 req/s| **+77 %** |
| Latence p50           | 122 ms   | 67 ms    | **−45 %** |
| Données transférées   | 123 KB   | 7.4 KB   | **−94 %** |

## Ce que la mesure vérifie

```bash
# benchmark.sh doit montrer +77% de req/s
./scripts/benchmark.sh

# EXPLAIN ANALYZE doit montrer Index Scan
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "EXPLAIN ANALYZE SELECT * FROM movie_logs ORDER BY watched_at DESC LIMIT 6;"
```

## Pourquoi c'est important

Le pattern avant correction est un cas d'école de **gaspillage de ressources** :
- **CPU** : tri en mémoire Java de données déjà triées par SQL
- **RAM** : toutes les entités chargées pour en utiliser 6
- **I/O disque** : 3 full table scans au lieu d'1 requête paginée indexée
- **Réseau** : synopsis TEXT (~KB/ligne) transféré pour chaque entité chargée

Tout cela pour un résultat fonctionnellement identique.

## Bonnes pratiques

- **Pageable Spring Data par défaut** - ne jamais charger `findAll()` pour paginer en Java
- **`count()` au lieu de `findAll().size()`** - la base sait compter sans instancier d'objets
- **Indexes sur les colonnes triées et filtrées** - `ORDER BY` sans index = full table scan
- **Un seul mapping entity→DTO** - factoriser dans une méthode `toDto()` référencée partout
- **`.map()` sur un `Page<>`** - préserve la pagination sans créer de liste intermédiaire

## Boîte à outils

| Outil | Usage |
|-------|-------|
| `EXPLAIN ANALYZE` | Plan d'exécution SQL réel |
| `./scripts/benchmark.sh` | Débit et latence sous charge |
| Spring Data `Pageable` | Pagination et tri côté SQL |
| `docker exec -i <container> psql` | Accès direct à PostgreSQL |
