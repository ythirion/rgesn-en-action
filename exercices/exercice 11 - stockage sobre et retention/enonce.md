# Exercice 11 : Stockage sobre et rétention des données

## Critères RGESN

- **7.2** - Le service stocke-t-il uniquement les données nécessaires ?
- **2.7** - Existe-t-il une stratégie de décommissionnement des données ?

## Contexte

Chaque log de visionnage dans Letterflop stocke l'URL complète de l'affiche TMDB, incluant la taille d'image :
```
https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

Si demain on décide d'afficher les vignettes en `w92` au lieu de `original`, il faudrait migrer **toutes les lignes** de la base. Et les données s'accumulent indéfiniment - aucune politique de rétention.

## Votre mission

### 1. Stocker uniquement le chemin TMDB (~15 min)

Dans `MovieLogService.java`, modifiez `createLog()` pour extraire et stocker uniquement le chemin TMDB :

```
AVANT en base : https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
APRÈS en base : /pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

Puis dans `toDto()`, reconstruisez l'URL complète avec la taille adaptée au contexte d'affichage :
```java
dto.setPosterPath(log.getPosterPath() != null
    ? "https://image.tmdb.org/t/p/w92" + log.getPosterPath()
    : null);
```

### 2. Migrer les données existantes (~10 min)

Écrivez un script SQL dans `db/updates/migrate_poster_path.sql` qui transforme les URLs existantes en chemins :

```sql
-- Transformer https://image.tmdb.org/t/p/original/pB8BM...jpg → /pB8BM...jpg
UPDATE movie_logs
SET poster_path = _______________
WHERE poster_path LIKE 'https://image.tmdb.org%';
```

### 3. Concevoir une politique de rétention (~10 min)

Les logs de visionnage s'accumulent indéfiniment. Concevez une politique :

```markdown
## Politique de rétention movie_logs

| Ancienneté     | Traitement              | Stockage        |
|----------------|-------------------------|-----------------|
| < ___ mois     |                         |                 |
| ___–___ mois   |                         |                 |
| > ___ ans      |                         |                 |

## Mécanisme technique
- Champ pour marquer l'archivage : _______________
- Fréquence de traitement : _______________
- Droit à l'export RGPD : _______________
```

## Avant de coder

```bash
# Observer le format actuel des poster_path
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT id, poster_path FROM movie_logs LIMIT 5;"
```

## Validation

```bash
# Après migration, les chemins doivent commencer par /
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT id, poster_path FROM movie_logs LIMIT 5;"

# Vérifier qu'aucune URL complète ne subsiste
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT COUNT(*) FROM movie_logs WHERE poster_path LIKE 'https://%';"
# → Doit retourner 0
```

## Indice

- `regexp_replace()` de PostgreSQL peut extraire le chemin : `regexp_replace(poster_path, 'https://image\.tmdb\.org/t/p/[^/]+', '')`
- En Java, `String.replaceAll("https://image\\.tmdb\\.org/t/p/[^/]+", "")` fait la même chose
- La constante `TMDB_IMAGE_BASE` peut centraliser le préfixe d'URL

---

→ [Proposition de solution](reponse.md)
