# Exercice 9 : Pagination SQL et indexes

## Critères RGESN

- **7.1** - Le service optimise-t-il les requêtes et traitements côté serveur ?
- **7.3** - Le service effectue-t-il uniquement les traitements strictement nécessaires ?

## Contexte

Vous avez corrigé le frontend pour qu'il demande seulement 6 logs par page. Mais côté serveur, que se passe-t-il quand `getAllLogs(page, size)` est appelé ?

Ouvrez `backend/src/main/java/com/yot/letterflop/service/MovieLogService.java` et lisez la méthode `getAllLogs()`. Comptez le nombre de requêtes SQL déclenchées par **un seul appel**.

## Votre mission

### 1. Identifier les problèmes (~10 min)

Lisez `MovieLogService.getAllLogs()` et répondez :

```markdown
Combien de fois findAll() ou findAllOrderByWatchedAtDesc() est appelé ? → ___
Où est faite la pagination (Java ou SQL) ?                               → ___
Comment est calculé le nombre total de logs ?                            → ___
Combien de full table scans par requête HTTP ?                           → ___
```

### 2. Remplacer par une pagination SQL (~15 min)

Dans `MovieLogRepository.java`, ajoutez :
```java
Page<MovieLog> findAllByOrderByWatchedAtDescCreatedAtDesc(Pageable pageable);
```

Dans `MovieLogService.java`, réécrivez `getAllLogs()` :
```java
public Page<MovieLogDto> getAllLogs(int page, int size) {
    // Une seule requête SQL avec LIMIT/OFFSET
    // Spring Data traduit en : SELECT * FROM movie_logs ORDER BY ... LIMIT size OFFSET page*size
    // .map(this::toDto) convertit chaque entité en DTO sans liste intermédiaire
}
```

### 3. Remplacer le COUNT (~5 min)

Cherchez l'endroit où le nombre total de logs est calculé via `findAll().size()` ou équivalent. Remplacez par `repository.count()` qui traduit en `SELECT COUNT(*) FROM movie_logs`.

### 4. Ajouter les indexes (~10 min)

Créez ou mettez à jour `db/updates/add_indexes.sql` :
```sql
-- Quelles colonnes sont requêtées fréquemment ?
-- tmdb_id : requêté à chaque affichage de fiche film
-- watched_at : trié à chaque chargement de l'historique
```

### 5. Utiliser toDto() partout (~5 min)

Vérifiez que le mapping entity→DTO n'est pas dupliqué. Si le même bloc de 11 affectations est copié à plusieurs endroits, remplacez par un appel à `toDto()` ou `this::toDto`.

## Avant de coder

```bash
# Benchmark avant correction
./scripts/benchmark.sh

# Observer le plan d'exécution (sans index)
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "EXPLAIN ANALYZE SELECT * FROM movie_logs ORDER BY watched_at DESC LIMIT 6;"
```

Notez les valeurs de `req/s` et le type de scan (`Seq Scan` vs `Index Scan`).

## Validation

```bash
# Benchmark après correction
./scripts/benchmark.sh

# Vérifier le plan d'exécution (avec index)
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "EXPLAIN ANALYZE SELECT * FROM movie_logs ORDER BY watched_at DESC LIMIT 6;"
```

Le plan d'exécution doit afficher `Index Scan` au lieu de `Seq Scan`. Le benchmark doit montrer une amélioration de `req/s` sur `/api/logs`.

## Indice

- `PageRequest.of(page, size)` crée un `Pageable` Spring Data
- `Page<MovieLog>` contient `.getContent()`, `.getTotalElements()`, `.getTotalPages()`
- `.map(this::toDto)` transforme un `Page<MovieLog>` en `Page<MovieLogDto>` sans liste intermédiaire
- Les indexes B-tree offrent O(log n) vs O(n) pour un full table scan

---

→ [Proposition de solution](reponse.md)
