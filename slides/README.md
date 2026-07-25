# Slides - Atelier RGESN

Deck [Slidev](https://sli.dev) pour dérouler l'atelier "Le numérique responsable en action" en live.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrir <http://localhost:3030>.

Éditer [slides.md](./slides.md) - Slidev recharge à chaud à chaque sauvegarde.

## Thème

Le thème étend `@slidev/theme-default` avec une palette et une police extraites de
[`img/rgesn-en-action.webp`](../img/rgesn-en-action.webp) (la bannière de l'atelier) :

| Rôle              | Couleur                          |
|-------------------|-----------------------------------|
| Indigo (primaire) | `#352F95`                        |
| Navy (secondaire) | `#3B5A8B`                        |
| Or (accent)       | `#E8C468`                        |
| Rouge (accent)    | `#D9121A`                        |

- Titres en **JetBrains Mono** (police monospace, clin d'oeil au titre de la bannière)
- Corps de texte en **Inter** (lisibilité)

Fichiers :
- [`style.css`](./style.css) - variables de couleurs, polices, styles des layouts `cover`/`section`, classes utilitaires (`.stat`, `.phase-badge`)
- [`uno.config.ts`](./uno.config.ts) - couleurs UnoCSS additionnelles (`navy`, `gold`, `accent`)
- [`public/`](./public) - images de la bannière et de Letterflop, servies à la racine du deck

## Contenu actuel

L'introduction (contexte, chiffres clés, Letterflop, prérequis, RGESN, format) est en place.
Les slides détaillant chaque exercice seront ajoutées au fur et à mesure.

## Export

```bash
npm run build    # génère un site statique dans dist/
npm run export   # génère un PDF (nécessite playwright-chromium)
```

## Déploiement (GitHub Pages)

Le workflow [`.github/workflows/deploy-slides.yml`](../.github/workflows/deploy-slides.yml) publie
automatiquement les slides sur GitHub Pages à chaque push sur `main` qui touche `slides/`.

**Configuration unique (une seule fois dans les settings du repo) :**

1. *Settings → Pages → Source* : choisir **GitHub Actions**
2. Pousser sur `main` - le workflow build et déploie `slides/dist/` automatiquement

Le déploiement peut aussi être déclenché manuellement via *Actions → Deploy Slides to GitHub Pages → Run workflow*.

Les slides seront accessibles sur `https://ythirion.github.io/rgesn-en-action/`.
