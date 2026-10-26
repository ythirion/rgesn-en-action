---
theme: ./theme
title: Atelier RGESN - Le numérique responsable en action
info: |
  Atelier RGESN - Le numérique responsable en action.
  15 exercices pratiques de numérique responsable sur Letterflop.
  Basé sur le RGESN (ARCEP / Arcom / ADEME / DINUM).
lang: fr
colorSchema: light
canvasWidth: 1280
fonts:
  provider: none
transition: none
mdc: true
layout: cover
eyebrow: Atelier · numérique responsable
author: Yoan Thirion
image: /logo.webp
alt: Logo de l'atelier, Yoan Thirion pêche depuis une barque
---

# Le RGESN <mark>en action</mark>

<p class="subtitle">15 exercices pratiques, de la mesure à la correction, sur du vrai code.</p>

<p class="author">Yoan Thirion · #sharingiscaring</p>

<a class="cover-license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr"><img src="/cc-by-sa.svg" alt="Licence Creative Commons Attribution, Partage dans les mêmes conditions 4.0 International" width="88" height="31" /></a>

<!--
Slide de garde - visuel de l'atelier img/rgesn-en-action.webp.
-->

---
part: Ouverture
---

<span class="kicker">Pourquoi cet atelier</span>

# On en parle beaucoup...

<p class="lead">Numérique responsable, fresque du numérique, manifeste, chartes signées en conférence.</p>

## Mais lundi matin, devant ton IDE, qu'est-ce qui change vraiment ?

<div class="box box--accent mt-8" v-click>
  <h3>Cet atelier n'est pas une énième prise de conscience.</h3>
  <p>C'est une <strong>boîte à outils</strong>.</p>
</div>

<p class="lead mt-6" v-click>15 exercices pratiques que tu pourras appliquer immédiatement : sur ton produit, dans tes affinages, <span class="mark">dans ton code.</span></p>

<!--
Reprend le paragraphe d'accroche du README.
-->

---
layout: statement
part: L'impact du numérique
---

<span class="kicker">Contexte</span>

# L'impact du numérique <mark>en quelques chiffres</mark>

---

<span class="kicker">Ordres de grandeur</span>

# Pourquoi ça compte

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="box" v-click>
    <div class="figure">6</div>
    <p class="mt-2">équipements numériques actifs par personne, en moyenne</p>
  </div>
  <div class="box" v-click>
    <div class="figure">5,5×</div>
    <p class="mt-2">la France : les émissions de GES du numérique s'il était un pays</p>
  </div>
  <div class="box" v-click>
    <div class="figure">&gt; 4 %</div>
    <p class="mt-2">des émissions de GES du numérique proviennent déjà de l'IA</p>
  </div>
  <div class="box box--accent" v-click>
    <div class="figure">40 %</div>
    <p class="mt-2">du budget GES annuel soutenable d'un·e internaute, pour rester sous 1,5 °C</p>
  </div>
</div>

<p class="mt-6" v-click>Et l'indicateur le plus critique n'est pas le carbone : c'est l'<span class="mark">utilisation des ressources, minéraux et métaux</span>.</p>

<div class="source">
  Source : <a href="https://www.greenit.fr/2025/02/04/le-numerique-cest-40-du-budget-climat-soutenable/">GreenIT.fr, « Le numérique, c'est 40 % du budget climat soutenable » (2025)</a>.
</div>

---
layout: statement
---

# Ces chiffres ne se règlent pas en signant une charte.

Ils se règlent dans le code, l'architecture et les choix produit.

<p v-click>C'est exactement ce que cet atelier te donne <mark>les moyens de faire.</mark></p>

---
layout: statement
part: Letterflop
---

<span class="kicker">Le fil rouge de l'atelier</span>

# <mark>Letterflop</mark>

---

<span class="kicker">Le fil rouge</span>

# Letterflop

<div class="grid grid-cols-2 gap-10 items-center mt-4">

<div>

Un journal de visionnage de films.

- Rechercher des films via l'API **TMDB**
- Consulter leurs fiches
- Enregistrer des visionnages avec une note
- Parcourir son historique

<p class="mt-6"><a class="promo__link" href="https://github.com/ythirion/letter-flop">github.com/ythirion/letter-flop</a></p>

</div>

<img src="/letter-flop.webp" class="shot w-full" alt="Capture de Letterflop : la recherche de films" />

</div>

---

<span class="kicker">Le fil rouge</span>

# Stack technique

<div class="tags">
  <span>PostgreSQL 15</span>
  <span>Spring Boot 3.5 / Java 25</span>
  <span>TypeScript / Tailwind / Vite</span>
  <span>Docker Compose</span>
</div>

<div class="box box--accent mt-12" v-click>
  <p>La codebase contient volontairement des <strong>mauvaises pratiques</strong> documentées, couvrant l'ensemble des familles du RGESN. Chaque exercice guide pour les identifier, les mesurer et les corriger.</p>
</div>

---

<span class="kicker">Le fil rouge</span>

# Deux branches

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="box">
    <div class="chips"><span>main</span></div>
    <p class="mt-4">Le code de départ, avec les mauvaises pratiques à identifier et corriger pendant l'atelier.</p>
  </div>
  <div class="box box--accent">
    <div class="chips"><span>rgesn</span></div>
    <p class="mt-4">Le corrigé de référence, pour comparer votre solution ou débloquer un exercice.</p>
  </div>
</div>

---

<span class="kicker">Le fil rouge</span>

# Installation

```bash
git clone https://github.com/ythirion/letter-flop
cd letter-flop

cp .env.example .env
# Éditer .env et ajouter votre TMDB_API_KEY

docker compose up --build
```

<p class="mt-6" v-click>L'application est accessible sur <code>http://localhost:3000</code>.</p>

---

<span class="kicker">Le fil rouge</span>

# Prérequis

<div class="tags">
  <span>Docker et Docker Compose</span>
  <span>Un IDE (VS Code, IntelliJ...)</span>
  <span>Node.js 20+</span>
  <span>Un navigateur avec les DevTools</span>
</div>

<p class="lead mt-10" v-click>Une clé API TMDB, <span class="mark">gratuite</span> sur <a href="https://www.themoviedb.org">themoviedb.org</a>.</p>

---
layout: statement
part: Le RGESN
---

<span class="kicker">Le référentiel</span>

# Référentiel Général d'Écoconception des <mark>Services Numériques</mark>

---

<span class="kicker">Le référentiel</span>

# Le RGESN

<div class="grid grid-cols-2 gap-10 items-center mt-4">

<div>

Publié par l'**ARCEP**, l'**Arcom**, l'**ADEME** et la **DINUM**.

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="box box--accent">
    <div class="figure">79</div>
    <p class="mt-2">critères</p>
  </div>
  <div class="box">
    <div class="figure">9</div>
    <p class="mt-2">familles</p>
  </div>
</div>

</div>

<a href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/">
  <img src="/rgesn-arcep.webp" class="shot w-full" alt="Couverture du RGESN publié par l'ARCEP" />
</a>

</div>

---

<span class="kicker">Le référentiel</span>

# Les 9 familles

<div class="families mt-6">
  <span><small>01</small>Stratégie</span>
  <span><small>02</small>Spécifications</span>
  <span><small>03</small>Architecture</span>
  <span><small>04</small>UX/UI</span>
  <span><small>05</small>Contenus</span>
  <span><small>06</small>Frontend</span>
  <span><small>07</small>Backend</span>
  <span><small>08</small>Hébergement</span>
  <span><small>09</small>Algorithmie</span>
</div>

<p class="lead mt-8" v-click>Cet atelier couvre <span class="mark">les 9 familles</span> à travers des exercices concrets sur Letterflop.</p>

---

<span class="kicker">L'atelier</span>

# Format

<div class="grid grid-cols-3 gap-5 mt-4">
  <div class="box">
    <h3>1 journée</h3>
    <p>~7-8h, ou 2 demi-journées</p>
  </div>
  <div class="box">
    <h3>Mob / pair</h3>
    <p>programming en binôme ou en équipe de 3-4</p>
  </div>
  <div class="box">
    <h3>Tous niveaux</h3>
    <p>front / back / fullstack, aucun prérequis en numérique responsable</p>
  </div>
</div>

<div class="box box--accent mt-8" v-click>
  <p><strong>Avec quoi tu repars ?</strong> Une liste de pratiques concrètes, des outils installés, et une règle simple : en choisir 2, les appliquer cette semaine.</p>
</div>

<p class="lead mt-6" v-click>Parce que des logiciels bien conçus <em>et</em> sobres, ça ne se décrète pas : <span class="mark">ça se pratique.</span></p>

---
layout: statement
part: Au programme
---

<span class="kicker">Au programme</span>

# 7 phases, <mark>15 exercices</mark>

---

<span class="kicker">Au programme</span>

# 7 phases

<div class="phases mt-6">
  <div><strong>01</strong> Comprendre et mesurer</div>
  <div><strong>02</strong> Challenger le besoin</div>
  <div><strong>03</strong> Infrastructure</div>
  <div><strong>04</strong> Frontend</div>
  <div><strong>05</strong> Backend</div>
  <div><strong>06</strong> Aller plus loin</div>
  <div><strong>07</strong> Bilan</div>
</div>

<p class="lead mt-12" v-click>La suite au fil de l'eau, <span class="mark">exercice après exercice.</span></p>

<!--
==================================================================
PHASE 1 - COMPRENDRE ET MESURER
==================================================================
-->

---
layout: section
number: 1
part: Phase 1
---

<span class="kicker">Phase 1</span>

# Comprendre et <mark>mesurer</mark>

---

<span class="kicker">Exercice 01</span>

# Mesurer avant d'agir

<div class="chips"><span>1.5</span><span>6.1</span></div>

<p class="lead mt-6">Un développeur qui optimise sans mesurer, c'est <span class="mark">un médecin qui prescrit sans diagnostiquer.</span></p>

<div class="why mt-8">
Établir la baseline complète de Letterflop avec 4 outils : Docker, DevTools Network, benchmark API, EcoIndex.
</div>

<!--
Critères RGESN :
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction de ses impacts environnementaux ?
- 6.1 : Le service minimise-t-il le poids et le nombre de requêtes des pages ?
-->

---

<span class="kicker">Exercice 01</span>

# Baseline : les outils

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

<span class="kicker">Exercice 01</span>

# Résultats mesurés

<img src="/network-matrix.webp" class="shot w-full max-h-36 object-cover object-top" alt="Onglet Network des DevTools lors d'une recherche Matrix" />

<div class="grid grid-cols-2 gap-x-10 mt-4">

<div v-click>

**Images Docker**

| Service | Taille |
|---------|--------|
| frontend | ~904 MB |
| backend | ~1.28 GB |
| db | ~445 MB |
| **Total** | **~2.63 GB** |

</div>

<div v-click>

**API : benchmark.sh**

| Endpoint | req/s |
|----------|-------|
| GET /api/logs?size=20 | ~79 req/s |
| POST /api/logs | ~193 req/s |

<p class="mt-3 text-lg">Page historique : <strong>1 requête</strong> ramène <span class="mark">1000 logs</span> pour en afficher 6.</p>

</div>

</div>

---

<span class="kicker">Exercice 02</span>

# Le pari empreinte et l'ACV express

<div class="chips"><span>2.6</span><span>1.1</span></div>

<p class="mt-4">Combien coûte une heure de Netflix ? Un mail avec pièce jointe ? Une requête ChatGPT ? Personne ne nous a jamais enseigné ces ordres de grandeur.</p>

<p>Résultat : on arbitre des décisions produit à l'aveugle. Une user story "impressionnante" et une user story "banale" semblent coûter la même chose, alors qu'elles peuvent différer <span class="mark">d'un facteur 100 ou 1000.</span></p>

<div class="why mt-6">
L'ACV express (Analyse de Cycle de Vie, niveau 1) donne un ordre de grandeur en 10 minutes, sans outillage lourd : assez pour trancher un arbitrage produit.
</div>

<!--
Critères RGESN :
- 2.6 : Le service numérique a-t-il fait l'objet d'une revue d'impact environnemental avant sa mise en production ?
- 1.1 : Le service numérique a-t-il été évalué favorablement en termes d'utilité par rapport à ses impacts ?
-->

---

<span class="kicker">Exercice 02</span>

# Le pari empreinte : réponses

| Situation | CO2e | Équiv. voiture |
|-----------|:----:|:--------------:|
| 1h de Netflix en HD | ~36 g | ~300 m |
| Mail 5 Mo à 10 personnes | ~50 g | ~420 m |
| 1 requête ChatGPT (GPT-4) | ~2-4 g | ~25 m |
| **Réunion vidéo 1h, 6 pers.** | **~500-700 g** | **~5 km** |
| Recherche Google | ~0,2-0,3 g | ~2 m |
| Image Midjourney / DALL-E 3 | ~3-10 g | ~50 m |

<p class="mt-5" v-click>La réunion vidéo est de loin la plus impactante : <span class="mark">couper les caméras divise son impact par ~10.</span></p>

<div class="source">
  Sources : IEA / Carbon Brief 2020, ADEME 2019, Luccioni et al. 2024, Carbon Trust 2021, Google Sustainability Report 2023.
</div>

---

<span class="kicker">Exercice 02</span>

# Où se joue l'impact

<div class="bars mt-8" role="list">
  <div class="bar" role="listitem">
    <span>Terminaux</span>
    <div class="bar__track"><div class="bar__fill" style="width: 70%"></div></div>
    <span class="bar__value">60-80 %</span>
  </div>
  <div class="bar" role="listitem">
    <span>Réseau</span>
    <div class="bar__track"><div class="bar__fill bar__fill--stripes" style="width: 18%"></div></div>
    <span class="bar__value">15-20 %</span>
  </div>
  <div class="bar" role="listitem">
    <span>Datacenter</span>
    <div class="bar__track"><div class="bar__fill bar__fill--dots" style="width: 10%"></div></div>
    <span class="bar__value">5-15 %</span>
  </div>
</div>

<div class="why mt-8">
Le levier #1 n'est pas le serveur, c'est l'usage côté client : temps passé, complexité d'affichage, données transférées. <strong>80 % de l'impact des terminaux vient de leur fabrication</strong>, pas de leur usage.
</div>

<div class="source">
  Source : Luccioni et al. (2024), Power Hungry Processing.
</div>

---

<span class="kicker">Exercice 02</span>

# Le backlog de Letterflop

<p>Trois user stories, à comparer avec la même méthode :</p>

<div class="grid grid-cols-3 gap-5 mt-4">
  <div class="box">
    <h3>US-A</h3>
    <p>Générer une affiche personnalisée pour chaque film loggé, créée par IA à partir du synopsis et de ma note.</p>
  </div>
  <div class="box">
    <h3>US-B</h3>
    <p>Voir la bande-annonce en HD du film directement sur la fiche, en lecture automatique à l'ouverture de la page.</p>
  </div>
  <div class="box">
    <h3>US-C</h3>
    <p>Enregistrer un visionnage avec une note, une date et un commentaire.</p>
  </div>
</div>

<p class="lead mt-8">Trois façons plausibles d'ajouter de la valeur au produit. Laquelle a <span class="mark">le meilleur ratio valeur / impact ?</span></p>

---

<span class="kicker">Exercice 02</span>

# Comparer l'impact des 3

| User story | Approche technique | CO2e / utilisation |
|------------|---------------------|:-------------------:|
| **US-A** - Affiche IA | Génération d'image par IA | **~5 g** |
| **US-B** - Bande-annonce autoplay | Streaming vidéo HD | **~10-30 g** *(estimé)* |
| **US-C** - Formulaire de log | POST HTTP simple | **~0.01 g** |

<p class="mt-3 text-base" v-click>US-B : pas de chiffre GreenIT dédié, estimation par analogie avec le pari empreinte (1h de Netflix HD ≈ 36 g). Même famille technique : streaming vidéo.</p>

<p class="lead mt-4 text-center"><span class="mark">US-A / US-C : ~750×</span></p>

<div class="why mt-4">
La feature la plus impressionnante est souvent celle qui a le plus d'impact. La plus banale est souvent la plus sobre. On formalisera la décision (construire / retravailler / abandonner) à l'exercice 3.
</div>

---

<span class="kicker">Exercice 02</span>

# L'ACV express, réutilisable en affinage

| Niveau 1 (10 min) | Niveau 2 (1-3 jours) | Niveau 3 (semaines) |
|---|---|---|
| EcoIndex, Website Carbon | Référentiel ADEME + outils | ISO 14040, cabinet |
| Sensibilisation | Pilotage équipe | Reporting CSRD, audit |
| **Commence par celui-ci** | Action sur 1 sprint | Action sur 1 trimestre |

<div class="why mt-6">
Le niveau 1 tient dans un refinement : dès qu'un PO propose une US, on estime son poids de page, on applique le ratio ~0.5 g CO2e/MB, on compare au reste du backlog. Pas d'outillage, pas de spécialiste : juste une question de plus posée à voix haute.
</div>

<div class="why mt-4">
Raisonner en ordres de grandeur, pas en chiffres absolus à 3 décimales : "A coûte 750× plus que B" est plus actionnable que "A coûte 547 kg".
</div>

<!--
==================================================================
PHASE 2 - CHALLENGER LE BESOIN
==================================================================
-->

---
layout: section
number: 2
part: Phase 2
---

<span class="kicker">Phase 2</span>

# Challenger <mark>le besoin</mark>

---

<span class="kicker">Exercice 03</span>

# Challenger le besoin

<div class="chips"><span>2.3</span><span>2.6</span><span>2.7</span><span>2.9</span><span>2.10</span></div>

<p class="lead mt-8">La question habituelle : "Laquelle a le plus de valeur métier ?"</p>

<p class="lead">La question RGESN : <span class="mark">"Laquelle a le meilleur ratio valeur / impact ?"</span></p>

<!--
Critères RGESN :
- 2.3 : Le service numérique fonctionne-t-il sur une connexion lente ou en mode dégradé ?
- 2.6 : L'impact environnemental a-t-il été évalué avant la mise en production ?
- 2.7 : Existe-t-il une stratégie de décommissionnement ?
- 2.9 : L'impact des composants d'interface prêts à l'emploi a-t-il été évalué ?
- 2.10 : L'impact des services tiers a-t-il été évalué ?
-->

---

<span class="kicker">Exercice 03</span>

# Trois user stories, un sprint

<table class="grid-table mt-4">
  <thead>
    <tr><th>US</th><th>Description</th><th>Décision</th></tr>
  </thead>
  <tbody>
    <tr><td>A</td><td>Affiches personnalisées par IA</td><td><strong>Abandonner</strong></td></tr>
    <tr><td>B</td><td>Bande-annonce HD en autoplay</td><td><strong>Retravailler</strong></td></tr>
    <tr><td>C</td><td>Formulaire simple de log</td><td><strong>Construire</strong></td></tr>
  </tbody>
</table>

<div class="why mt-8" v-click>
US-A = ~750× l'impact de US-C pour un même volume d'utilisateurs. Le retournement : <strong>la feature la plus impressionnante est souvent celle qu'il faut abandonner.</strong>
</div>

---

<span class="kicker">Exercice 03</span>

# US-B retravaillée

<div class="diff-label">Avant</div>

<blockquote class="quote"><p>Je veux voir la bande-annonce HD directement sur la fiche, <strong>en lecture automatique</strong>.</p></blockquote>

<div class="diff-label after mt-6">Après</div>

<blockquote class="quote"><p>Je veux <span class="mark">cliquer sur un bouton</span> "Voir la bande-annonce", affichée en <span class="mark">qualité standard par défaut</span>, avec la possibilité de passer en HD.</p></blockquote>

<div class="chips mt-8">
  <span>Pas d'autoplay (4.1)</span>
  <span>Vignette cliquable, pas de lecteur embarqué</span>
  <span>Qualité standard par défaut</span>
  <span>Lazy loading de l'iframe au clic</span>
</div>

<!--
==================================================================
PHASE 3 - INFRASTRUCTURE
==================================================================
-->

---
layout: section
number: 3
part: Phase 3
---

<span class="kicker">Phase 3</span>

# <mark>Infrastructure</mark>

---

<span class="kicker">Exercice 04</span>

# Multi-stage builds Docker

<div class="chips"><span>3.1</span><span>3.3</span></div>

<div class="docker mt-6">
  <img src="/gorilla.webp" class="docker__img" alt="Un gorille, symbole d'images Docker trop lourdes" />
  <div>
    <p class="lead">Letterflop pèse <span class="mark">~2.63 GB</span> en images Docker.</p>
    <p>Plus lourd qu'un système d'exploitation complet.</p>
  </div>
</div>

<!--
Critères RGESN :
- 3.1 : Le service repose-t-il sur des composants conçus pour réduire leurs impacts environnementaux ?
- 3.3 : Le service supporte-t-il l'évolution des protocoles (HTTP/2, compression) ?
-->

---

<span class="kicker">Exercice 04</span>

# Les Dockerfiles actuels

<div class="code-duo">
<div>

<div class="diff-label">backend/Dockerfile</div>

```dockerfile
FROM eclipse-temurin:25
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven \
    && mvn package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/letterflop-0.0.1-SNAPSHOT.jar"]
```

</div>
<div>

<div class="diff-label">frontend/Dockerfile</div>

```dockerfile
FROM node:24.15.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

</div>
</div>

<div class="why mt-6" v-click>
Le JDK complet en production, et <code>npm start</code> (serveur de dev Vite) qui tourne au lieu d'un build statique servi.
</div>

---

<span class="kicker">Exercice 04</span>

# Le principe du multi-stage build

<p>Un Dockerfile classique n'a qu'un seul stage : tout ce qui sert à compiler reste dans l'image finale (compilateur, sources, dépendances de build).</p>

```dockerfile
# Stage 1 - build : image lourde, tous les outils de compilation
FROM <image-lourde-avec-outils> AS build
COPY . .
RUN <commande de build>

# Stage 2 - run : image légère, uniquement le résultat compilé
FROM <image-légère-runtime>
COPY --from=build <artefact-compilé> .
```

<div class="why mt-6">
Seul le dernier <code>FROM</code> détermine l'image livrée. Les stages précédents (compilateur, sources, <code>node_modules</code>) sont jetés après le build : ils n'existent jamais dans l'image finale.
</div>

---

<span class="kicker">Exercice 04</span>

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

<div class="why mt-4" v-click>
<code>COPY --from=build</code> ne récupère que le <code>.jar</code> du stage 1 : Maven, le JDK et les sources restent dans le stage 1, jamais copiés. <strong>JDK pour compiler, JRE pour exécuter.</strong>
</div>

---

<span class="kicker">Exercice 04</span>

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

<div class="why mt-4" v-click>
Le stage 2 ne contient ni Node.js, ni <code>node_modules</code>, ni le code source : juste le résultat du build. nginx apporte en prime HTTP/2, compression et headers de cache.
</div>

---

<span class="kicker">Exercice 04</span>

# Résultats mesurés

<div class="bars mt-6" role="list">
  <div class="bar bar--wide" role="listitem">
    <span>frontend</span>
    <div class="bar__track"><div class="bar__fill" style="width: 7%"></div></div>
    <span class="bar__value">-93 %</span>
  </div>
  <div class="bar bar--wide" role="listitem">
    <span>backend</span>
    <div class="bar__track"><div class="bar__fill bar__fill--stripes" style="width: 22%"></div></div>
    <span class="bar__value">-78 %</span>
  </div>
</div>

| Service | Avant | Après | Gain |
|---------|:-----:|:-----:|:----:|
| frontend | ~904 MB | ~62.4 MB | **-93 %** |
| backend | ~1.28 GB | ~284 MB | **-78 %** |
| db | ~445 MB | ~445 MB | 0 % |
| **Total** | **~2.63 GB** | **~791 MB** | **-80 %** |

<div class="why mt-5">
Multi-stage build par défaut : il n'y a aucune raison de ne pas l'utiliser. Toujours Alpine, <strong>5 à 10× plus léger</strong>.
</div>

---

<span class="kicker">Exercice 05</span>

# Hébergement responsable

<div class="chips"><span>8.3</span><span>8.4</span><span>8.5</span><span>8.6</span><span>8.7</span><span>8.8</span></div>

<p class="lead mt-6">Un serveur alimenté au charbon émet ~800 gCO2/kWh. Le même serveur en hydroélectricité : ~20 gCO2/kWh.</p>

<div class="box box--accent mt-8 w-fit">
  <div class="figure">40×</div>
  <p class="mt-2">d'écart, pour le même serveur</p>
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

<span class="kicker">Exercice 05</span>

# Panorama des hébergeurs

<div class="grid grid-cols-2 gap-6">

<div>

**Hébergeurs européens**

| Hébergeur | PUE | Énergie | Points forts |
|-----------|:---:|---------|---------------|
| OVHcloud | `1.09` | Mix + renouvelable | Chaleur réutilisée, RGPD EU |
| Scaleway | `1.3` | 100% renouvelable | Transparence |
| Infomaniak | `1.08` | 100% hydraulique | Zéro compensation, suisse |
| Hetzner | `1.30` | 100% renouvelable | Prix compétitifs |

</div>

<div v-click>

**Hyperscalers américains**

| Provider | PUE | Énergie décarbonée | Points forts |
|----------|:---:|:-------------------:|---------------|
| Google Cloud | `1.10` | 64% (2023) | Meilleur dashboard carbone |
| AWS | `~1.15` | ~85% (2023) | Carbon Footprint Tool |
| Azure | `~1.18` | ~82% (2023) | Sustainability Calculator |

</div>

</div>

<div class="source">
  Source : rapports de durabilité des hébergeurs, Uptime Institute Global Data Center Survey (2023).
</div>

---

<span class="kicker">Exercice 05</span>

# L'intensité carbone dépend du pays

<div class="grid grid-cols-2 gap-8 items-start">

<div>

| Pays | gCO2/kWh | Commentaire |
|------|:--------:|-------------|
| Islande | ~20 | Géothermie + hydro |
| France | ~55 | Parc nucléaire dominant |
| Suède | ~45 | Hydro + éolien |
| Allemagne | ~350 | Charbon/gaz encore important |
| États-Unis | ~400 | Très variable par état |
| Pologne | ~700 | Charbon majoritaire |

</div>

<div class="why" v-click>

<code>us-east-1</code> par défaut est l'anti-pattern le plus répandu : <strong>changer de région peut diviser l'impact par 5 à 7</strong>. Le même hébergeur, le même PUE, mais un mix électrique différent.

</div>

</div>

<div class="source">
  Source : Electricity Maps, intensité carbone en temps réel par pays.
</div>

---

<span class="kicker">Exercice 05</span>

# Architecture hot/cold pour movie_logs

```
movie_logs
    |
    |-- < 6 mois   --> PostgreSQL (hot)            <- requêtes utilisateur
    |-- 6-24 mois  --> Stockage objet compressé (cold) : S3 Glacier, OVH Cold Archive
    +-- > 24 mois  --> Suppression ou export RGPD à la demande
```

<div class="why mt-8">
Héberger des années de logs dans PostgreSQL "chaud" coûte <strong>10× plus cher</strong>, en argent et en énergie, qu'en stockage froid.
</div>

<!--
==================================================================
PHASE 4 - FRONTEND
==================================================================
-->

---
layout: section
number: 4
part: Phase 4
---

<span class="kicker">Phase 4</span>

# <mark>Frontend</mark>

---

<span class="kicker">Exercice 06</span>

# Polices système et composants natifs

<div class="chips"><span>4.5</span><span>4.8</span><span>6.7</span></div>

<img src="/requests-avant.webp" class="shot w-4/5 mt-4" alt="Requêtes réseau vers Google Fonts au chargement de Letterflop" />

<p class="mt-4" v-click>Avant même de taper un caractère, Letterflop <span class="mark">télécharge une police web chez Google.</span></p>

<!--
Critères RGESN :
- 4.5 : Le service utilise-t-il des composants d'interface natifs plutôt que personnalisés ?
- 4.8 : Le service limite-t-il le téléchargement de polices ?
- 6.7 : Les ressources sont-elles hébergées sur le même domaine ?
-->

---

<span class="kicker">Exercice 06</span>

# Police système

<div class="diff-label">Avant</div>

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=block" rel="stylesheet">
<body style="font-family: 'Inter', sans-serif;">
```

<div v-click>

<div class="diff-label after mt-4">Après</div>

```html
<body style="font-family: system-ui, -apple-system, sans-serif;">
```

<p class="mt-4"><code>system-ui</code> fait afficher à chaque OS sa police native : San Francisco, Segoe UI, Roboto. <span class="mark">Zéro téléchargement.</span></p>

</div>

---

<span class="kicker">Exercice 06</span>

# Le star rating actuel

<p><code>movie.ts</code> : <code>attachStarInput()</code></p>

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

<div class="why mt-4" v-click>
Des <code>&lt;span&gt;</code>, pas des éléments interactifs natifs. Trois écouteurs souris recréent à la main ce qu'un <code>&lt;input type="radio"&gt;</code> fait nativement, <strong>sans jamais couvrir le clavier.</strong>
</div>

---

<span class="kicker">Exercice 06</span>

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

<p class="lead mt-4">Navigation clavier native, accessible aux lecteurs d'écran, <span class="mark">zéro JavaScript</span> pour la sélection.</p>

---

<span class="kicker">Exercice 06</span>

# Résultats mesurés

<div class="grid grid-cols-2 gap-8 items-center mt-2">

<img src="/requests-apres.webp" class="shot w-full" alt="Requêtes réseau après correction : plus aucun appel à Google" />

<div>

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Requêtes vers Google | 2-4 | 0 | **-100 %** |
| Domaines externes | 2 | 0 | **-100 %** |
| Rating accessible clavier | Non | Oui | WCAG |

</div>

</div>

---

<span class="kicker">Exercice 07</span>

# Images adaptées et lazy loading

<div class="chips"><span>6.4</span><span>6.5</span></div>

<img src="/network-matrix.webp" class="shot w-full mt-4" alt="Onglet Network lors d'une recherche Matrix : 20 affiches en taille originale" />

<p class="mt-4">Une recherche "Matrix" charge 20 affiches en taille <code>original</code> : <span class="mark">jusqu'à 500 KB chacune</span>, pour des vignettes de 200 px.</p>

<!--
Critères RGESN :
- 6.4 : Les médias sont-ils adaptés au contexte d'affichage ?
- 6.5 : Le service charge-t-il uniquement les ressources strictement nécessaires ?
-->

---

<span class="kicker">Exercice 07</span>

# Tailles TMDB adaptées

<p><code>TmdbService.java</code></p>

<div class="diff-label">Avant</div>

```java
dto.setPosterPath("https://image.tmdb.org/t/p/original" + rawPoster);
```

<div v-click>

<div class="diff-label after mt-4">Après</div>

```java
// Résultats de recherche - vignettes de liste
dto.setPosterPath("https://image.tmdb.org/t/p/w185" + rawPoster);

// Fiche film - affichage plus grand
dto.setPosterPath("https://image.tmdb.org/t/p/w342" + posterPath);
```

</div>

---

<span class="kicker">Exercice 07</span>

# Lazy loading, dimensions, alt

```typescript {all|1-2|4-9}
// AVANT
`<img src="${movie.posterPath}" alt="" class="w-full object-cover">`

// APRÈS
`<img src="${movie.posterPath}"
      alt="Affiche du film ${movie.title}"
      loading="lazy"
      width="185" height="278"
      class="w-full object-cover">`
```

<p class="lead mt-6"><code>loading="lazy"</code> est un attribut HTML natif : <span class="mark">pas de JavaScript, pas de librairie.</span></p>

---

<span class="kicker">Exercice 07</span>

# Résultats mesurés

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Taille par image | ~200-500 KB | ~10-20 KB | **-95 %** |
| Total transfert "Matrix" | ~4.5 MB | ~274 KB | **-94 %** |
| Images au premier rendu | 20 | ~5 (visibles) | **-75 %** |
| Layout Shift (CLS) | Élevé | Négligeable | Espace réservé |

---

<span class="kicker">Exercice 08</span>

# Pagination serveur

<div class="chips"><span>6.5</span><span>7.1</span></div>

<img src="/history-avant.webp" class="shot w-full mt-4" alt="Page Historique : une requête qui ramène 1000 logs" />

<p class="mt-4">La page Historique demande <span class="mark">1000 logs pour en afficher 6</span>, à chaque changement de page.</p>

<!--
Critères RGESN :
- 6.5 : Le service charge-t-il uniquement les ressources strictement nécessaires ?
- 7.1 : Le service optimise-t-il les requêtes et traitements côté serveur ?
-->

---

<span class="kicker">Exercice 08</span>

# history.ts

<div class="diff-label">Avant</div>

```typescript
async function loadPage(page: number): Promise<void> {
  const data = await getLogs(0, 1000);  // 1000 logs !
  const allLogs = data.content;
  const start = page * PAGE_SIZE;
  const slice = allLogs.slice(start, start + PAGE_SIZE);  // pagination client
}
```

<div v-click>

<div class="diff-label after mt-4">Après</div>

```typescript
async function loadPage(page: number): Promise<void> {
  const data = await getLogs(page, PAGE_SIZE);   // seulement PAGE_SIZE logs
  const slice = data.content;                     // pas de slice côté client
  totalLogs = data.totalElements;                 // le serveur connaît le total
}
```

</div>

---

<span class="kicker">Exercice 08</span>

# Résultats mesurés

<div class="grid grid-cols-2 gap-8 items-start mt-2">

<img src="/history-apres.webp" class="shot w-full" alt="Page Historique après correction : 6 logs par requête" />

<div>

| Métrique | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| Logs par requête | 1000 | 6 | **-99.4 %** |
| Taille de la réponse | ~123 KB | ~3 KB | **-97 %** |
| Full table scans | 3 | 1 | **-67 %** |

<div class="why mt-6">
Le frontend ne doit jamais décider de la taille totale : <strong>c'est le serveur qui connaît le COUNT.</strong>
</div>

</div>

</div>

<!--
==================================================================
PHASE 5 - BACKEND
==================================================================
-->

---
layout: section
number: 5
part: Phase 5
---

<span class="kicker">Phase 5</span>

# <mark>Backend</mark>

---

<span class="kicker">Exercice 09</span>

# Pagination SQL et indexes

<div class="chips"><span>7.1</span><span>7.3</span></div>

<p class="lead mt-6">Le frontend demande maintenant 6 logs. Mais côté serveur, que fait <span class="mark">getAllLogs()</span> ?</p>

<!--
Critères RGESN :
- 7.1 : Le service optimise-t-il les requêtes et traitements côté serveur ?
- 7.3 : Le service effectue-t-il uniquement les traitements strictement nécessaires ?
-->

---

<span class="kicker">Exercice 09</span>

# Diagnostic : 3 full table scans

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

<p class="lead mt-4">3 requêtes SQL, tri en mémoire, mapping dupliqué : <span class="mark">pour une seule requête HTTP.</span></p>

---

<span class="kicker">Exercice 09</span>

# Le Repository

```java
// MovieLogRepository.java
public interface MovieLogRepository extends JpaRepository<MovieLog, Long> {
    Page<MovieLog> findAllByOrderByWatchedAtDescCreatedAtDesc(Pageable pageable);
}
```

<div class="why mt-8">
Aucune requête écrite à la main. Spring Data <strong>dérive la requête du nom de la méthode</strong> (<code>findAllByOrderByWatchedAtDescCreatedAtDesc</code>) et le paramètre <code>Pageable</code> lui fait ajouter automatiquement <code>LIMIT</code>/<code>OFFSET</code> et le calcul du total.
</div>

---

<span class="kicker">Exercice 09</span>

# Le Service

```java
// MovieLogService.java
public Page<MovieLogDto> getAllLogs(int page, int size) {
    return repository.findAllByOrderByWatchedAtDescCreatedAtDesc(PageRequest.of(page, size))
            .map(this::toDto);
}
```

<div class="why mt-8">
Une seule ligne remplace les ~20 lignes du diagnostic précédent. <code>.map(this::toDto)</code> transforme le <code>Page&lt;MovieLog&gt;</code> en <code>Page&lt;MovieLogDto&gt;</code> <strong>sans jamais créer de liste intermédiaire</strong> : la pagination (contenu + total + nombre de pages) est préservée automatiquement.
</div>

---

<span class="kicker">Exercice 09</span>

# Ce que Spring Data exécute

```sql
SELECT * FROM movie_logs ORDER BY watched_at DESC, created_at DESC LIMIT 6 OFFSET 0;
SELECT COUNT(*) FROM movie_logs;
```

<div class="why mt-8">
Ce que Spring Data exécute réellement pour ces 4 lignes de code Java : une requête pour le contenu de la page, et un <code>COUNT(*)</code> automatique pour remplir <code>totalElements</code>. <strong>2 requêtes SQL</strong> au lieu de 3, aucun chargement complet en mémoire.
</div>

---

<span class="kicker">Exercice 09</span>

# Pourquoi indexer ?

<p>Sans index, PostgreSQL fait un <strong>Full Table Scan</strong> : il lit toutes les lignes de la table pour en trouver une poignée, même avec un <code>LIMIT 6</code>.</p>

<p>Un index B-tree trie les valeurs à l'avance dans une structure arborescente : la base saute directement à la bonne branche au lieu de lire la table ligne par ligne.</p>

```sql
-- db/updates/add_indexes.sql
CREATE INDEX IF NOT EXISTS idx_movie_logs_tmdb_id ON movie_logs (tmdb_id);
CREATE INDEX IF NOT EXISTS idx_movie_logs_watched_at ON movie_logs (watched_at DESC, created_at DESC);
```

<div class="grid grid-cols-2 gap-x-8 mt-4 text-lg">
  <div><code>tmdb_id</code> : requêté à chaque affichage de fiche film</div>
  <div><code>watched_at, created_at</code> : triés à chaque chargement de l'historique</div>
</div>

---

<span class="kicker">Exercice 09</span>

# L'impact de l'index

| Lignes | Full Table Scan | B-tree Index | Facteur |
|--------|:----------------:|:------------:|:-------:|
| 100 | 100 lectures | 7 lectures | 14× |
| 10 000 | 10 000 lectures | 14 lectures | 714× |
| 1 000 000 | 1 000 000 lectures | 20 lectures | **50 000×** |

<div class="why mt-6">
Full Table Scan = O(n) : le temps de lecture croît linéairement avec la table. Index B-tree = O(log n) : il croît à peine. Plus la table grossit, plus l'écart explose, et c'est justement là que ça compte le plus.
</div>

<div class="why mt-4" v-click>
Moins de lignes lues = moins de disque sollicité, moins de CPU mobilisé, moins d'énergie par requête. <strong>Le RGESN 7.3 se joue littéralement dans le plan d'exécution SQL.</strong>
</div>

---

<span class="kicker">Exercice 09</span>

# Résultats mesurés

| Endpoint | Avant | Après | Gain |
|----------|:-----:|:-----:|:----:|
| GET /api/logs?size=20 | 79 req/s | 140 req/s | **+77 %** |
| Latence p50 | 122 ms | 67 ms | **-45 %** |
| Données transférées | 123 KB | 7.4 KB | **-94 %** |

<div class="why mt-6">
Un seul mapping entity vers DTO, factorisé dans <code>toDto()</code> et référencé partout : zéro duplication.
</div>

---

<span class="kicker">Exercice 10</span>

# Cache applicatif et N+1

<div class="chips"><span>7.1</span><span>4.7</span></div>

<p class="mt-4">Le problème N+1 : une requête initiale (<strong>1</strong>) déclenche une requête supplémentaire pour chacun de ses résultats (<strong>N</strong>), au lieu d'une seule requête qui ramènerait tout d'un coup.</p>

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

<span class="kicker">Exercice 10</span>

# Payé pour rien, appelé pour rien

<p>Chaque appel <code>/movie/{id}</code> ramène bien plus que ce qui s'affiche dans la grille de résultats :</p>

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="box">
    <h3>Affiché dans la grille</h3>
    <div class="chips"><span>title</span><span>year</span><span>posterPath</span></div>
  </div>
  <div class="box">
    <h3>Récupéré mais jamais montré</h3>
    <div class="chips"><span>synopsis</span><span>runtime</span><span>genres</span><span>voteAverage</span><span>popularity</span><span>originalTitle</span><span>originalLanguage</span></div>
  </div>
</div>

<div class="why mt-8">
Et cette donnée est quasi-statique : le réalisateur de Matrix ne change pas d'une recherche à l'autre. La re-demander à chaque fois est une dépense pure : <strong>c'est exactement ce qu'un cache est fait pour éviter.</strong>
</div>

---

<span class="kicker">Exercice 10</span>

# Activer le cache

```java
@SpringBootApplication
@EnableCaching
public class LetterflopApplication { ... }
```

<div class="why mt-8">
<code>@EnableCaching</code> active l'infrastructure de cache de Spring : au démarrage, Spring enveloppe les beans annotés <code>@Cacheable</code> dans un proxy qui intercepte chaque appel. <strong>Sans cette annotation, <code>@Cacheable</code> n'a strictement aucun effet.</strong>
</div>

---

<span class="kicker">Exercice 10</span>

# Annoter les méthodes à cacher

```java
@Cacheable("tmdb-search")
public List<MovieSearchResultDto> searchMovies(String query) { ... }

@Cacheable("tmdb-detail")
public MovieDetailDto getMovieDetail(Integer tmdbId) { ... }
```

<div class="why mt-8">
Le proxy utilise les <strong>paramètres de la méthode comme clé de cache</strong> (<code>query</code>, <code>tmdbId</code>). Premier appel : la méthode s'exécute, le résultat est stocké. Appels suivants avec le même paramètre : la méthode n'est <strong>jamais exécutée</strong>, le résultat mis en cache est retourné directement. Deux noms de cache distincts (<code>tmdb-search</code>, <code>tmdb-detail</code>) car les deux méthodes retournent des formes de données différentes.
</div>

---

<span class="kicker">Exercice 10</span>

# Configurer Caffeine

```properties
spring.cache.caffeine.spec=maximumSize=500,expireAfterWrite=3600s
```

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="box">
    <h3><code>maximumSize=500</code></h3>
    <p>Au-delà de 500 entrées, les moins récemment utilisées sont évincées : la mémoire du cache reste bornée.</p>
  </div>
  <div class="box">
    <h3><code>expireAfterWrite=3600s</code></h3>
    <p>Chaque entrée expire 1h après son écriture : cohérent avec des données quasi-statiques.</p>
  </div>
</div>

<div class="why mt-6">
Caffeine est le cache in-memory le plus performant pour la JVM : aucune dépendance externe, aucun serveur à opérer, contrairement à Redis.
</div>

---

<span class="kicker">Exercice 10</span>

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

<p class="lead mt-6">Sans timeout, un appel TMDB lent <span class="mark">bloque un thread Tomcat indéfiniment.</span></p>

---

<span class="kicker">Exercice 10</span>

# Résultats mesurés

| Métrique | Avant | Après (cache) | Gain |
|----------|:-----:|:--------------:|:----:|
| Appels TMDB - 1ère recherche | 21-41 | 21-41 | 0 % (cache froid) |
| Appels TMDB - 2ème recherche | 21-41 | **0** | **-100 %** |
| Temps de réponse - 2ème recherche | ~2-5 s | **< 10 ms** | **~99 %** |

<div class="why mt-6">
Le cache amortit le N+1, il ne le supprime pas. <strong>Le vrai fix : ne pas appeler <code>getMovieDetail()</code> dans la boucle de <code>searchMovies()</code>.</strong>
</div>

---

<span class="kicker">Exercice 11</span>

# Stockage sobre et rétention

<div class="chips"><span>7.2</span><span>2.7</span></div>

<p class="mt-4">Chaque log de visionnage stocke l'URL complète de l'affiche TMDB, taille d'image comprise. Deux problèmes distincts, deux angles de sobriété : <span class="mark">quoi</span> on stocke, et <span class="mark">combien de temps</span> on le garde.</p>

<div class="why mt-6">
L'URL mélange une donnée (le chemin de l'affiche) et une décision d'affichage (<code>original</code>, <code>w342</code>...). Si demain on change la taille des vignettes, il faut migrer <strong>toutes</strong> les lignes de la base.
</div>

<!--
Critères RGESN :
- 7.2 : Le service stocke-t-il uniquement les données nécessaires ?
- 2.7 : Existe-t-il une stratégie de décommissionnement des données ?
-->

---

<span class="kicker">Exercice 11</span>

# Séparer la donnée de sa présentation

<div class="diff-label">Stocké avant</div>

```
https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

<div v-click>

<div class="diff-label after mt-4">Stocké après</div>

```
/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg
```

<div class="why mt-6">
Le chemin seul est la donnée. La taille d'affichage est une décision de présentation, prise au moment de servir la réponse, pas au moment de l'écrire en base. <strong>Changer la taille d'affichage ne nécessite plus de migrer toutes les lignes.</strong>
</div>

</div>

---

<span class="kicker">Exercice 11</span>

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

<span class="kicker">Exercice 11</span>

# Politique de rétention

| Ancienneté | Traitement | Stockage |
|------------|------------|----------|
| < 6 mois | Données actives | PostgreSQL (hot) |
| 6-24 mois | Archivage compressé | Stockage objet (cold) |
| > 5 ans | Export ou suppression | Export RGPD à la demande |

<div class="why mt-8">
Chaque octet stocké "chaud" coûte 10× plus en énergie que du stockage froid. <strong>Une politique de rétention se pense dès le jour 1.</strong>
</div>

---

<span class="kicker">Exercice 11</span>

# Le mécanisme technique

<div class="grid grid-cols-3 gap-5 mt-4">
  <div class="box">
    <h3>Champ <code>archivedAt</code></h3>
    <p>Un <code>TIMESTAMP</code> ajouté à l'entité <code>MovieLog</code> : marque une ligne comme archivée sans la déplacer physiquement.</p>
  </div>
  <div class="box">
    <h3>Job <code>@Scheduled</code></h3>
    <p>Exécuté chaque nuit : archive automatiquement les logs de plus de 6 mois.</p>
  </div>
  <div class="box">
    <h3><code>/api/logs/export</code></h3>
    <p>Droit à la portabilité RGPD, à la demande de l'utilisateur.</p>
  </div>
</div>

<div class="why mt-6">
Les logs archivés ne sont plus retournés par les requêtes standard (clause <code>WHERE archivedAt IS NULL</code>). Pour un journal de visionnage personnel, 5 ans est généreux : <strong>l'important est d'avoir une politique définie</strong>, pas que la durée soit parfaite.
</div>

<!--
==================================================================
PHASE 6 - ALLER PLUS LOIN
==================================================================
-->

---
layout: section
number: 6
part: Phase 6
---

<span class="kicker">Phase 6</span>

# Aller <mark>plus loin</mark>

---

<span class="kicker">Exercice 12</span>

# Usage de l'IA

<div class="chips"><span>2.10</span><span>2.6</span></div>

<p class="lead mt-8">La question n'est pas "peut-on utiliser l'IA ?" mais <span class="mark">"l'IA est-elle la bonne réponse à ce problème précis ?"</span></p>

<!--
Critères RGESN :
- 2.10 : L'impact des services tiers a-t-il été évalué ?
- 2.6 : L'impact environnemental a-t-il été évalué avant la mise en production ?
-->

---

<span class="kicker">Exercice 12</span>

# Trois scénarios

| Scénario | Option IA | Option déterministe | Décision |
|----------|-----------|----------------------|:--------:|
| Films similaires | Embeddings (~3g) | Endpoint TMDB `/similar` (~0.3g) | **Déterministe** |
| Sentiment des commentaires | NLP (~2g) | Note 1-5 déjà donnée (~0g) | **Pas nécessaire** |
| Résumé annuel | LLM narratif (~5g) | SQL agrégation (~0.01g) | **Déterministe** |

<div class="why mt-6">
Chaque requête IA consomme <strong>10 à 1000× plus de ressources</strong> qu'un traitement déterministe équivalent.
</div>

<div class="source">
  Source : Luccioni et al. (2024), Power Hungry Processing.
</div>

---

<span class="kicker">Exercice 12</span>

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

<span class="kicker">Exercice 12</span>

# Green prompting

<p>Quand l'usage de l'IA <strong>est</strong> légitime :</p>

<div class="values mt-4">
  <div class="value"><span class="value__num">01</span><p><strong>Choisir le plus petit modèle adapté</strong> : facteur 10 à 50× en consommation</p></div>
  <div class="value"><span class="value__num">02</span><p><strong>Minimiser le contexte</strong> : n'envoyer que les données strictement nécessaires</p></div>
  <div class="value"><span class="value__num">03</span><p><strong>Cacher les réponses</strong> : <code>@Cacheable</code> sur les requêtes répétitives</p></div>
  <div class="value"><span class="value__num">04</span><p><strong>Batch plutôt que temps réel</strong> : regrouper en traitement nocturne</p></div>
</div>

<p class="lead mt-6">Le réflexe "on va mettre de l'IA" est devenu le <span class="mark">SELECT * des choix d'architecture.</span></p>

---

<span class="kicker">Exercice 13</span>

# EcoIndex dans la CI

<div class="chips"><span>1.4</span><span>1.5</span></div>

<p class="lead mt-8">On teste le code en CI pour éviter les régressions fonctionnelles. Pourquoi pas la sobriété ?</p>

<p class="lead">La sobriété est <span class="mark">une métrique, pas une intention.</span></p>

<!--
Critères RGESN :
- 1.4 : Les revues de conception intègrent-elles régulièrement l'écoconception ?
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction ?
-->

---

<span class="kicker">Exercice 13</span>

# Le gate dans la CI

<div class="code-duo">
<div>

<div class="diff-label">greenit-urls.yaml</div>

```yaml
- name: 'Recherche'
  url: 'http://localhost:3000'
- name: 'Historique'
  url: 'http://localhost:3000/history.html'
```

</div>
<div>

<div class="diff-label after">workflow GitHub Actions</div>

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

</div>
</div>

---

<span class="kicker">Exercice 13</span>

# Stratégie de seuils progressifs

<div class="ratchet mt-6">
  <div class="ratchet__step">
    <span class="ratchet__phase">Démarrage</span>
    <div class="figure">30</div>
    <p>Note C · warning uniquement</p>
  </div>
  <div class="ratchet__step">
    <span class="ratchet__phase">Sprint 2</span>
    <div class="figure">50</div>
    <p>Note B · fail le build</p>
  </div>
  <div class="ratchet__step ratchet__step--goal">
    <span class="ratchet__phase">Objectif</span>
    <div class="figure">75</div>
    <p>Note A · fail le build</p>
  </div>
</div>

<div class="why mt-6">
Commencer permissif, resserrer progressivement : imposer un seuil A dès le départ découragerait l'équipe.
</div>

---

<span class="kicker">Exercice 14</span>

# Badge de transparence

<div class="chips"><span>1.5</span></div>

<p class="lead mt-8">On met des Nutri-Scores sur les aliments. <span class="mark">Pourquoi pas sur les sites web ?</span></p>

<p>Un badge <strong>A</strong> vert valorise le travail de l'équipe. Un badge <strong>D</strong> orange crée une pression naturelle pour corriger.</p>

<!--
Critères RGESN :
- 1.5 : Le service numérique a-t-il défini des objectifs de réduction rendus publics ?
-->

---

<span class="kicker">Exercice 14</span>

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

<p class="lead mt-4">Impact total : ~1.3 KB (JS + SVG). Le badge interroge l'API réelle : <span class="mark">impossible de tricher.</span></p>

---

<span class="kicker">Exercice 14</span>

# Résultats attendus

| Page | Score | Note | Requêtes | Poids |
|------|:-----:|:----:|:--------:|:-----:|
| Recherche | 70+ | A-B | < 10 | < 200 KB |
| Historique | 75+ | A | < 10 | < 100 KB |

<div class="why mt-8">
La transparence ne fonctionne que si elle est authentique : <strong>le badge cnumr affiche le vrai score</strong>, pas une valeur choisie.
</div>

<!--
==================================================================
PHASE 7 - BILAN
==================================================================
-->

---
layout: section
number: 7
part: Phase 7
---

<span class="kicker">Phase 7</span>

# <mark>Bilan</mark>

---
layout: statement
---

<span class="kicker">Exercice 15</span>

# Le <mark>boss final</mark>

Vous avez traversé les 8 familles techniques du RGESN. Il est temps de mesurer l'impact cumulé.

---

<span class="kicker">Exercice 15</span>

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

<span class="kicker">Exercice 15</span>

# Ce que les outils couvrent

<div class="grid grid-cols-2 gap-5 mt-4">
  <div class="box">
    <h3>Automatisable</h3>
    <ul>
      <li>Poids des pages, requêtes, performance API</li>
      <li>Taille des images Docker</li>
      <li>Lazy loading, alt text, focus visible</li>
    </ul>
  </div>
  <div class="box box--accent">
    <h3>Non automatisable</h3>
    <ul>
      <li>L'utilité réelle du service (1.1)</li>
      <li>La pertinence d'une feature vs son impact (2.6)</li>
      <li>Le choix de l'hébergeur (8.3-8.8)</li>
      <li>La décision d'utiliser l'IA ou non (2.10)</li>
    </ul>
  </div>
</div>

<div class="why mt-6">
Les outils automatisés couvrent ~30-40 % des critères RGESN. <strong>Le reste relève de décisions humaines</strong>, même constat que pour l'accessibilité.
</div>

---
layout: statement
part: Conclusion
---

<span class="kicker">La règle des 2</span>

# "Quelles <mark>2 pratiques</mark> de cet atelier vais-je appliquer dès cette semaine ?"

Pas 10. Pas "tout à la fois". Deux. C'est assez pour commencer, et c'est assez pour que ça tienne.

---
layout: statement
---

# Des logiciels bien conçus et sobres, ça ne se décrète pas : <mark>ça se pratique.</mark>

Yoan Thirion · #sharingiscaring
