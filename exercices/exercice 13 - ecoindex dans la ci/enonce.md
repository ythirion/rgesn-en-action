# Exercice 13 : EcoIndex dans la CI - La sobriété comme métrique

## Critères RGESN

- **1.4** - Les revues de conception intègrent-elles régulièrement l'écoconception ?
- **1.5** - Le service numérique a-t-il défini des objectifs de réduction ?

## Contexte

Vous avez optimisé Letterflop. Comment garantir qu'un futur commit ne dégrade pas l'empreinte ? On intègre des tests unitaires dans la CI pour éviter les régressions fonctionnelles. Pourquoi ne pas faire la même chose pour l'écoconception ?

La sobriété est une métrique, pas une intention. Sans mesure automatique, pas de régression détectée.

## Votre mission

### 1. Mesurer avec GreenIT Analysis (~10 min)

Utilisez l'extension **GreenIT Analysis** (installée au début de l'atelier) pour mesurer les 3 pages de Letterflop :
- Page de recherche (`/`)
- Page film (`/movie.html?id=603`)
- Page historique (`/history.html`)

Notez pour chaque page : le score EcoIndex, la note (A-G), le nombre de requêtes, le poids, le nombre d'éléments DOM.

### 2. Configurer la GitHub Action greenit-analysis (~15 min)

On va utiliser la [greenit-analysis-action](https://github.com/ythirion/greenit-analysis-action) pour automatiser cette mesure dans la CI.

**Étape 1** - Créez un fichier `greenit-urls.yaml` à la racine du projet :

```yaml
- name: 'Recherche'
  url: 'http://localhost:3000'
- name: 'Historique'
  url: 'http://localhost:3000/history.html'
```

**Étape 2** - Créez le workflow `.github/workflows/greenit.yml` :

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
        uses: ythirion/greenit-analysis-action@___
        with:
          url-file: 'greenit-urls.yaml'
          min-ecoindex: '___'

      - name: Print results
        run: echo "Lowest EcoIndex score is ${{ steps.greenit.outputs.ecoindex }}"

      - name: Cleanup
        if: always()
        run: docker compose down
```

Complétez les `___` :
- La version de l'action (consultez le repo pour la dernière version)
- Le seuil minimum d'EcoIndex (commencez permissif)

### 3. Comprendre les paramètres de l'action (~5 min)

Remplissez ce tableau avec les paramètres disponibles :

```markdown
| Paramètre          | Description                         | Valeur par défaut |
|---------------------|-------------------------------------|-------------------|
| url-file            |                                     |                   |
| min-ecoindex        |                                     |                   |
| fail-on-threshold   |                                     |                   |
| upload-report       |                                     |                   |
| report-name         |                                     |                   |
| retention-days      |                                     |                   |
```

### 4. (Bonus) Ajouter un gate de performance API

Ajoutez une étape au workflow qui exécute un benchmark Apache Bench et échoue si le p95 dépasse 200 ms :

```yaml
      - name: API Benchmark
        run: |
          sudo apt-get install -y apache2-utils
          ab -n 50 -c 5 http://localhost:8080/api/logs?page=0&size=6
```

## Avant de coder

1. Vérifiez que Letterflop est lancé (`docker compose up`)
2. Testez l'extension GreenIT Analysis manuellement sur une page
3. Consultez le repo [greenit-analysis-action](https://github.com/ythirion/greenit-analysis-action) pour les dernières versions et exemples

## Validation

- Le fichier `greenit-urls.yaml` est créé avec les URLs de Letterflop
- Le workflow `.github/workflows/greenit.yml` est syntaxiquement correct
- L'action produit un rapport HTML uploadé en artifact
- Le seuil `min-ecoindex` est cohérent avec les scores mesurés

## Indice

- L'action utilise l'image Docker `jpreisner/greenit-analysis-cli` en interne
- Le rapport HTML généré est uploadé automatiquement comme artifact GitHub Actions (paramètre `upload-report`)
- Les outputs `ecoindex` et `report-path` peuvent être utilisés dans des étapes suivantes
- Commencez avec un seuil permissif (`min-ecoindex: '50'` = note B) et resserrez progressivement
