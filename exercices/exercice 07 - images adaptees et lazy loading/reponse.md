# Exercice 7 - Réponse

## 1. Tailles d'images TMDB

Dans `TmdbService.java` :

**searchMovies()** - vignettes de liste :
```java
// AVANT
dto.setPosterPath(rawPoster != null ? "https://image.tmdb.org/t/p/original" + rawPoster : null);

// APRÈS
dto.setPosterPath(rawPoster != null ? "https://image.tmdb.org/t/p/w185" + rawPoster : null);
```

**getMovieDetail()** - fiche film :
```java
// AVANT
dto.setPosterPath("https://image.tmdb.org/t/p/original" + posterPath);

// APRÈS
dto.setPosterPath("https://image.tmdb.org/t/p/w342" + posterPath);
```

## 2. Lazy loading + dimensions + alt text

**search.ts** - grille de résultats :
```typescript
// AVANT
`<img src="${movie.posterPath}" alt="" class="w-full object-cover" style="aspect-ratio:2/3">`

// APRÈS
`<img src="${movie.posterPath}"
      alt="Affiche du film ${movie.title}"
      loading="lazy"
      width="185" height="278"
      class="w-full object-cover" style="aspect-ratio:2/3">`
```

**movie.ts** - affiche de la fiche :
```typescript
// AVANT
`<img src="${movie.posterPath}" alt="" class="rounded-lg" style="width:300px">`

// APRÈS
`<img src="${movie.posterPath}"
      alt="Affiche du film ${movie.title}"
      loading="lazy"
      width="342" height="513"
      class="rounded-lg" style="width:300px">`
```

**history.ts** - vignettes de l'historique :
```typescript
// AVANT
`<img src="${log.posterPath}" alt="" class="rounded object-cover shrink-0" style="width:60px;aspect-ratio:2/3">`

// APRÈS
`<img src="${log.posterPath}"
      alt="Affiche du film ${log.title}"
      loading="lazy"
      width="60" height="90"
      class="rounded object-cover shrink-0" style="width:60px;aspect-ratio:2/3">`
```

## Résultats mesurés

| Métrique | Avant | Après | Gain |
|----------|-------|-------|------|
| Taille par image (recherche) | ~200-500 KB | ~10-20 KB | **−95 %** |
| Total transfert "Matrix" (images) | ~4.5 MB | ~274 KB | **−94 %** |
| Images chargées au premier rendu | 20 | ~5 (visibles) | **−75 %** |
| Layout Shift (CLS) | Élevé | Négligeable | Espace réservé |
| Alt text | Vide | Descriptif | Accessible |

## Ce que la mesure vérifie

```
DevTools → Network → filtre Img → rechercher "Matrix"
```
- Les URLs doivent contenir `/w185/` (pas `/original/`)
- Le transfert total d'images doit être < 500 KB

## Pourquoi c'est important

**Tailles d'images :**
- Une image `original` TMDB fait 2000+ px de large, affichée dans une vignette de 185 px
- Le navigateur télécharge 100% des pixels puis les réduit à 10% - 90% du transfert est gaspillé
- Sur mobile en 4G, chaque MB compte : latence, batterie, forfait data

**Lazy loading :**
- Sans `loading="lazy"`, le navigateur télécharge toutes les images dès le chargement de la page
- Seules ~5 images sont visibles à l'écran, les 15 autres sont hors écran
- `loading="lazy"` est natif HTML - pas de JavaScript, pas de lib, pas de complexité

**Dimensions explicites :**
- Sans `width` et `height`, le navigateur ne peut pas réserver l'espace avant le chargement
- Le contenu "saute" quand l'image arrive (Cumulative Layout Shift)
- CLS élevé = mauvaise expérience utilisateur + travail CPU inutile pour recalculer le layout

**Alt text :**
- `alt=""` indique une image décorative - un lecteur d'écran l'ignore complètement
- L'affiche d'un film est du contenu informatif - elle doit être décrite
- L'accessibilité fait partie intégrante du numérique responsable

## Bonnes pratiques

- **Toujours servir l'image à la taille d'affichage** - pas plus grande
- **`loading="lazy"` par défaut** sur toute image en dessous de la ligne de flottaison
- **Toujours spécifier `width` et `height`** pour réserver l'espace
- **`alt` descriptif** sur les images informatives, `alt=""` uniquement sur les décoratives
- **Format WebP** quand possible - 25-35% plus léger que JPEG à qualité égale

## Boîte à outils

| Outil | Usage |
|-------|-------|
| DevTools Network (filtre Img) | Taille et URL des images |
| Lighthouse → Performance | Score CLS, LCP, images non dimensionnées |
| [Squoosh](https://squoosh.app) | Compression d'images en ligne |
| ImageMagick `convert -quality 82 img.jpg img.webp` | Conversion WebP en batch |
