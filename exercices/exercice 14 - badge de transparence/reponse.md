# Exercice 14 — Réponse

## 1. Badge EcoIndex officiel en footer

À ajouter en bas du `<body>`, avant le `<script>` applicatif, dans les 3 fichiers HTML (`index.html`, `movie.html`, `history.html`) :

```html
<footer class="border-t border-neutral-800 mt-16 py-6">
  <div class="max-w-6xl mx-auto px-8 flex items-center justify-between">
    <div id="ecoindex-badge" data-theme="dark"></div>
    <a href="/empreinte.html" class="text-neutral-400 hover:text-white no-underline text-xs">
      Notre empreinte →
    </a>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
```

**Comment ça marche :**
1. Le script JS (569 octets) appelle le microservice "Back For Front" d'EcoIndex
2. Le service retourne un badge SVG (779 octets) basé sur l'URL de la page courante
3. Le badge est injecté dans le `<div id="ecoindex-badge">`
4. Un clic redirige vers les résultats détaillés sur ecoindex.fr

**Performance :**
- Impact total : ~1.3 KB (JS + SVG)
- Cache serveur : 7 jours
- Cache navigateur : standard HTTP cache
- Chargement `defer` : ne bloque pas le rendu

## 2. Page "Notre empreinte"

### frontend/empreinte.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Letterflop — Notre empreinte</title>
  <link rel="stylesheet" href="/src/style.css" />
</head>
<body class="bg-neutral-950 text-white min-h-screen" style="font-family: system-ui, -apple-system, sans-serif;">

  <nav class="bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-8 py-4">
    <a href="/" class="text-red-600 font-bold text-xl no-underline">🎬 Letterflop</a>
    <div class="flex gap-6">
      <a href="/" class="text-neutral-300 text-sm no-underline">Rechercher</a>
      <a href="/history.html" class="text-neutral-300 text-sm no-underline">Mon historique</a>
    </div>
  </nav>

  <main class="max-w-4xl mx-auto px-8 py-8">
    <h1 class="text-2xl font-bold mb-2">Notre empreinte numérique</h1>
    <p class="text-neutral-500 mb-8">Transparence sur l'impact environnemental de Letterflop.</p>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4 text-neutral-300">Scores actuels</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-neutral-800 text-neutral-500">
              <th class="text-left py-3 pr-4">Page</th>
              <th class="text-center py-3 px-4">Note</th>
              <th class="text-right py-3 px-4">Poids</th>
              <th class="text-right py-3 px-4">Requêtes</th>
              <th class="text-right py-3 pl-4">DOM</th>
            </tr>
          </thead>
          <tbody class="text-neutral-400">
            <tr class="border-b border-neutral-900">
              <td class="py-3 pr-4">Recherche</td>
              <td class="text-center py-3 px-4">
                <span class="bg-green-600 text-white text-xs font-bold rounded-full px-2 py-0.5">A</span>
              </td>
              <td class="text-right py-3 px-4">— KB</td>
              <td class="text-right py-3 px-4">—</td>
              <td class="text-right py-3 pl-4">—</td>
            </tr>
            <tr class="border-b border-neutral-900">
              <td class="py-3 pr-4">Historique</td>
              <td class="text-center py-3 px-4">
                <span class="bg-green-600 text-white text-xs font-bold rounded-full px-2 py-0.5">A</span>
              </td>
              <td class="text-right py-3 px-4">— KB</td>
              <td class="text-right py-3 px-4">—</td>
              <td class="text-right py-3 pl-4">—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-neutral-600 mt-2">Scores mesurés avec GreenIT Analysis. Remplissez avec vos valeurs réelles.</p>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4 text-neutral-300">Ce que nous avons optimisé</h2>
      <ul class="text-neutral-400 text-sm space-y-2">
        <li><strong>Images</strong> — tailles adaptées au contexte d'affichage, lazy loading (−95% de transfert)</li>
        <li><strong>Polices</strong> — polices système, zéro requête vers Google Fonts</li>
        <li><strong>Données</strong> — pagination serveur, cache API, indexes SQL</li>
        <li><strong>Infrastructure</strong> — images Docker optimisées (−80%)</li>
        <li><strong>Accessibilité</strong> — composants natifs, navigation clavier, alt texts</li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4 text-neutral-300">Méthodologie</h2>
      <p class="text-neutral-400 text-sm mb-3">
        L'<a href="https://www.ecoindex.fr" class="text-red-500 no-underline">EcoIndex</a>
        évalue l'empreinte environnementale d'une page web sur 3 critères :
      </p>
      <ul class="text-neutral-400 text-sm space-y-1">
        <li>Complexité du DOM (nombre d'éléments HTML)</li>
        <li>Nombre de requêtes HTTP</li>
        <li>Poids total de la page (octets transférés)</li>
      </ul>
      <p class="text-neutral-400 text-sm mt-3">
        Le score va de 0 à 100, avec une note de A (le plus sobre) à G (le plus impactant).
        Le badge est fourni par le collectif <a href="https://github.com/cnumr/ecoindex_badge" class="text-red-500 no-underline">cnumr</a>.
      </p>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4 text-neutral-300">Notre CI</h2>
      <p class="text-neutral-400 text-sm">
        Chaque PR est automatiquement analysée par la
        <a href="https://github.com/ythirion/greenit-analysis-action" class="text-red-500 no-underline">GitHub Action GreenIT Analysis</a>.
        Le seuil minimum est fixé à un score de 50 (note B). Aucune PR ne peut merger si elle dégrade l'EcoIndex en dessous de ce seuil.
      </p>
    </section>

    <section>
      <h2 class="text-lg font-semibold mb-4 text-neutral-300">Vérifiez par vous-même</h2>
      <ul class="text-neutral-400 text-sm space-y-2">
        <li><a href="https://www.ecoindex.fr" class="text-red-500 no-underline">EcoIndex</a> — score d'écoconception</li>
        <li><a href="https://www.websitecarbon.com" class="text-red-500 no-underline">Website Carbon Calculator</a> — estimation CO2 par visite</li>
        <li><a href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/" class="text-red-500 no-underline">RGESN</a> — le référentiel officiel français</li>
      </ul>
    </section>
  </main>

  <footer class="border-t border-neutral-800 mt-16 py-6">
    <div class="max-w-6xl mx-auto px-8 flex items-center justify-center">
      <div id="ecoindex-badge" data-theme="dark"></div>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
</body>
</html>
```

## 3. Configuration Vite

Dans `frontend/vite.config.ts` :

```typescript
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movie: resolve(__dirname, 'movie.html'),
        history: resolve(__dirname, 'history.html'),
        empreinte: resolve(__dirname, 'empreinte.html'),
      },
    },
  },
});
```

## Ce que la mesure vérifie

- Le badge est visuellement présent en bas de chaque page
- Cliquer sur le badge ouvre les résultats détaillés sur ecoindex.fr
- La page `/empreinte.html` charge et affiche le contenu
- Le badge pèse < 2 KB au total (vérifiable dans DevTools Network)

## Pourquoi c'est important

### L'analogie Nutri-Score

Quand le Nutri-Score est devenu visible sur les emballages alimentaires, les industriels ont reformulé leurs produits. Pas par conviction — par pression de transparence. Un "E" rouge sur un paquet de céréales fait fuir les clients.

Le même mécanisme fonctionne pour les sites web :
- Un badge **A** vert valorise le travail de l'équipe
- Un badge **D** orange crée une pression naturelle pour corriger
- L'engagement public force l'amélioration continue

### Le badge doit être honnête

Le badge officiel cnumr interroge directement l'API EcoIndex — il affiche le **vrai score**, pas une valeur choisie. Impossible de tricher. C'est la force du système : la transparence ne fonctionne que si elle est authentique.

### Sobriété du badge lui-même

Le badge cnumr est un modèle de sobriété :
- **SVG** : 779 octets, vectoriel, pas de pixelisation
- **JS** : 569 octets, chargé en `defer`, mis en cache CDN
- **Pas de tracking**, pas de cookie, pas de dépendance externe

## Bonnes pratiques

- **Utiliser le badge officiel cnumr** plutôt qu'un badge custom — il est maintenu, standardisé, et interroge l'API réelle
- **`data-theme="dark"`** pour s'adapter au design de Letterflop
- **`defer`** sur le script pour ne pas bloquer le rendu de la page
- **Page dédiée plutôt que tooltip** — plus d'espace pour expliquer la méthodologie et les engagements

## Boîte à outils

| Outil | Usage |
|-------|-------|
| [ecoindex_badge (cnumr)](https://github.com/cnumr/ecoindex_badge) | Badge EcoIndex officiel |
| [GreenIT Analysis](https://chromewebstore.google.com/detail/greenit-analysis/mofbfhffeklkbebfclfaiifefjflcpad) | Mesure manuelle dans le navigateur |
| [greenit-analysis-action](https://github.com/ythirion/greenit-analysis-action) | Mesure automatique en CI |
| Vite `rollupOptions.input` | Ajout de pages au build multi-page |
