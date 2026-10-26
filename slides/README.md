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

Le deck utilise le thème **Signal** ([`theme/`](./theme)), le même que les slides de la
*Journée de l'écoconception numérique 2027* (Green Craft) :

- Palette noir / blanc, un seul accent surligné `#D9F24F`
- Titres et texte en **Lexend**, code et libellés en **Atkinson Hyperlegible Mono** (auto-hébergées via Fontsource)
- Layouts `cover`, `section` (numéro de phase), `statement` (slides sombres) et `default`
- Barre de progression en pied de slide, avec la partie courante (frontmatter `part:`)

Fichiers :
- [`theme/`](./theme) - copie du thème Signal (layouts, `global-top.vue`, styles et composants)
- [`style.css`](./style.css) - compléments propres à l'atelier : tableaux Markdown, `.why`, `.diff-label`, `.shot`, `.families`, `.phases`
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
