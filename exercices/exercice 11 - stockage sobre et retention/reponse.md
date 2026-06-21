# Exercice 11 — Réponse

## 1. Stockage du chemin uniquement

### MovieLogService.java

Ajouter des constantes :
```java
private static final String TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w92";
private static final String TMDB_URL_PREFIX_PATTERN = "https://image\\.tmdb\\.org/t/p/[^/]+";
```

Modifier `createLog()` :
```java
public MovieLogDto createLog(CreateLogRequest request) {
    MovieLog log = new MovieLog();
    log.setTmdbId(request.getTmdbId());
    log.setTitle(request.getTitle());
    log.setYear(request.getYear());
    log.setPosterPath(extractTmdbPath(request.getPosterPath()));  // ← extraction
    log.setDirector(request.getDirector());
    log.setSynopsis(request.getSynopsis());
    log.setRating(request.getRating());
    log.setWatchedAt(request.getWatchedAt());
    log.setComment(request.getComment());
    return toDto(repository.save(log));
}

private String extractTmdbPath(String posterPath) {
    if (posterPath == null) return null;
    return posterPath.replaceAll(TMDB_URL_PREFIX_PATTERN, "");
}
```

Modifier `toDto()` pour reconstruire l'URL :
```java
private MovieLogDto toDto(MovieLog log) {
    MovieLogDto dto = new MovieLogDto();
    // ... autres champs
    dto.setPosterPath(log.getPosterPath() != null
        ? TMDB_IMAGE_BASE + log.getPosterPath()
        : null);
    // ...
    return dto;
}
```

## 2. Migration SQL

### db/updates/migrate_poster_path.sql

```sql
UPDATE movie_logs
SET poster_path = regexp_replace(poster_path, 'https://image\.tmdb\.org/t/p/[^/]+', '')
WHERE poster_path LIKE 'https://image.tmdb.org%';
```

Exécution :
```bash
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop < db/updates/migrate_poster_path.sql
```

**Avant** :
```
 id |                          poster_path
----+------------------------------------------------------------
  1 | https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  2 | https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg
```

**Après** :
```
 id |             poster_path
----+---------------------------------
  1 | /pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
  2 | /d5NXSklXo0qyIYkgV94XAgMIckC.jpg
```

## 3. Politique de rétention

| Ancienneté    | Traitement                        | Stockage                    |
|---------------|-----------------------------------|-----------------------------|
| < 6 mois      | Données actives                   | PostgreSQL (hot)            |
| 6–24 mois     | Archivage compressé               | Stockage objet (cold)       |
| > 5 ans       | Export + suppression ou purge     | Export RGPD à la demande    |

**Mécanisme technique :**
- Champ `archivedAt TIMESTAMP` ajouté à l'entité `MovieLog`
- Job `@Scheduled` exécuté chaque nuit : archive les logs > 6 mois
- Endpoint `/api/logs/export` pour l'export RGPD (droit à la portabilité)
- Les logs archivés ne sont plus retournés par les requêtes standard (clause `WHERE archivedAt IS NULL`)

**Note** : pour un journal de visionnage personnel, 5 ans est généreux. L'important est d'avoir **une politique définie**, pas que la durée soit parfaite.

## Ce que la mesure vérifie

```bash
# Tous les poster_path doivent commencer par /
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT id, poster_path FROM movie_logs LIMIT 5;"

# Aucune URL complète ne doit subsister
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT COUNT(*) FROM movie_logs WHERE poster_path LIKE 'https://%';"
# → 0
```

## Pourquoi c'est important

**Stockage canonique :**
- L'URL complète contient une décision d'affichage (`original`, `w342`) mêlée à la donnée (`/pB8BM...jpg`)
- Changer la taille d'affichage nécessiterait une migration de toutes les lignes
- Le chemin seul est la donnée — la taille est une décision de présentation, gérée dans `toDto()`
- Bonus : le chemin est plus court → moins de stockage par ligne

**Rétention :**
- Sans politique de rétention, les données croissent indéfiniment
- Chaque octet stocké "chaud" (PostgreSQL actif) coûte 10× plus en énergie que du stockage froid
- Le RGESN 2.7 demande une stratégie de décommissionnement — les données obsolètes en font partie

## Bonnes pratiques

- **Stocker la donnée, pas la décision d'affichage** — séparer le "quoi" du "comment"
- **Centraliser la construction d'URL** dans une constante ou un service
- **Politique de rétention dès le jour 1** — pas quand la base fait 500 Go
- **Migrations SQL versionnées** — Flyway ou Liquibase pour la production

## Boîte à outils

| Outil | Usage |
|-------|-------|
| `regexp_replace()` PostgreSQL | Transformation de données en place |
| Flyway / Liquibase | Migrations SQL versionnées et reproductibles |
| `@Scheduled` Spring | Jobs planifiés pour l'archivage automatique |
| Stockage objet (S3/Glacier) | Stockage froid 10× moins cher |
