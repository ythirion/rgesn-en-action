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

<div><strong>PostgreSQL 15</strong></div>
<div><strong>Spring Boot 3.5</strong> / Java 25</div>
<div><strong>TypeScript</strong> / Tailwind / Vite</div>
<div><strong>Docker Compose</strong></div>

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

<div><code>Docker</code> et <code>Docker Compose</code></div>
<div>Un <code>IDE</code> (VS Code, IntelliJ...)</div>
<div><code>Node.js</code> 20+</div>
<div>Un navigateur avec les <code>DevTools</code></div>

</div>

<v-click>

<p class="mt-10">
Une clé API TMDB (gratuite sur <a href="https://www.themoviedb.org">themoviedb.org</a>)
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

<p class="mt-12 text-xl text-center">La suite au fil de l'eau, exercice après exercice.</p>

</v-click>

<!--
==================================================================
PHASE 1 - COMPRENDRE ET MESURER
==================================================================
-->

---
layout: section
---

# Phase 1
## Comprendre et mesurer

---

<span class="exercise-label">Exercice 01</span>

# Mesurer avant d'agir

<span class="criteria-tag">1.5</span>
<span class="criteria-tag">6.1</span>

<div class="mt-6 text-lg">

Un développeur qui optimise sans mesurer, c'est un médecin qui prescrit sans diagnostiquer.

</div>

<div class="callout-why mt-8">
Établir la baseline complète de Letterflop avec 4 outils : Docker, DevTools Network, benchmark API, EcoIndex.
</div>

<!--
Critères RGESN :
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction de ses impacts environnementaux ?
- 6.1 : Le service minimise-t-il le poids et le nombre de requêtes des pages ?
-->

---

# Baseline - les outils

```bash
# 1. Taille des images Docker
docker compose build --no-cache
docker images --format "table {{.Repository}}\t{{.Size}}" | grep -E "letter-flop|postgres"

# 2. Réseau - DevTools Network (recherche "Matrix", fiche film, historique)
#    requêtes, volume transféré, domaines externes

# 3. Débit API
./scripts/benchmark.sh

# 4. Score EcoIndex
npx ecoindex-cli analyse --url http://localhost:3000 http://localhost:3000/history.html
```

---

# Résultats mesurés

<img src="/network-matrix.webp" class="w-full max-h-40 object-cover rounded-lg shadow-lg mt-2" />

<div class="grid grid-cols-2 gap-x-10 mt-4 text-xs">

<v-click>
<div>

**Images Docker**

| Service | Taille |
|---------|--------|
| frontend | ~904 MB |
| backend | ~1.28 GB |
| db | ~445 MB |
| **Total** | **~2.63 GB** |

</div>
</v-click>

<v-click>
<div>

**API - benchmark.sh**

| Endpoint | req/s |
|----------|-------|
| GET /api/logs?size=20 | ~79 req/s |
| POST /api/logs | ~193 req/s |

Page historique : **1 requête** ramène **1000 logs** pour en afficher 6.

</div>
</v-click>

</div>

---

<span class="exercise-label">Exercice 02</span>

# Le pari empreinte et l'ACV express

<span class="criteria-tag">2.6</span>
<span class="criteria-tag">1.1</span>

<div class="mt-6 text-lg">
Combien coûte une heure de Netflix ? Un mail avec pièce jointe ? Une requête ChatGPT ? Personne ne nous a jamais enseigné ces ordres de grandeur.
</div>

<div class="mt-4 text-lg">
Résultat : on arbitre des décisions produit à l'aveugle. Une user story "impressionnante" et une user story "banale" semblent coûter la même chose - alors qu'elles peuvent différer d'un facteur 100 ou 1000.
</div>

<div class="mt-6 callout-why">
L'ACV express (Analyse de Cycle de Vie, niveau 1) donne un ordre de grandeur en 10 minutes, sans outillage lourd - assez pour trancher un arbitrage produit.
</div>

<!--
Critères RGESN :
- 2.6 : Le service numérique a-t-il fait l'objet d'une revue d'impact environnemental avant sa mise en production ?
- 1.1 : Le service numérique a-t-il été évalué favorablement en termes d'utilité par rapport à ses impacts ?
-->

---

# Le pari empreinte - réponses

| Situation | CO2e | Équiv. voiture |
|-----------|:----:|:--------------:|
| 1h de Netflix en HD | ~36 g | ~300 m |
| Mail 5 Mo à 10 personnes | ~50 g | ~420 m |
| 1 requête ChatGPT (GPT-4) | ~2-4 g | ~25 m |
| **Réunion vidéo 1h, 6 pers.** | **~500-700 g** | **~5 km** |
| Recherche Google | ~0,2-0,3 g | ~2 m |
| Image Midjourney / DALL-E 3 | ~3-10 g | ~50 m |

<v-click>

<p class="mt-6">La réunion vidéo est de loin la plus impactante - couper les caméras divise son impact par ~10.</p>

</v-click>

<div class="abs-br m-6 text-xs opacity-50">
Sources : IEA / Carbon Brief 2020, ADEME 2019, Luccioni et al. 2024, Carbon Trust 2021, Google Sustainability Report 2023
</div>

---

# Où se joue l'impact

```
Terminaux (60-80%)  ████████████████████░░░░░  Le levier principal
Réseau (15-20%)     ████░░░░░░░░░░░░░░░░░░░░
Datacenter (5-15%)  ██░░░░░░░░░░░░░░░░░░░░░░
```

<div class="mt-8 callout-why">
Le levier #1 n'est pas le serveur, c'est l'usage côté client : temps passé, complexité d'affichage, données transférées. 80% de l'impact des terminaux vient de leur fabrication, pas de leur usage.
</div>

<div class="abs-br m-6 text-xs opacity-50">
Source : Luccioni et al. (2024) - Power Hungry Processing
</div>

---

# Le backlog de Letterflop

Trois user stories, à comparer avec la même méthode :

<div class="mt-4 grid grid-cols-3 gap-4 text-sm">

<div class="p-4 rounded-lg border-2 border-navy">

**US-A**

> Générer une affiche personnalisée pour chaque film loggé, créée par IA à partir du synopsis et de ma note.

</div>

<div class="p-4 rounded-lg border-2 border-navy">

**US-B**

> Voir la bande-annonce en HD du film directement sur la fiche, en lecture automatique à l'ouverture de la page.

</div>

<div class="p-4 rounded-lg border-2 border-navy">

**US-C**

> Enregistrer un visionnage avec une note, une date et un commentaire.

</div>

</div>

<div class="mt-8 callout-why">
Trois façons plausibles d'ajouter de la valeur au produit. Laquelle a le meilleur ratio valeur / impact ?
</div>

---

# Comparer l'impact des 3

| User story | Approche technique | CO2e / utilisation |
|------------|---------------------|:-------------------:|
| **US-A** - Affiche IA | Génération d'image par IA | **~5 g** |
| **US-B** - Bande-annonce autoplay | Streaming vidéo HD | **~10-30 g** *(estimé)* |
| **US-C** - Formulaire de log | POST HTTP simple | **~0.01 g** |

<v-click>
<p class="mt-6 text-sm opacity-70">US-B : pas de chiffre GreenIT dédié - estimation par analogie avec le pari empreinte (1h de Netflix HD ≈ 36 g). Même famille technique : streaming vidéo.</p>
</v-click>

<div class="mt-8 text-2xl text-center">

**US-A / US-C : ~750×**

</div>

<div class="mt-6 callout-why">
La feature la plus impressionnante est souvent celle qui a le plus d'impact. La plus banale est souvent la plus sobre. On formalisera la décision (construire / retravailler / abandonner) à l'exercice 3.
</div>

---

# L'ACV express, réutilisable en affinage

| Niveau 1 (10 min) | Niveau 2 (1-3 jours) | Niveau 3 (semaines) |
|---|---|---|
| EcoIndex, Website Carbon | Référentiel ADEME + outils | ISO 14040, cabinet |
| Sensibilisation | Pilotage équipe | Reporting CSRD, audit |
| **Commence par celui-ci** | Action sur 1 sprint | Action sur 1 trimestre |

<div class="mt-8 callout-why">
Le niveau 1 tient dans un refinement : dès qu'un PO propose une US, on estime son poids de page, on applique le ratio ~0.5 g CO2e/MB, on compare au reste du backlog. Pas d'outillage, pas de spécialiste - juste une question de plus posée à voix haute.
</div>

<div class="mt-4 callout-why">
Raisonner en ordres de grandeur, pas en chiffres absolus à 3 décimales : "A coûte 750× plus que B" est plus actionnable que "A coûte 547 kg".
</div>

<!--
==================================================================
PHASE 2 - CHALLENGER LE BESOIN
==================================================================
-->

---
layout: section
---

# Phase 2
## Challenger le besoin

---

<span class="exercise-label">Exercice 03</span>

# Challenger le besoin

<span class="criteria-tag">2.3</span>
<span class="criteria-tag">2.6</span>
<span class="criteria-tag">2.7</span>
<span class="criteria-tag">2.9</span>
<span class="criteria-tag">2.10</span>

<div class="mt-6 text-lg">
La question habituelle : "Laquelle a le plus de valeur métier ?"
</div>

<div class="mt-4 text-lg">
La question RGESN : <strong>"Laquelle a le meilleur ratio valeur / impact ?"</strong>
</div>

<!--
Critères RGESN :
- 2.3 : Le service numérique fonctionne-t-il sur une connexion lente ou en mode dégradé ?
- 2.6 : L'impact environnemental a-t-il été évalué avant la mise en production ?
- 2.7 : Existe-t-il une stratégie de décommissionnement ?
- 2.9 : L'impact des composants d'interface prêts à l'emploi a-t-il été évalué ?
- 2.10 : L'impact des services tiers a-t-il été évalué ?
-->

---

# Trois user stories, un sprint

| US | Description | Décision |
|----|--------------|:--------:|
| **A** | Affiches personnalisées par IA | **Abandonner** |
| **B** | Bande-annonce HD en autoplay | **Retravailler** |
| **C** | Formulaire simple de log | **Construire** |

<v-click>

<div class="mt-8 callout-why">
US-A = ~750× l'impact de US-C pour un même volume d'utilisateurs. Le retournement : la feature la plus impressionnante est souvent celle qu'il faut abandonner.
</div>

</v-click>

---

# US-B retravaillée

<div class="diff-label before">Avant</div>

> Je veux voir la bande-annonce HD directement sur la fiche, **en lecture automatique**.

<div class="diff-label after mt-6">Après</div>

> Je veux **cliquer sur un bouton** "Voir la bande-annonce", affichée en **qualité standard par défaut**, avec la possibilité de passer en HD.

<div class="mt-8 grid grid-cols-2 gap-4 text-sm">
<div>Pas d'autoplay (4.1)</div>
<div>Vignette cliquable, pas de lecteur embarqué</div>
<div>Qualité standard par défaut</div>
<div>Lazy loading de l'iframe au clic</div>
</div>

<!--
==================================================================
PHASE 3 - INFRASTRUCTURE
==================================================================
-->

---
layout: section
---

# Phase 3
## Infrastructure

---

<span class="exercise-label">Exercice 04</span>

# Multi-stage builds Docker

<span class="criteria-tag">3.1</span>
<span class="criteria-tag">3.3</span>

<div class="mt-4 text-lg">

Letterflop pèse `~2.63 GB` en images Docker - plus lourd qu'un système d'exploitation complet.
</div>

<img src="/gorilla.webp" class="max-h-72 mx-auto object-contain rounded-lg shadow-lg mt-4" />

<!--
Critères RGESN :
- 3.1 : Le service repose-t-il sur des composants conçus pour réduire leurs impacts environnementaux ?
- 3.3 : Le service supporte-t-il l'évolution des protocoles (HTTP/2, compression) ?
-->

---

# Les Dockerfiles actuels

<div class="diff-label before">backend/Dockerfile</div>

```dockerfile
FROM eclipse-temurin:25
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven && mvn package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/letterflop-0.0.1-SNAPSHOT.jar"]
```

<div class="diff-label before">frontend/Dockerfile</div>

```dockerfile
FROM node:24.15.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

<v-click>

<div class="mt-4 callout-why">
Le JDK complet en production, et <code>npm start</code> (serveur de dev Vite) qui tourne au lieu d'un build statique servi.
</div>

</v-click>
---

# Le principe du multi-stage build

Un Dockerfile classique n'a qu'un seul stage : tout ce qui sert à compiler reste dans l'image finale - compilateur, sources, dépendances de build.

```dockerfile
# Stage 1 - build : image lourde, tous les outils de compilation
FROM <image-lourde-avec-outils> AS build
COPY . .
RUN <commande de build>

# Stage 2 - run : image légère, uniquement le résultat compilé
FROM <image-légère-runtime>
COPY --from=build <artefact-compilé> .
```

<div class="mt-6 callout-why">
Seul le dernier <code>FROM</code> détermine l'image livrée. Les stages précédents (compilateur, sources, <code>node_modules</code>) sont jetés après le build - ils n'existent jamais dans l'image finale.
</div>

---

# Backend/Dockerfile

```dockerfile {all|1-7|9-14}
# Stage 1 - build : compile le jar (nécessite Maven + JDK complet)
FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline    # télécharge les dépendances, met en cache la couche Docker
COPY src ./src
RUN mvn package -DskipTests      # compile et produit le .jar

# Stage 2 - run : uniquement le JRE + le jar compilé, rien d'autre
FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=build /app/target/letterflop-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
```

<v-click>

<div class="mt-4 callout-why">
<code>COPY --from=build</code> ne récupère que le <code>.jar</code> du stage 1 - Maven, le JDK et les sources restent dans le stage 1, jamais copiés. JDK pour compiler, JRE pour exécuter.
</div>

</v-click>

---

# Frontend/Dockerfile

```dockerfile {all|1-7|9-12}
# Stage 1 - build : compile les assets avec Vite (nécessite Node.js)
FROM node:24.15.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci                # installation reproductible des dépendances
COPY . .
RUN npm run build          # génère les fichiers statiques dans /app/dist

# Stage 2 - serve : nginx sert les fichiers statiques, Node.js n'existe plus ici
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

<v-click>

<div class="mt-4 callout-why">
Le stage 2 ne contient ni Node.js, ni <code>node_modules</code>, ni le code source - juste le résultat du build. nginx apporte en prime HTTP/2, compression et headers de cache.
</div>

</v-click>

---

# Résultats mesurés

| Service | Avant | Après | Gain |
|---------|:-----:|:-----:|:----:|
| frontend | ~904 MB | ~62.4 MB | **-93 %** |
| backend | ~1.28 GB | ~284 MB | **-78 %** |
| db | ~445 MB | ~445 MB | 0 % |
| **Total** | **~2.63 GB** | **~791 MB** | **-80 %** |

<div class="mt-8 callout-why">
Multi-stage build par défaut : il n'y a aucune raison de ne pas l'utiliser. Toujours Alpine - 5 à 10x plus léger.
</div>

---

<span class="exercise-label">Exercice 05</span>

# Hébergement responsable

<span class="criteria-tag">8.3</span>
<span class="criteria-tag">8.4</span>
<span class="criteria-tag">8.5</span>
<span class="criteria-tag">8.6</span>
<span class="criteria-tag">8.7</span>
<span class="criteria-tag">8.8</span>

<div class="mt-6 text-lg">
Un serveur alimenté au charbon émet ~800 gCO2/kWh. Le même serveur en hydroélectricité : ~20 gCO2/kWh.
</div>

<div class="mt-6 text-2xl text-center">

**Facteur : 40×**

</div>

<!--
Critères RGESN :
- 8.3 : PUE (Power Usage Effectiveness)
- 8.4 : WUE (Water Usage Effectiveness)
- 8.5 : Énergie renouvelable
- 8.6 : Localisation géographique
- 8.7 : Récupération de chaleur
- 8.8 : Données chaudes / froides
-->

---

# Panorama des hébergeurs

**Hébergeurs européens**

| Hébergeur | PUE | Énergie | Points forts |
|-----------|:---:|---------|---------------|
| OVHcloud | `1.09` | Mix + renouvelable | Chaleur réutilisée, RGPD EU |
| Scaleway | `1.3` | 100% renouvelable | Transparence |
| Infomaniak | `1.08` | 100% hydraulique | Zéro compensation, suisse |
| Hetzner | `1.30` | 100% renouvelable | Prix compétitifs |

<v-click>

**Hyperscalers américains**

| Provider | PUE | Énergie décarbonée | Points forts |
|----------|:---:|:-------------------:|---------------|
| Google Cloud | `1.10` | 64% (2023) | Meilleur dashboard carbone |
| AWS | `~1.15` | ~85% (2023) | Carbon Footprint Tool |
| Azure | `~1.18` | ~82% (2023) | Sustainability Calculator |

</v-click>

<div class="abs-br m-6 text-xs opacity-50">
Source : rapports de durabilité des hébergeurs, Uptime Institute Global Data Center Survey (2023)
</div>

---

# L'intensité carbone dépend du pays

| Pays | gCO2/kWh | Commentaire |
|------|:--------:|-------------|
| Islande | ~20 | Géothermie + hydro |
| France | ~55 | Parc nucléaire dominant |
| Suède | ~45 | Hydro + éolien |
| Allemagne | ~350 | Charbon/gaz encore important |
| États-Unis | ~400 | Très variable par état |
| Pologne | ~700 | Charbon majoritaire |

<v-click>

<div class="mt-6 callout-why">

`us-east-1` par défaut est l'anti-pattern le plus répandu - changer de région peut diviser l'impact par 5 à 7. Le même hébergeur, le même PUE, mais un mix électrique différent.

</div>

</v-click>

<div class="abs-br m-6 text-xs opacity-50">
Source : Electricity Maps - intensité carbone en temps réel par pays
</div>

---

# Architecture hot/cold pour movie_logs

```
movie_logs
    |
    |-- < 6 mois   --> PostgreSQL (hot)            <- requêtes utilisateur
    |-- 6-24 mois  --> Stockage objet compressé (cold) : S3 Glacier, OVH Cold Archive
    +-- > 24 mois  --> Suppression ou export RGPD à la demande
```

<div class="mt-8 callout-why">
Héberger des années de logs dans PostgreSQL "chaud" coûte 10x plus cher - en argent et en énergie - qu'en stockage froid.
</div>

<!--
==================================================================
PHASE 4 - FRONTEND
==================================================================
-->

---
layout: section
---

# Phase 4
## Frontend

---

<span class="exercise-label">Exercice 06</span>

# Polices système et composants natifs

<span class="criteria-tag">4.5</span>
<span class="criteria-tag">4.8</span>
<span class="criteria-tag">6.7</span>

<img src="/requests-avant.webp" class="w-4/5 rounded-lg shadow-lg mt-4" />

<v-click>
<div class="mt-4 text-sm opacity-70">Avant même de taper un caractère, Letterflop télécharge une police web chez Google.</div>
</v-click>

<!--
Critères RGESN :
- 4.5 : Le service utilise-t-il des composants d'interface natifs plutôt que personnalisés ?
- 4.8 : Le service limite-t-il le téléchargement de polices ?
- 6.7 : Les ressources sont-elles hébergées sur le même domaine ?
-->

---

# Police système

<div class="diff-label before">Avant</div>

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=block" rel="stylesheet">
<body style="font-family: 'Inter', sans-serif;">
```

<v-click>
<div class="diff-label after">Après</div>

```html
<body style="font-family: system-ui, -apple-system, sans-serif;">
```

`system-ui` fait afficher à chaque OS sa police native : San Francisco, Segoe UI, Roboto - zéro téléchargement.
</v-click>

---

# Le star rating actuel

`movie.ts` - `attachStarInput()` :

```typescript {8-9|11-13|all}
for (let i = 1; i <= 5; i++) {
  const span = document.createElement('span');
  span.textContent = '★';
  span.className = 'text-2xl cursor-pointer transition-colors select-none';
  span.style.color = (value ?? 0) >= i ? '#f5c518' : '#404040';

  // Mauvaise pratique : événements souris uniquement, pas de clavier
  span.addEventListener('mouseenter', () => update(i));
  span.addEventListener('mouseleave', () => update(null));
  span.addEventListener('click', () => {
    value = i;
    onRate(i);
    update(null);
  });
}
```

<v-click>

<div class="mt-4 callout-why">
Des <code>&lt;span&gt;</code>, pas des éléments interactifs natifs. Trois écouteurs souris (<code>mouseenter</code>, <code>mouseleave</code>, <code>click</code>) recréent à la main ce qu'un <code>&lt;input type="radio"&gt;</code> fait nativement - sans jamais couvrir le clavier.
</div>

</v-click>

---

# Star rating natif

```html
<fieldset class="flex items-center gap-1">
  <legend class="sr-only">Votre note</legend>
  ${[1, 2, 3, 4, 5].map(value => `
    <label class="cursor-pointer">
      <input type="radio" name="rating" value="${value}"
             class="sr-only peer"
             aria-label="${value} étoile${value > 1 ? 's' : ''}"
             ${value === 3 ? 'checked' : ''}>
      <span class="text-2xl peer-checked:text-yellow-400 text-neutral-600
                   hover:text-yellow-300 transition-colors">★</span>
    </label>
  `).join('')}
</fieldset>
```

Navigation clavier native, accessible aux lecteurs d'écran, zéro `JavaScript` pour la sélection.

---

# Résultats mesurés

<img src="/requests-apres.webp" class="w-4/5 rounded-lg shadow-lg mt-4" />

<div class="mt-10">

| Métrique                  | Avant | Après |      Gain       |
|---------------------------|:-----:|:-----:|:---------------:|
| Requêtes vers Google      |  2-4  |   0   |   **-100 %**    |
| Domaines externes         |   2   |   0   |   **-100 %**    |
| Rating accessible clavier |  Non  |  Oui  | Conformité WCAG |

</div>

---

<span class="exercise-label">Exercice 07</span>

# Images adaptées et lazy loading

<span class="criteria-tag">6.4</span>
<span class="criteria-tag">6.5</span>

<img src="/network-matrix.webp" class="w-full rounded-lg shadow-lg mt-4" />

<div class="mt-4 text-sm opacity-70">Une recherche "Matrix" charge 20 affiches en taille <code>original</code> - jusqu'à 500 KB chacune, pour des vignettes de 200 px.</div>

<!--
Critères RGESN :
- 6.4 : Les médias sont-ils adaptés au contexte d'affichage ?
- 6.5 : Le service charge-t-il uniquement les ressources strictement nécessaires ?
-->

---

# Tailles TMDB adaptées

`TmdbService.java` :

<div class="diff-label before">Avant</div>

```java
dto.setPosterPath("https://image.tmdb.org/t/p/original" + rawPoster);
```

<v-click>
<div class="diff-label after">Après</div>

```java
// Résultats de recherche - vignettes de liste
dto.setPosterPath("https://image.tmdb.org/t/p/w185" + rawPoster);

// Fiche film - affichage plus grand
dto.setPosterPath("https://image.tmdb.org/t/p/w342" + posterPath);
```
</v-click>

---

# Lazy loading, dimensions, alt

```typescript{all|1-2|4-9}
// AVANT
`<img src="${movie.posterPath}" alt="" class="w-full object-cover">`

// APRÈS
`<img src="${movie.posterPath}"
      alt="Affiche du film ${movie.title}"
      loading="lazy"
      width="185" height="278"
      class="w-full object-cover">`
```

`loading="lazy"` est un attribut HTML natif - pas de JavaScript, pas de librairie.

---

# Résultats mesurés

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Taille par image | ~200-500 KB | ~10-20 KB | **-95 %** |
| Total transfert "Matrix" | ~4.5 MB | ~274 KB | **-94 %** |
| Images au premier rendu | 20 | ~5 (visibles) | **-75 %** |
| Layout Shift (CLS) | Élevé | Négligeable | Espace réservé |

---

<span class="exercise-label">Exercice 08</span>

# Pagination serveur

<span class="criteria-tag">6.5</span>
<span class="criteria-tag">7.1</span>

<img src="/history-avant.webp" class="w-full rounded-lg shadow-lg mt-4" />

<div class="mt-4 text-sm opacity-70">La page Historique demande 1000 logs pour en afficher 6 - à chaque changement de page.</div>

<!--
Critères RGESN :
- 6.5 : Le service charge-t-il uniquement les ressources strictement nécessaires ?
- 7.1 : Le service optimise-t-il les requêtes et traitements côté serveur ?
-->

---

# history.ts

<div class="diff-label before">Avant</div>

```typescript
async function loadPage(page: number): Promise<void> {
  const data = await getLogs(0, 1000);  // 1000 logs !
  const allLogs = data.content;
  const start = page * PAGE_SIZE;
  const slice = allLogs.slice(start, start + PAGE_SIZE);  // pagination client
}
```

<v-click>

<div class="diff-label after">Après</div>

```typescript
async function loadPage(page: number): Promise<void> {
  const data = await getLogs(page, PAGE_SIZE);   // seulement PAGE_SIZE logs
  const slice = data.content;                     // pas de slice côté client
  totalLogs = data.totalElements;                 // le serveur connaît le total
}
```

</v-click>

---

# Résultats mesurés

<img src="/history-apres.webp" class="w-full rounded-lg shadow-lg mt-4" />

<div class="mt-10">

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Logs transférés par requête | 1000 | 6 | **-99.4 %** |
| Taille de la réponse | ~123 KB | ~3 KB | **-97 %** |
| Full table scans côté serveur | 3 | 1 | **-67 %** |

</div>

<div class="mt-6 callout-why">
Le frontend ne doit jamais décider de la taille totale - c'est le serveur qui connaît le COUNT.
</div>

<!--
==================================================================
PHASE 5 - BACKEND
==================================================================
-->

---
layout: section
---

# Phase 5
## Backend

---

<span class="exercise-label">Exercice 09</span>

# Pagination SQL et indexes

<span class="criteria-tag">7.1</span>
<span class="criteria-tag">7.3</span>

<div class="mt-4 text-lg">
Le frontend demande maintenant 6 logs. Mais côté serveur, que fait <code>getAllLogs()</code> ?
</div>

<!--
Critères RGESN :
- 7.1 : Le service optimise-t-il les requêtes et traitements côté serveur ?
- 7.3 : Le service effectue-t-il uniquement les traitements strictement nécessaires ?
-->

---

# Diagnostic - 3 full table scans

```java
public Page<MovieLogDto> getAllLogs(int page, int size) {
    // Full table scan #1 : charger tous les logs
    List<MovieLog> allLogs = repository.findAllOrderByWatchedAtDesc();

    // Full table scan #2 : "au cas où" les données auraient changé
    List<MovieLog> freshLogs = repository.findAllOrderByWatchedAtDesc();

    // Tri en mémoire Java (déjà trié par SQL), pagination en Java...

    // Full table scan #3 : compter
    long total = repository.findAll().size();  // instancie TOUS les objets
    // ...
}
```

3 requêtes SQL, tri en mémoire, mapping dupliqué - pour une seule requête HTTP.

---

# Le Repository

```java
// MovieLogRepository.java
public interface MovieLogRepository extends JpaRepository<MovieLog, Long> {
    Page<MovieLog> findAllByOrderByWatchedAtDescCreatedAtDesc(Pageable pageable);
}
```

<div class="mt-8 callout-why">
Aucune requête écrite à la main. Spring Data <strong>dérive la requête du nom de la méthode</strong> (<code>findAllByOrderByWatchedAtDescCreatedAtDesc</code>) et le paramètre <code>Pageable</code> lui fait ajouter automatiquement <code>LIMIT</code>/<code>OFFSET</code> et le calcul du total.
</div>

---

# Le Service

```java
// MovieLogService.java
public Page<MovieLogDto> getAllLogs(int page, int size) {
    return repository.findAllByOrderByWatchedAtDescCreatedAtDesc(PageRequest.of(page, size))
            .map(this::toDto);
}
```

<div class="mt-8 callout-why">
Une seule ligne remplace les ~20 lignes du diagnostic précédent. <code>.map(this::toDto)</code> transforme le <code>Page&lt;MovieLog&gt;</code> en <code>Page&lt;MovieLogDto&gt;</code> <strong>sans jamais créer de liste intermédiaire</strong> - la pagination (contenu + total + nombre de pages) est préservée automatiquement.
</div>

---

# Ce que Spring Data exécute

```sql
SELECT * FROM movie_logs ORDER BY watched_at DESC, created_at DESC LIMIT 6 OFFSET 0;
SELECT COUNT(*) FROM movie_logs;
```

<div class="mt-8 callout-why">
Ce que Spring Data exécute réellement pour ces 4 lignes de code Java : une requête pour le contenu de la page, et un <code>COUNT(*)</code> automatique pour remplir <code>totalElements</code>. <strong>2 requêtes SQL</strong> au lieu de 3, aucun chargement complet en mémoire.
</div>

---

# Pourquoi indexer ?

Sans index, PostgreSQL fait un <strong>Full Table Scan</strong> : il lit toutes les lignes de la table pour en trouver une poignée - même avec un `LIMIT 6`.

Un index B-tree trie les valeurs à l'avance dans une structure arborescente : la base saute directement à la bonne branche au lieu de lire la table ligne par ligne.

```sql
-- db/updates/add_indexes.sql
CREATE INDEX IF NOT EXISTS idx_movie_logs_tmdb_id ON movie_logs (tmdb_id);
CREATE INDEX IF NOT EXISTS idx_movie_logs_watched_at ON movie_logs (watched_at DESC, created_at DESC);
```

<div class="mt-4 grid grid-cols-2 gap-x-8 text-sm">

<div><code>tmdb_id</code> - requêté à chaque affichage de fiche film</div>
<div><code>watched_at, created_at</code> - triés à chaque chargement de l'historique</div>

</div>

---

# L'impact de l'index

| Lignes | Full Table Scan | B-tree Index | Facteur |
|--------|:----------------:|:------------:|:-------:|
| 100 | 100 lectures | 7 lectures | 14× |
| 10 000 | 10 000 lectures | 14 lectures | 714× |
| 1 000 000 | 1 000 000 lectures | 20 lectures | 50 000× |

<div class="mt-8 callout-why">
Full Table Scan = O(n) : le temps de lecture croît linéairement avec la table. Index B-tree = O(log n) : il croît à peine. Plus la table grossit, plus l'écart explose - et c'est justement là que ça compte le plus.
</div>

<v-click>

<div class="mt-4 callout-why">
Moins de lignes lues = moins de disque sollicité, moins de CPU mobilisé, moins d'énergie par requête. Le RGESN 7.3 (traitements strictement nécessaires) se joue littéralement dans le plan d'exécution SQL.
</div>

</v-click>

---

# Résultats mesurés

| Endpoint | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| GET /api/logs?size=20 | 79 req/s | 140 req/s | **+77 %** |
| Latence p50 | 122 ms | 67 ms | **-45 %** |
| Données transférées | 123 KB | 7.4 KB | **-94 %** |

<div class="mt-6 callout-why">
Un seul mapping entity vers DTO, factorisé dans <code>toDto()</code> et référencé partout - zéro duplication.
</div>

---

<span class="exercise-label">Exercice 10</span>

# Cache applicatif et N+1

<span class="criteria-tag">7.1</span>
<span class="criteria-tag">4.7</span>

<div class="mt-4 text-lg">
Le problème N+1 : une requête initiale (<strong>1</strong>) déclenche une requête supplémentaire pour chacun de ses résultats (<strong>N</strong>) - au lieu d'une seule requête qui ramènerait tout d'un coup.
</div>

```
Recherche "Matrix" -> 1 appel /search/movie -> 20 résultats
                     |
                     |-- 1 appel /movie/603 (Matrix)
                     |-- 1 appel /movie/604 (Matrix Reloaded)
                     |-- ... x 17 autres films
                     +-- Total : 21 appels HTTP

10 utilisateurs simultanés = 210 appels HTTP
```

<!--
Critères RGESN :
- 7.1 : Le service met-il en cache les données les plus utilisées ?
- 4.7 : Le service limite-t-il les appels réseau ?
-->

---

# Payé pour rien, appelé pour rien

Chaque appel `/movie/{id}` ramène bien plus que ce qui s'affiche dans la grille de résultats :

<div class="mt-4 grid grid-cols-2 gap-x-8 text-sm">

<div>

**Affiché dans la grille**
- Titre, année, affiche

</div>

<div>

**Récupéré mais jamais montré**
- `synopsis`, `runtime`, `genres`
- `voteAverage`, `popularity`
- `originalTitle`, `originalLanguage`

</div>

</div>

<div class="mt-8 callout-why">
Et cette donnée est quasi-statique : le réalisateur de Matrix ne change pas d'une recherche à l'autre. Le fait de la re-demander à chaque fois est une dépense pure - c'est exactement ce qu'un cache est fait pour éviter.
</div>

---

# Activer le cache

```java
@SpringBootApplication
@EnableCaching
public class LetterflopApplication { ... }
```

<div class="mt-8 callout-why">
<code>@EnableCaching</code> active l'infrastructure de cache de Spring : au démarrage, Spring enveloppe les beans annotés <code>@Cacheable</code> dans un proxy qui intercepte chaque appel. Sans cette annotation, <code>@Cacheable</code> n'a strictement aucun effet.
</div>

---

# Annoter les méthodes à cacher

```java
@Cacheable("tmdb-search")
public List<MovieSearchResultDto> searchMovies(String query) { ... }

@Cacheable("tmdb-detail")
public MovieDetailDto getMovieDetail(Integer tmdbId) { ... }
```

<div class="mt-8 callout-why">
Le proxy utilise les <strong>paramètres de la méthode comme clé de cache</strong> (<code>query</code>, <code>tmdbId</code>). Premier appel : la méthode s'exécute, le résultat est stocké. Appels suivants avec le même paramètre : la méthode n'est <strong>jamais exécutée</strong>, le résultat mis en cache est retourné directement. Deux noms de cache distincts (<code>tmdb-search</code>, <code>tmdb-detail</code>) car les deux méthodes retournent des formes de données différentes.
</div>

---

# Configurer Caffeine

```properties
spring.cache.caffeine.spec=maximumSize=500,expireAfterWrite=3600s
```

<div class="mt-8 grid grid-cols-2 gap-x-8 text-sm">

<div>

**`maximumSize=500`**

Au-delà de 500 entrées, les moins récemment utilisées sont évincées - la mémoire du cache reste bornée.

</div>

<div>

**`expireAfterWrite=3600s`**

Chaque entrée expire 1h après son écriture - cohérent avec des données quasi-statiques (le réalisateur de Matrix ne change pas d'une heure à l'autre).

</div>

</div>

<div class="mt-6 callout-why">
Caffeine est le cache in-memory le plus performant pour la JVM - aucune dépendance externe, aucun serveur à opérer, contrairement à Redis.
</div>

---

# Timeouts RestTemplate

```java
@Bean
public RestTemplate restTemplate() {
    HttpComponentsClientHttpRequestFactory factory =
        new HttpComponentsClientHttpRequestFactory();
    factory.setConnectTimeout(Duration.ofSeconds(5));
    factory.setReadTimeout(Duration.ofSeconds(10));
    return new RestTemplate(factory);
}
```

Sans timeout, un appel TMDB lent bloque un thread Tomcat indéfiniment.

---

# Résultats mesurés

| Métrique | Avant | Après (cache) | Gain |
|----------|:-----:|:--------------:|:----:|
| Appels TMDB - 1ère recherche | 21-41 | 21-41 | 0 % (cache froid) |
| Appels TMDB - 2ème recherche | 21-41 | **0** | **-100 %** |
| Temps de réponse - 2ème recherche | ~2-5 s | **< 10 ms** | **~99 %** |

<div class="mt-6 callout-why">
Le cache amortit le N+1, il ne le supprime pas. Le vrai fix : ne pas appeler <code>getMovieDetail()</code> dans la boucle de <code>searchMovies()</code>.
</div>

---

<span class="exercise-label">Exercice 11</span>

# Stockage sobre et rétention

<span class="criteria-tag">7.2</span>
<span class="criteria-tag">2.7</span>

<div class="mt-4 text-lg">
Chaque log de visionnage stocke l'URL complète de l'affiche TMDB - taille d'image comprise. Deux problèmes distincts, deux angles de sobriété : <strong>quoi</strong> on stocke, et <strong>combien de temps</strong> on le garde.
</div>

<div class="mt-6 callout-why">
L'URL mélange une donnée (le chemin de l'affiche) et une décision d'affichage (<code>original</code>, <code>w342</code>...). Si demain on change la taille des vignettes, il faut migrer <strong>toutes</strong> les lignes de la base.
</div>

<!--
Critères RGESN :
- 7.2 : Le service stocke-t-il uniquement les données nécessaires ?
- 2.7 : Existe-t-il une stratégie de décommissionnement des données ?
-->

---

# Séparer la donnée de sa présentation

<div class="diff-label before">Stocké avant</div>

```
https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

<v-click>
<div class="diff-label after">Stocké après</div>

```
/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

<div class="mt-6 callout-why">
Le chemin seul est la donnée. La taille d'affichage est une décision de présentation, prise au moment de servir la réponse - pas au moment de l'écrire en base. Changer la taille d'affichage ne nécessite plus de migrer toutes les lignes.
</div>
</v-click>

---

# Extraction et reconstruction

```java
private static final String TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w92";

private String extractTmdbPath(String posterPath) {
    if (posterPath == null) return null;
    return posterPath.replaceAll("https://image\\.tmdb\\.org/t/p/[^/]+", "");
}

// toDto() reconstruit l'URL avec la taille adaptée à l'affichage
dto.setPosterPath(log.getPosterPath() != null
    ? TMDB_IMAGE_BASE + log.getPosterPath()
    : null);
```

```sql
-- db/updates/migrate_poster_path.sql
UPDATE movie_logs
SET poster_path = regexp_replace(poster_path, 'https://image\.tmdb\.org/t/p/[^/]+', '')
WHERE poster_path LIKE 'https://image.tmdb.org%';
```

---

# Politique de rétention

| Ancienneté | Traitement | Stockage |
|------------|------------|----------|
| < 6 mois | Données actives | PostgreSQL (hot) |
| 6-24 mois | Archivage compressé | Stockage objet (cold) |
| > 5 ans | Export ou suppression | Export RGPD à la demande |

<div class="mt-8 callout-why">
Chaque octet stocké "chaud" coûte 10x plus en énergie que du stockage froid. Une politique de rétention se pense dès le jour 1.
</div>

---

# Le mécanisme technique

<div class="grid grid-cols-1 gap-4 mt-4 text-sm">

<div class="p-4 rounded-lg border-2 border-navy">
<strong>Champ <code>archivedAt TIMESTAMP</code></strong> ajouté à l'entité <code>MovieLog</code> - marque une ligne comme archivée sans la déplacer physiquement.
</div>

<div class="p-4 rounded-lg border-2 border-navy">
<strong>Job <code>@Scheduled</code></strong> exécuté chaque nuit - archive automatiquement les logs de plus de 6 mois.
</div>

<div class="p-4 rounded-lg border-2 border-navy">
<strong>Endpoint <code>/api/logs/export</code></strong> - droit à la portabilité RGPD, à la demande de l'utilisateur.
</div>

</div>

<div class="mt-6 callout-why">
Les logs archivés ne sont plus retournés par les requêtes standard (clause <code>WHERE archivedAt IS NULL</code>). Pour un journal de visionnage personnel, 5 ans est généreux - l'important est d'avoir une politique définie, pas que la durée soit parfaite.
</div>

<!--
==================================================================
PHASE 6 - ALLER PLUS LOIN
==================================================================
-->

---
layout: section
---

# Phase 6
## Aller plus loin

---

<span class="exercise-label">Exercice 12</span>

# Usage de l'IA

<span class="criteria-tag">2.10</span>
<span class="criteria-tag">2.6</span>

<div class="mt-6 text-lg">
La question n'est pas "peut-on utiliser l'IA ?" mais <strong>"l'IA est-elle la bonne réponse à ce problème précis ?"</strong>
</div>

<!--
Critères RGESN :
- 2.10 : L'impact des services tiers a-t-il été évalué ?
- 2.6 : L'impact environnemental a-t-il été évalué avant la mise en production ?
-->

---

# Trois scénarios

| Scénario | Option IA | Option déterministe | Décision |
|----------|-----------|----------------------|:--------:|
| Films similaires | Embeddings (~3g) | Endpoint TMDB `/similar` (~0.3g) | Déterministe |
| Sentiment des commentaires | NLP (~2g) | Note 1-5 déjà donnée (~0g) | Pas nécessaire |
| Résumé annuel | LLM narratif (~5g) | SQL agrégation (~0.01g) | Déterministe |

<div class="mt-6 callout-why">
Chaque requête IA consomme 10 à 1000× plus de ressources qu'un traitement déterministe équivalent.
</div>

<div class="abs-br m-6 text-xs opacity-50">
Source : Luccioni et al. (2024) - Power Hungry Processing
</div>

---

# L'arbre de décision

```
La tâche porte sur des données structurées ?
  |-- OUI --> SQL / code déterministe
  +-- NON --> L'input est du texte libre / non structuré ?
                |-- OUI --> Une alternative déterministe existe ?
                |             |-- OUI --> Utiliser l'alternative
                |             +-- NON --> Volume élevé (>1000/jour) ?
                |                           |-- OUI --> Justifier le coût, plus petit modèle
                |                           +-- NON --> IA acceptable si la valeur le justifie
                +-- NON --> Probablement pas besoin d'IA
```

---

# Green prompting

Quand l'usage de l'IA EST légitime :

1. **Choisir le plus petit modèle adapté** - facteur 10 à 50× en consommation
2. **Minimiser le contexte** - n'envoyer que les données strictement nécessaires
3. **Cacher les réponses** - `@Cacheable` sur les requêtes répétitives
4. **Batch plutôt que temps réel** - regrouper en traitement nocturne

<div class="mt-8 callout-why">
Le réflexe "on va mettre de l'IA" est devenu le <code>SELECT *</code> des choix d'architecture.
</div>

---

<span class="exercise-label">Exercice 13</span>

# EcoIndex dans la CI

<span class="criteria-tag">1.4</span>
<span class="criteria-tag">1.5</span>

<div class="mt-6 text-lg">
On teste le code en CI pour éviter les régressions fonctionnelles. Pourquoi pas la sobriété ?
</div>

<div class="mt-4 text-lg">
La sobriété est une métrique, pas une intention.
</div>

<!--
Critères RGESN :
- 1.4 : Les revues de conception intègrent-elles régulièrement l'écoconception ?
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction ?
-->

---

# greenit-urls.yaml

```yaml
- name: 'Recherche'
  url: 'http://localhost:3000'
- name: 'Historique'
  url: 'http://localhost:3000/history.html'
```

# Le gate dans la CI

```yaml
- name: GreenIT Analysis
  id: greenit
  uses: ythirion/greenit-analysis-action@0.1.2
  with:
    url-file: 'greenit-urls.yaml'
    min-ecoindex: '50'
    fail-on-threshold: 'true'
    upload-report: 'true'
```

---

# Stratégie de seuils progressifs

| Phase | min-ecoindex | Action CI |
|-------|:------------:|-----------|
| Démarrage | 30 (note C) | Warning uniquement |
| Sprint 2 | 50 (note B) | Fail le build |
| Objectif | 75 (note A) | Fail le build |

<div class="mt-8 callout-why">
Commencer permissif, resserrer progressivement - imposer un seuil A dès le départ découragerait l'équipe.
</div>

---

<span class="exercise-label">Exercice 14</span>

# Badge de transparence

<span class="criteria-tag">1.5</span>

<div class="mt-6 text-lg">
On met des Nutri-Scores sur les aliments. Pourquoi pas sur les sites web ?
</div>

<div class="mt-4 text-lg">
Un badge <strong>A</strong> vert valorise le travail de l'équipe. Un badge <strong>D</strong> orange crée une pression naturelle pour corriger.
</div>

<!--
Critères RGESN :
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction rendus publics ?
-->

---

# Badge EcoIndex officiel

```html
<footer class="border-t border-neutral-800 mt-16 py-6">
  <div class="max-w-6xl mx-auto px-8 flex items-center justify-between">
    <div id="ecoindex-badge" data-theme="dark"></div>
    <a href="/empreinte.html" class="text-neutral-400 hover:text-white no-underline text-xs">
      Notre empreinte
    </a>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
```

Impact total : ~1.3 KB (JS + SVG). Le badge interroge l'API réelle - impossible de tricher.

---

# Résultats attendus

| Page | Score | Note | Requêtes | Poids |
|------|:-----:|:----:|:--------:|:-----:|
| Recherche | 70+ | A-B | < 10 | < 200 KB |
| Historique | 75+ | A | < 10 | < 100 KB |

<div class="mt-8 callout-why">
La transparence ne fonctionne que si elle est authentique - le badge cnumr affiche le vrai score, pas une valeur choisie.
</div>

<!--
==================================================================
PHASE 7 - BILAN
==================================================================
-->

---
layout: section
---

# Phase 7
## Bilan

---

<span class="exercise-label">Exercice 15</span>

# Le boss final

<div class="mt-6 text-lg">
Vous avez traversé les 8 familles techniques du RGESN. Il est temps de mesurer l'impact cumulé.
</div>

---

# Bilan global

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Images Docker | ~2.63 GB | ~791 MB | **-80 %** |
| Transfert images "Matrix" | ~4.5 MB | ~274 KB | **-95 %** |
| Logs chargés par page | 1000 | 6 | **-99 %** |
| Débit API /api/logs | ~79 req/s | ~140 req/s | **+77 %** |
| Requêtes Google Fonts | 2-4 | 0 | **-100 %** |
| Full table scans par requête | 3 | 0 | **-100 %** |
| Appels TMDB (2ème recherche) | 21-41 | 0 | **-100 %** |
| EcoIndex | D-E | A-B | **+2-3 notes** |

---

# Ce que les outils couvrent

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">

<div>

**Automatisable**
- Poids des pages, requêtes, performance API
- Taille des images Docker
- Lazy loading, alt text, focus visible

</div>

<div>

**Non automatisable**
- L'utilité réelle du service (1.1)
- La pertinence d'une feature vs son impact (2.6)
- Le choix de l'hébergeur (8.3-8.8)
- La décision d'utiliser l'IA ou non (2.10)

</div>

</div>

<div class="mt-8 callout-why">
Les outils automatisés couvrent ~30-40% des critères RGESN. Le reste relève de décisions humaines - même constat que pour l'accessibilité.
</div>

---
layout: statement
---

# "Quelles 2 pratiques de cet atelier vais-je appliquer dès cette semaine ?"

<p class="mt-8 text-lg opacity-80">Pas 10. Pas "tout à la fois". Deux. C'est assez pour commencer, et c'est assez pour que ça tienne.</p>

---
layout: cover
class: text-center
---

<div class="flex flex-col h-full justify-center">

# Des logiciels bien conçus

## *et* sobres

<p class="opacity-80 mt-4 text-lg">ça ne se décrète pas - ça se pratique.</p>

</div>

<div class="abs-bl m-6 font-mono text-sm opacity-80">
  #sharingiscaring
</div>
<div class="abs-br m-6 font-mono text-sm opacity-80">
  Yoan Thirion
</div>
