# Exercice 2 — Réponse

## Partie 1 — Corrections du pari empreinte

| # | Situation                                               | Réponse          | Équiv. voiture |
|---|---------------------------------------------------------|------------------|----------------|
| A | 1h de Netflix en HD                                     | **~36g CO2e**    | ~300 m         |
| B | 1 mail avec PJ de 5 Mo envoyé à 10 personnes            | **~50g CO2e**    | ~420 m         |
| C | 1 requête ChatGPT (GPT-4)                               | **~2–4g CO2e**   | ~25 m          |
| D | 1 réunion vidéo de 1h à 6 personnes (caméras allumées)  | **~500–700g CO2e** | ~5 km        |
| E | 1 recherche Google                                      | **~0,2–0,3g CO2e** | ~2 m        |
| F | 1 image Midjourney / DALL-E 3                           | **~3–10g CO2e**  | ~50 m          |

Équivalence : voiture thermique moyenne française = 120g CO2e/km (ADEME, Base Empreinte).

### Ce qui surprend

- **La réunion vidéo** (D) est de loin la plus impactante. Couper les caméras divise l'impact d'environ 10.
- **La recherche Google** (E) est surestimée : l'index est précalculé, la page de résultats est légère.
- **Le mail avec PJ** (B) : le vrai coût n'est pas le réseau mais les 11 terminaux qui reçoivent, décodent et stockent.

### Sources

- IEA / Carbon Brief 2020 (Netflix)
- ADEME, "La face cachée du numérique" 2019 (mail)
- Luccioni et al., "Power Hungry Processing" 2024 (ChatGPT, images IA)
- Carbon Trust 2021 (visioconférence)
- Google Sustainability Report 2023

## Partie 2 — Mini-ACV de Letterflop

Avec les données observées à l'exercice 1 (page recherche ~4.5 MB, fiche film ~1 MB, historique ~0.5 MB, POST log ~2 KB) :

| Action               | Poids (KB) | CO2e/visite  | Volume/an       | CO2e/an        |
|----------------------|------------|--------------|-----------------|----------------|
| 1 recherche          | ~4500      | ~2.25g       | 182 500         | ~410 kg        |
| 1 fiche film         | ~1000      | ~0.5g        | 730 000         | ~365 kg        |
| 1 log enregistré     | ~2         | ~0.001g      | 73 000          | ~0.07 kg       |
| 1 page historique    | ~500       | ~0.25g       | 36 500          | ~9 kg          |
| **Total annuel**     |            |              |                 | **~784 kg**    |

La recherche domine massivement l'empreinte à cause des images surdimensionnées (taille `original`).

## Partie 3 — Comparaison des features

| Feature                  | CO2e / utilisation | Utilisations/jour | CO2e/an            |
|--------------------------|--------------------|--------------------|---------------------|
| US-A : Poster IA         | ~5g                | 300                | **~547 kg**         |
| US-C : Formulaire de log | ~0.01g             | 200                | **~0.73 kg**        |
| **Ratio US-A / US-C**    |                    |                    | **~750×**           |

La feature la plus impressionnante (génération IA) est celle qui a le plus d'impact. La feature la plus sobre (formulaire simple) est celle qui rend le service le plus utile.

## Ce que la mesure vérifie

L'ACV rapide (Niveau 1) ne prétend pas à la précision. Elle sert à **ouvrir la conversation** et à donner des ordres de grandeur pour arbitrer.

## Pourquoi c'est important

### Les 3 tiers d'un service numérique

```
Terminaux (60-80%)  ████████████████████░░░░░  Le levier principal
Réseau (15-20%)     ████░░░░░░░░░░░░░░░░░░░░
Datacenter (5-15%)  ██░░░░░░░░░░░░░░░░░░░░░░
```

Le levier #1 n'est pas le serveur, c'est l'usage côté client : temps passé, complexité d'affichage, données transférées qui font travailler le device de l'utilisateur. Ça change la lecture de chaque décision technique.

### Les 3 niveaux d'ACV

| Niveau 1 (10 min)           | Niveau 2 (1-3 jours)         | Niveau 3 (semaines)         |
|-----------------------------|------------------------------|------------------------------|
| EcoIndex, Website Carbon    | Référentiel ADEME + outils   | ISO 14040, cabinet           |
| Sensibilisation             | Pilotage équipe              | Reporting CSRD, audit        |
| **Commence par celui-ci**   | Action sur 1 sprint          | Action sur 1 trimestre       |

## Bonnes pratiques

- **Raisonner en ordres de grandeur**, pas en chiffres absolus à 3 décimales
- **Comparer plutôt que mesurer** : "A coûte 500× plus que B" est plus utile que "A coûte 547 kg"
- **Le piège** : ne pas chercher la précision absolue. Une ACV approximée mais utilisée vaut mieux qu'une ACV parfaite jamais commandée
- **Mono-critère ≠ ACV** : le carbone n'est qu'un indicateur. Une vraie ACV mesure aussi l'eau, les ressources abiotiques

## Boîte à outils

| Outil | Usage |
|-------|-------|
| Website Carbon Calculator | Estimation rapide CO2/visite |
| EcoIndex | Score A-G basé sur DOM, requêtes, poids |
| GreenFrame | Mesure par parcours utilisateur |
| Boavizta API | Facteurs d'impact serveurs et terminaux |
| CO2.js (Green Web Foundation) | Estimation carbone d'un transfert |
| Base Empreinte (ADEME) | Facteurs d'émission de référence |
