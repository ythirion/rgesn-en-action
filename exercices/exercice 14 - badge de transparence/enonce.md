# Exercice 14 : Badge de transparence - Le Nutri-Score numérique

## Critères RGESN

- **1.5** - Le service numérique a-t-il défini des objectifs de réduction rendus publics ?

## Contexte

On met des Nutri-Scores sur les aliments. Pourquoi pas sur les sites web ?

Afficher un badge EcoIndex sur son service rend l'impact visible - pour les utilisateurs, pour l'équipe, pour soi-même. C'est la version numérique du Nutri-Score : la transparence force l'amélioration, et donne aux utilisateurs un critère de choix qu'ils n'avaient pas.

Le collectif [cnumr](https://github.com/cnumr) propose un badge EcoIndex officiel, prêt à intégrer.

## Votre mission

### 1. Intégrer le badge EcoIndex officiel (~10 min)

Ajoutez le badge [ecoindex_badge](https://github.com/cnumr/ecoindex_badge) dans le footer des 3 pages HTML (`index.html`, `movie.html`, `history.html`).

**Option JavaScript (recommandée)** - le badge se met à jour automatiquement :

```html
<div id="ecoindex-badge" data-theme="dark"></div>
<script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
```

**Option statique (sans JavaScript)** - badge sous forme d'image SVG :

```html
<a href="https://bff.ecoindex.fr/redirect/?url={votre-url}" target="_blank">
  <img src="https://bff.ecoindex.fr/badge/?theme=dark&url={votre-url}"
       alt="Badge EcoIndex" />
</a>
```

Remplacez `{votre-url}` par l'URL de la page (encodée).

**Caractéristiques du badge :**
- SVG de **779 octets** - impact minimal sur le poids de page
- JavaScript de **569 octets** - mis en cache via CDN
- Cache serveur de **7 jours**
- `data-theme="dark"` pour le thème sombre de Letterflop

### 2. Créer un footer commun (~10 min)

Ajoutez un `<footer>` identique sur les 3 pages, juste avant le `<script>`, contenant :
- Le badge EcoIndex officiel
- Un lien vers la page "Notre empreinte"

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

### 3. Créer la page "Notre empreinte" (~15 min)

Créez `frontend/empreinte.html` avec le même layout que les autres pages. Contenu :

1. **Scores actuels** - tableau avec le score EcoIndex de chaque page (valeurs de l'exercice 13)
2. **Ce que nous avons optimisé** - résumé des corrections appliquées pendant l'atelier
3. **Méthodologie** - comment l'EcoIndex est calculé (DOM, requêtes, poids)
4. **Vérifiez par vous-même** - liens vers [EcoIndex](https://www.ecoindex.fr), [Website Carbon Calculator](https://www.websitecarbon.com), le [RGESN](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/)
5. **Notre CI** - lien vers la GitHub Action de l'exercice 13

### 4. Mettre à jour vite.config.ts

Ajoutez `empreinte.html` comme nouvelle page dans la configuration multi-page de Vite :

```typescript
input: {
  main: resolve(__dirname, 'index.html'),
  movie: resolve(__dirname, 'movie.html'),
  history: resolve(__dirname, 'history.html'),
  empreinte: resolve(__dirname, 'empreinte.html'),
}
```

## Avant de coder

Consultez le repo [cnumr/ecoindex_badge](https://github.com/cnumr/ecoindex_badge) pour les dernières instructions d'intégration.

## Validation

- Le badge EcoIndex s'affiche dans le footer des 3 pages
- Le badge utilise le thème `dark` (cohérent avec le design de Letterflop)
- Cliquer sur le badge redirige vers les résultats EcoIndex détaillés
- La page `/empreinte.html` charge et affiche le contenu
- Le badge pèse moins de 2 KB au total (SVG + JS)

## Indice

- Le badge se positionne automatiquement dans le `<div id="ecoindex-badge">`
- L'attribut `data-theme="dark"` adapte le badge au fond sombre
- Le script doit être chargé avec `defer` pour ne pas bloquer le rendu
- Si le site n'est pas encore en ligne, le badge affichera un état "non mesuré" - c'est normal en développement local

---

→ [Proposition de solution](reponse.md)
