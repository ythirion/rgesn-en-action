---
theme: default
title: Atelier RGESN - Le numérique responsable en action
info: |
  ## Atelier RGESN - Le numérique responsable en action
  15 exercices pratiques de numérique responsable sur Letterflop.

  Basé sur le RGESN (ARCEP / Arcom / ADEME / DINUM).
class: text-center
transition: fade
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
  weights: '400,500,600,700,800'
css: unocss
---

<div class="flex flex-col h-full justify-center">

# Atelier RGESN

## Le numérique responsable en action

<p class="opacity-80 mt-2">15 exercices pratiques - de la mesure à la correction, sur du vrai code.</p>

<img src="/rgesn-en-action.webp" class="cover-illustration" />

</div>

<div class="abs-bl m-6 font-mono text-sm opacity-80">
  #sharingiscaring
</div>
<div class="abs-br m-6 font-mono text-sm opacity-80">
  Yoan Thirion
</div>

<!--
Slide de garde - fond indigo repris de la bannière img/rgesn-en-action.webp.
-->

---
class: px-4
---

# On en parle beaucoup...

Numérique responsable, fresque du numérique, manifeste, chartes signées en conférence.

<br>

## Mais lundi matin, devant ton IDE, qu'est-ce qui change vraiment ?

<v-click>

<div class="mt-10 p-6 rounded-lg callout-indigo">

**Cet atelier n'est pas une énième prise de conscience.**

**C'est une boîte à outils.**

</div>

</v-click>

<v-click>

<p class="mt-8 text-lg">
15 exercices pratiques que tu pourras appliquer immédiatement - sur ton produit, dans tes affinages, dans ton code.
</p>

</v-click>

<!--
Reprend le paragraphe d'accroche du README.
-->

---
layout: section
---

# L'impact du numérique
## en quelques chiffres

---

# Pourquoi ça compte

<div class="grid grid-cols-2 gap-x-10 gap-y-8 mt-6">

<div class="stat" v-click>
  <div class="stat-value text-4xl">6</div>
  <div>équipements numériques actifs par personne, en moyenne</div>
</div>

<div class="stat" v-click>
  <div class="stat-value text-4xl">5,5×</div>
  <div>la France : les émissions de GES du numérique s'il était un pays</div>
</div>

<div class="stat" v-click>
  <div class="stat-value text-4xl">&gt; 4 %</div>
  <div>des émissions de GES du numérique proviennent déjà de l'IA</div>
</div>

<div class="stat" v-click>
  <div class="stat-value text-4xl">40 %</div>
  <div>du budget GES annuel soutenable d'un·e internaute, pour rester sous 1,5 °C</div>
</div>

</div>

<v-click>

<p class="mt-10 opacity-80">
Et l'indicateur le plus critique n'est pas le carbone : c'est l'<strong>utilisation des ressources, minéraux et métaux</strong>.
</p>

</v-click>

<div class="abs-br m-6 text-xs opacity-50">
  Source : GreenIT.fr - « Le numérique, c'est 40 % du budget climat soutenable » (2025)
</div>

---
class: px-4
---

# Ces chiffres ne se règlent pas en signant une charte

<br>

## Ils se règlent dans le code, l'architecture et les choix produit.

<br>

<v-click>

<p class="text-xl">C'est exactement ce que cet atelier te donne les moyens de faire.</p>

</v-click>

---
layout: section
---

# Letterflop
## Le fil rouge de l'atelier

---

# Letterflop

<div class="grid grid-cols-2 gap-8 items-center mt-4">

<div>

Un journal de visionnage de films.

- Rechercher des films via l'API **TMDB**
- Consulter leurs fiches
- Enregistrer des visionnages avec une note
- Parcourir son historique

<p class="mt-4 font-mono text-sm">
  <a href="https://github.com/ythirion/letter-flop">github.com/ythirion/letter-flop</a>
</p>

</div>

<img src="/letter-flop.webp" class="rounded-lg shadow-lg" />

</div>

---

# Stack technique

<div class="grid grid-cols-2 gap-x-10 gap-y-4 mt-8 text-lg">

<div>🗄️ <strong>PostgreSQL 15</strong></div>
<div>☕ <strong>Spring Boot 3.5</strong> / Java 25</div>
<div>🖥️ <strong>TypeScript</strong> / Tailwind / Vite</div>
<div>🐳 <strong>Docker Compose</strong></div>

</div>

<v-click>

<div class="mt-12 p-6 rounded-lg callout-indigo">
La codebase contient volontairement des <strong>mauvaises pratiques</strong> documentées, couvrant l'ensemble des familles du RGESN.
Chaque exercice guide pour les identifier, les mesurer et les corriger.
</div>

</v-click>

---

# Deux branches

<div class="grid grid-cols-2 gap-6 mt-8">

<div class="p-6 rounded-lg border-2 border-navy">
  <div class="phase-badge">main</div>
  <p class="mt-4">Le code de départ, avec les mauvaises pratiques à identifier et corriger pendant l'atelier.</p>
</div>

<div class="p-6 rounded-lg border-2 border-gold">
  <div class="phase-badge phase-badge-gold">rgesn</div>
  <p class="mt-4">Le corrigé de référence, pour comparer votre solution ou débloquer un exercice.</p>
</div>

</div>

---

# Installation

```bash
git clone https://github.com/ythirion/letter-flop
cd letter-flop

cp .env.example .env
# Éditer .env et ajouter votre TMDB_API_KEY

docker compose up --build
```

<v-click>

<p class="mt-6">L'application est accessible sur <code>http://localhost:3000</code>.</p>

</v-click>

---

# Prérequis

<div class="grid grid-cols-2 gap-x-10 gap-y-4 mt-8 text-lg">

<div>🐳 <code>Docker</code> et <code>Docker Compose</code></div>
<div>💻 Un <code>IDE</code> (VS Code, IntelliJ...)</div>
<div>📦 <code>Node.js</code> 20+</div>
<div>🔍 Un navigateur avec les <code>DevTools</code></div>

</div>

<v-click>

<p class="mt-10">
🔑 Une clé API TMDB (gratuite sur <a href="https://www.themoviedb.org">themoviedb.org</a>)
</p>

</v-click>

---
layout: section
---

# Le RGESN
## Référentiel Général d'Écoconception des Services Numériques

---

# Le RGESN

<div class="grid grid-cols-2 gap-8 items-center mt-4">

<div>

Publié par l'**ARCEP**, l'**Arcom**, l'**ADEME** et la **DINUM**.

<div class="stat mt-6">
  <div class="stat-value text-4xl">79</div>
  <div>critères</div>
</div>

<div class="stat mt-4">
  <div class="stat-value text-4xl">9</div>
  <div>familles</div>
</div>

</div>

<a href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/">
  <img src="/rgesn-arcep.webp" class="rounded-lg shadow-lg" />
</a>

</div>

---

# Les 9 familles

<div class="grid grid-cols-3 gap-4 mt-8 text-lg">
  <div class="p-3 rounded cell-indigo">1. Stratégie</div>
  <div class="p-3 rounded cell-indigo">2. Spécifications</div>
  <div class="p-3 rounded cell-indigo">3. Architecture</div>
  <div class="p-3 rounded cell-navy">4. UX/UI</div>
  <div class="p-3 rounded cell-navy">5. Contenus</div>
  <div class="p-3 rounded cell-navy">6. Frontend</div>
  <div class="p-3 rounded cell-navy">7. Backend</div>
  <div class="p-3 rounded cell-indigo">8. Hébergement</div>
  <div class="p-3 rounded cell-indigo">9. Algorithmie</div>
</div>

<v-click>

<p class="mt-10 text-lg">Cet atelier couvre les 9 familles à travers des exercices concrets sur Letterflop.</p>

</v-click>

---

# Format

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="stat">
  <div class="stat-value text-2xl">1 journée</div>
  <div>~7-8h, ou 2 demi-journées</div>
</div>

<div class="stat">
  <div class="stat-value text-2xl">Mob / pair</div>
  <div>programming en binôme ou en équipe de 3-4</div>
</div>

<div class="stat">
  <div class="stat-value text-2xl">Tous niveaux</div>
  <div>front / back / fullstack, aucun prérequis en numérique responsable</div>
</div>

</div>

<v-click>

<div class="mt-12 p-6 rounded-lg callout-indigo">
<strong>Avec quoi tu repars ?</strong> Une liste de pratiques concrètes, des outils installés, et une règle simple : en choisir 2, les appliquer cette semaine.
</div>

</v-click>

<v-click>

<p class="mt-6 italic opacity-80">Parce que des logiciels bien conçus <em>et</em> sobres, ça ne se décrète pas - ça se pratique.</p>

</v-click>

---
layout: section
---

# Au programme

## 7 phases, 15 exercices

---

# Au programme

<div class="grid grid-cols-2 gap-x-10 gap-y-3 mt-6 text-base">

<div><span class="phase-badge">Phase 1</span> Comprendre et mesurer</div>
<div><span class="phase-badge">Phase 2</span> Challenger le besoin</div>
<div><span class="phase-badge">Phase 3</span> Infrastructure</div>
<div><span class="phase-badge">Phase 4</span> Frontend</div>
<div><span class="phase-badge">Phase 5</span> Backend</div>
<div><span class="phase-badge">Phase 6</span> Aller plus loin</div>
<div><span class="phase-badge">Phase 7</span> Bilan</div>

</div>

<v-click>

<p class="mt-12 text-xl text-center">La suite au fil de l'eau, exercice après exercice 🎣</p>

</v-click>

<!--
Fin de l'introduction. La suite (un ou plusieurs slides par exercice) sera
construite exercice par exercice au fur et à mesure de l'atelier.
-->
