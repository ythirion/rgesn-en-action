# Exercice 13 — Réponse

## 1. Mesure avec GreenIT Analysis

Résultats attendus après les corrections des exercices précédents :

| Page       | Score | Note | Requêtes | Poids   | DOM    |
|------------|-------|------|----------|---------|--------|
| Recherche  | 70+   | A-B  | < 10     | < 200 KB | < 500 |
| Historique | 75+   | A    | < 10     | < 100 KB | < 300 |

## 2. Configuration de la GitHub Action

### greenit-urls.yaml

```yaml
- name: 'Recherche'
  url: 'http://localhost:3000'
- name: 'Historique'
  url: 'http://localhost:3000/history.html'
```

### .github/workflows/greenit.yml

```yaml
name: GreenIT Analysis

on:
  pull_request:
    branches: [main]

jobs:
  greenit:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Start application
        run: docker compose up -d
        env:
          TMDB_API_KEY: ${{ secrets.TMDB_API_KEY }}

      - name: Wait for services
        run: |
          echo "Waiting for backend..."
          timeout 120 bash -c 'until curl -sf http://localhost:8080/api/logs?page=0&size=1 > /dev/null 2>&1; do sleep 5; done'
          echo "Backend ready."
          echo "Waiting for frontend..."
          timeout 60 bash -c 'until curl -sf http://localhost:3000 > /dev/null 2>&1; do sleep 3; done'
          echo "Frontend ready."

      - name: GreenIT Analysis
        id: greenit
        uses: ythirion/greenit-analysis-action@0.1.2
        with:
          url-file: 'greenit-urls.yaml'
          min-ecoindex: '50'
          fail-on-threshold: 'true'
          upload-report: 'true'
          report-name: 'greenit-letterflop'
          retention-days: '30'

      - name: Print results
        run: echo "Lowest EcoIndex score is ${{ steps.greenit.outputs.ecoindex }}"

      - name: API Benchmark
        run: |
          sudo apt-get install -y apache2-utils
          result=$(ab -n 50 -c 5 http://localhost:8080/api/logs?page=0&size=6 2>&1)
          echo "$result"
          p95=$(echo "$result" | grep "95%" | awk '{print $2}')
          echo "P95 latency: ${p95}ms"
          if [ -n "$p95" ] && [ "$p95" -gt 200 ]; then
            echo "FAIL: p95 ${p95}ms exceeds 200ms threshold"
            exit 1
          fi

      - name: Cleanup
        if: always()
        run: docker compose down
```

## 3. Paramètres de l'action

| Paramètre          | Description                              | Valeur par défaut                        |
|---------------------|------------------------------------------|------------------------------------------|
| `url-file`          | Chemin vers le fichier YAML des URLs     | `greenit-urls.yaml`                      |
| `min-ecoindex`      | Score EcoIndex minimum (0-100)           | `90`                                     |
| `timezone`          | Timezone du conteneur                    | `Europe/Paris`                           |
| `greenit-image`     | Image Docker GreenIT CLI                 | `jpreisner/greenit-analysis-cli:latest`  |
| `fail-on-threshold` | Échouer si en dessous du seuil           | `true`                                   |
| `upload-report`     | Uploader le rapport comme artifact       | `true`                                   |
| `report-name`       | Nom de l'artifact                        | `greenit-report`                         |
| `retention-days`    | Durée de rétention de l'artifact (jours) | `30`                                     |

**Outputs :**
- `ecoindex` — le score EcoIndex le plus bas parmi toutes les URLs analysées
- `report-path` — chemin absolu vers le rapport HTML généré

## Stratégie de seuils progressifs

| Phase      | `min-ecoindex` | Action CI          |
|------------|:--------------:|---------------------|
| Démarrage  | 30 (note C)    | Warning uniquement  |
| Sprint 2   | 50 (note B)    | Fail le build       |
| Objectif   | 75 (note A)    | Fail le build       |

**Commencer permissif, resserrer progressivement** — imposer un seuil A dès le départ découragerait l'équipe.

## Ce que la mesure vérifie

L'action produit :
1. Un rapport HTML avec les scores détaillés de chaque URL
2. Un code de sortie non-zéro si un score est en dessous du seuil
3. Un artifact GitHub téléchargeable pour historiser les mesures

## Pourquoi c'est important

**Sans mesure automatique :**
- Un développeur ajoute une bibliothèque CSS → le poids de page double → personne ne le voit
- Un nouveau composant ajoute 50 requêtes DOM → EcoIndex passe de B à D → pas de signal
- La latence API se dégrade de 50% → aucune alerte

**Avec la GitHub Action :**
- Chaque PR est mesurée **avant merge**
- Les régressions sont détectées automatiquement
- L'équipe a une métrique objective et partagée
- Le rapport HTML permet de comparer les scores dans le temps
- Le RGESN 1.4 ("revues régulières intégrant l'écoconception") est satisfait par construction

## Bonnes pratiques

- **Traiter la sobriété comme un test** — si l'analyse échoue, la PR ne merge pas
- **Séparer EcoIndex (frontend) et benchmark (backend)** — deux types de régression distincts
- **Documenter les seuils** — expliquer pourquoi B et pas A, quand on passera à A
- **Ne pas bloquer dès le jour 1** — commencer en mode `fail-on-threshold: 'false'`, passer à `'true'` quand l'équipe est à l'aise
- **Historiser les rapports** — les artifacts permettent de suivre l'évolution dans le temps

## Boîte à outils

| Outil | Usage |
|-------|-------|
| [greenit-analysis-action](https://github.com/ythirion/greenit-analysis-action) | GitHub Action pour EcoIndex en CI |
| [GreenIT Analysis](https://chromewebstore.google.com/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad) | Extension navigateur pour mesure manuelle |
| Apache Bench (`ab`) | Benchmark HTTP (req/s, latence) |
| GitHub Actions Artifacts | Stockage et historique des rapports |
