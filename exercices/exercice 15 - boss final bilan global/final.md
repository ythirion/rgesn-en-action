# Exercice 15 : Le boss final - Bilan global

## Toutes les familles RGESN

Vous avez traversé les 8 familles techniques du RGESN. Il est temps de mesurer l'impact cumulé de vos corrections et de dresser le bilan.

## Votre mission

### 1. Refaire toutes les mesures (~15 min)

Reprenez le tableau de baseline de l'exercice 1 et remplissez la colonne "Après" :

```markdown
## Bilan Letterflop - Avant / Après

### Images Docker
| Service   | Avant      | Après      | Gain    |
|-----------|------------|------------|---------|
| frontend  |            |            |         |
| backend   |            |            |         |
| db        |            |            |         |
| **Total** |            |            |         |

### Réseau (DevTools Network)
| Page              | Requêtes avant | Requêtes après | Transfert avant | Transfert après | Gain      |
|-------------------|----------------|----------------|-----------------|-----------------|-----------|
| Recherche "Matrix"|                |                |                 |                 |           |
| Historique        |                |                |                 |                 |           |

### API (benchmark.sh)
| Endpoint      | req/s avant | req/s après | Gain    |
|---------------|-------------|-------------|---------|
| GET /api/logs |             |             |         |

### Domaines externes
| Domaine              | Avant | Après |
|----------------------|-------|-------|
| fonts.googleapis.com |       |       |
| fonts.gstatic.com    |       |       |

### EcoIndex
| Page       | Score avant | Score après | Note avant | Note après |
|------------|-------------|-------------|------------|------------|
| Recherche  |             |             |            |            |
| Historique |             |             |            |            |
```

### 2. Audit RGESN final (~10 min)

Auditez Letterflop corrigé contre les 8 familles :

```markdown
| Famille          | Critères clés    | Avant    | Après    | Exercice |
|------------------|------------------|----------|----------|----------|
| 1. Stratégie     | 1.4, 1.5         |          |          | 13, 14   |
| 2. Spécifications| 2.6, 2.7, 2.10   |          |          | 2, 3, 12 |
| 3. Architecture  | 3.1, 3.3         |          |          | 4        |
| 4. UX/UI         | 4.5, 4.8         |          |          | 6        |
| 5. Contenus      | images, alt      |          |          | 7        |
| 6. Frontend      | 6.4, 6.5         |          |          | 7, 8     |
| 7. Backend       | 7.1, 7.2         |          |          | 9, 10, 11|
| 8. Hébergement   | 8.3–8.8          |          |          | 5        |
```

### 3. Rédiger le rapport d'écoconception (~10 min)

Rédigez un rapport d'une page suivant cette structure :

```markdown
# Rapport d'écoconception - Letterflop

## Contexte
[Pourquoi cet audit ? Quel est le service ? Quelle est son utilité ?]

## Diagnostic initial
[Résumé des violations identifiées, chiffres clés de la baseline]

## Corrections appliquées
[Liste des corrections par famille, avec les métriques avant/après]

## Gains mesurés
| Métrique                | Avant      | Après       | Gain     |
|-------------------------|------------|-------------|----------|
| Images Docker           |            |             |          |
| Transfert recherche     |            |             |          |
| Logs par requête        |            |             |          |
| Débit API               |            |             |          |
| Requêtes Google Fonts   |            |             |          |
| EcoIndex moyen          |            |             |          |

## Actions restantes
[Ce qui n'a pas été corrigé pendant l'atelier et devrait l'être]

## Engagement
[Quelles 2 pratiques l'équipe s'engage à appliquer dès lundi ?]
```

## Résultats attendus

Si tous les exercices ont été correctement réalisés :

| Métrique                        | Avant        | Après        | Gain        |
|---------------------------------|--------------|--------------|-------------|
| Images Docker                   | ~2.63 GB     | ~791 MB      | **−80 %**   |
| Transfert images "Matrix"       | ~4.5 MB      | ~274 KB      | **−95 %**   |
| Logs chargés par page           | 1000         | 6            | **−99 %**   |
| Débit API /api/logs             | ~79 req/s    | ~140 req/s   | **+77 %**   |
| Requêtes Google Fonts           | 2-4          | 0            | **−100 %**  |
| Full table scans par requête    | 3            | 0            | **−100 %**  |
| Appels TMDB (2ème recherche)    | 21-41        | 0            | **−100 %**  |
| EcoIndex                        | D-E          | A-B          | **+2-3 notes** |

## Ce que les outils couvrent - et ce qu'ils ne couvrent pas

Les outils automatisés (EcoIndex, benchmark, Docker) couvrent **~30-40% des critères RGESN**. Le reste relève de décisions qui ne peuvent pas être automatisées :

**Automatisable :**
- Poids des pages, nombre de requêtes, performance API
- Taille des images Docker
- Présence de lazy loading, alt text, focus visible

**Non automatisable :**
- L'utilité réelle du service (1.1)
- La pertinence d'une feature vs son impact (2.6)
- Le choix de l'hébergeur (8.3-8.8)
- La politique de rétention des données (7.2)
- La décision d'utiliser l'IA ou non (2.10)

C'est exactement le même constat que pour l'accessibilité : les outils automatiques sont nécessaires mais pas suffisants. La réflexion humaine reste indispensable.

## La question à emporter

> **"Quelles 2 pratiques de cet atelier vais-je appliquer dès cette semaine ?"**

Pas 10. Pas "tout à la fois". Deux. C'est assez pour commencer, et c'est assez pour que ça tienne.

Des logiciels bien conçus *et* sobres, ça ne se décrète pas - ça se pratique.

## Commandes de validation finale

```bash
# Images Docker
docker images --format "table {{.Repository}}\t{{.Size}}" | grep letter-flop

# Benchmark API
./scripts/benchmark.sh

# EcoIndex
bash scripts/ecoindex.sh

# Poster paths canoniques
docker exec -i letter-flop-db-1 psql -U postgres -d letterflop -c \
  "SELECT COUNT(*) FROM movie_logs WHERE poster_path LIKE 'https://%';"
# → 0
```
