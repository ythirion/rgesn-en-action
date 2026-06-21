# Exercice 1 : Mesurer avant d'agir — L'empreinte de Letterflop

## Critères RGESN

- **1.5** — Le service numérique a-t-il défini des objectifs de réduction de ses impacts environnementaux ?
- **6.1** — Le service minimise-t-il le poids et le nombre de requêtes des pages ?

## Contexte

Vous venez de rejoindre l'équipe Letterflop. Avant de corriger quoi que ce soit, il faut comprendre où on en est.

Un développeur qui optimise sans mesurer, c'est un médecin qui prescrit sans diagnostiquer. On ne sait pas ce qui pèse, on ne sait pas ce qui coûte, on ne sait pas par où commencer.

## Votre mission

Établir la **baseline complète** de Letterflop en utilisant 4 outils de mesure. Remplissez le tableau ci-dessous avec les valeurs observées.

### 1. Mesurer la taille des images Docker

```bash
docker compose build --no-cache
docker images --format "table {{.Repository}}\t{{.Size}}" | grep -E "letter-flop|postgres"
```

### 2. Mesurer le réseau avec DevTools

Ouvrez chaque page dans un navigateur, onglet **Network** (DevTools), et notez :
- Nombre de requêtes
- Volume transféré (transferred)
- Nombre de domaines externes sollicités

Pages à mesurer :
- Page de recherche → rechercher "Matrix"
- Page de détail d'un film
- Page historique

### 3. Mesurer les performances API

```bash
./scripts/benchmark.sh
```

### 4. Mesurer l'EcoIndex (optionnel si installé)

```bash
npx ecoindex-cli analyse --url http://localhost:3000 http://localhost:3000/history.html
```

## Tableau de mesures

Copiez ce tableau dans votre éditeur et remplissez-le :

```markdown
## Baseline Letterflop — Date : ___________

### Images Docker
| Service   | Image de base | Taille   |
|-----------|---------------|----------|
| frontend  |               |          |
| backend   |               |          |
| db        |               |          |
| **Total** |               |          |

### Réseau (DevTools Network)
| Page              | Requêtes | Transfert | Domaines externes |
|-------------------|----------|-----------|-------------------|
| Recherche "Matrix"|          |           |                   |
| Détail film       |          |           |                   |
| Historique        |          |           |                   |

### API (benchmark.sh)
| Endpoint           | req/s | Latence p50 | Données transférées |
|--------------------|-------|-------------|---------------------|
| GET /api/logs      |       |             |                     |
| POST /api/logs     |       |             |                     |

### EcoIndex
| Page       | Score | Note | DOM | Requêtes | Poids |
|------------|-------|------|-----|----------|-------|
| Recherche  |       |      |     |          |       |
| Historique |       |      |     |          |       |
```

## Avant de mesurer

1. Lancez l'application : `docker compose up --build`
2. Attendez que les 3 services soient prêts (le backend affiche `Started LetterflopApplication`)
3. Ouvrez `http://localhost:3000` dans votre navigateur
4. Ouvrez les DevTools (F12) → onglet Network
5. Cochez "Disable cache" dans les DevTools

## Indice

Ne cherchez pas encore à corriger quoi que ce soit. L'objectif est uniquement de **constater** et de **noter**. Ce tableau vous servira de référence pour l'exercice final.
