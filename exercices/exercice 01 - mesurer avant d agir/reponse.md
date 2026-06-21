# Exercice 1 - Réponse

## Valeurs attendues

### Images Docker (branche violations)

| Service   | Image de base        | Taille   |
|-----------|----------------------|----------|
| frontend  | node:24.15.0         | ~904 MB  |
| backend   | eclipse-temurin:25   | ~1.28 GB |
| db        | postgres:15          | ~445 MB  |
| **Total** |                      | **~2.63 GB** |

### Réseau - Recherche "Matrix"

- **~20+ requêtes** dont les images TMDB en taille `original` (~500 KB chacune)
- **~4-5 MB transférés** pour une grille de vignettes de 200 px
- **Domaines externes** : `image.tmdb.org`, potentiellement `fonts.googleapis.com` et `fonts.gstatic.com`

### Réseau - Page historique

- **1 requête XHR** vers `/api/logs` qui ramène **1000 logs** complets (avec synopsis TEXT) pour en afficher 6
- Chaque changement de page relance cette même requête

### API - benchmark.sh

| Endpoint              | req/s attendu | Commentaire |
|-----------------------|---------------|-------------|
| GET /api/logs?size=20 | ~79 req/s     | 3 full table scans par requête |
| POST /api/logs        | ~193 req/s    | Acceptable mais améliorable |

## Ce que la mesure vérifie

Sans baseline, toute amélioration est anecdotique. Le RGESN 1.5 demande de **définir des objectifs de réduction** - impossible sans point de départ chiffré.

## Pourquoi c'est important

- **2.63 GB d'images Docker** pour une application qui cherche des films et logue des visionnages
- **4.5 MB de transfert** pour afficher 20 vignettes de 200 px
- **1000 logs chargés** pour en afficher 6
- **79 req/s** alors que le traitement est trivial (lire une table)

Chacun de ces chiffres cache une ou plusieurs violations du RGESN que vous allez corriger dans les exercices suivants.

## Bonnes pratiques

- **Toujours mesurer avant et après** - sans mesure, pas de progrès, et surtout pas de régression détectée
- **Utiliser des outils complémentaires** - Docker CLI pour l'infra, DevTools pour le réseau, benchmarks pour l'API, EcoIndex pour la vision globale
- **Désactiver le cache navigateur** pendant les mesures pour voir les vrais transferts
- **Conserver les résultats** - vous les réutiliserez à l'exercice 15

## Boîte à outils

| Outil | Usage |
|-------|-------|
| `docker images` | Taille des images de conteneurs |
| DevTools → Network | Requêtes, transfert, domaines, waterfall |
| Apache Bench (`ab`) | Débit et latence API sous charge |
| EcoIndex CLI | Score global d'écoconception (A à G) |
| Lighthouse | Performance, accessibilité, bonnes pratiques |
| Website Carbon Calculator | Estimation kgCO2 par visite |
