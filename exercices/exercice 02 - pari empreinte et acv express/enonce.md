# Exercice 2 : Le pari empreinte et l'ACV express

## Critères RGESN

- **2.6** - Le service numérique a-t-il fait l'objet d'une revue d'impact environnemental avant sa mise en production ?
- **1.1** - Le service numérique a-t-il été évalué favorablement en termes d'utilité par rapport à ses impacts ?

## Contexte

Avant de toucher au code, apprenons à raisonner en impact. Combien coûte une heure de Netflix ? Un mail avec pièce jointe ? Une requête ChatGPT ? La plupart des développeur·se·s n'ont aucune intuition fiable sur ces ordres de grandeur - et c'est normal, personne ne nous les a jamais enseignés.

## Votre mission

### Partie 1 - Le pari empreinte (~10 min)

Classez chaque situation dans la bonne fourchette de CO2e. Pas de recherche, pas de calcul : votre intuition.

Fourchettes : `< 1g` | `1–10g` | `10–100g` | `> 100g`

```markdown
| # | Situation                                               | Votre pari |
|---|---------------------------------------------------------|------------|
| A | 1h de Netflix en HD                                     |            |
| B | 1 mail avec PJ de 5 Mo envoyé à 10 personnes            |            |
| C | 1 requête ChatGPT (GPT-4)                               |            |
| D | 1 réunion vidéo de 1h à 6 personnes (caméras allumées)  |            |
| E | 1 recherche Google                                      |            |
| F | 1 image générée par Midjourney / DALL-E 3               |            |
```

### Partie 2 - Mini-ACV de Letterflop (~15 min)

Estimez l'empreinte annuelle de Letterflop pour un usage type :

```markdown
## Hypothèses
- 100 utilisateurs actifs
- 5 recherches de films / jour / utilisateur
- 20 consultations de fiches / jour / utilisateur
- 2 logs enregistrés / jour / utilisateur

## Estimation par action
| Action               | Poids page (KB) | CO2e estimé/visite | Volume/an        | CO2e/an     |
|----------------------|------------------|--------------------|------------------|-------------|
| 1 recherche          |                  |                    | 100×5×365 =      |             |
| 1 fiche film         |                  |                    | 100×20×365 =     |             |
| 1 log enregistré     |                  |                    | 100×2×365 =      |             |
| 1 page historique    |                  |                    | 100×1×365 =      |             |
| **Total annuel**     |                  |                    |                  | **______**  |
```

Utilisez les données de poids de page observées à l'exercice 1 et le ratio de Website Carbon Calculator : **~0.5g CO2e par MB transféré** (estimation moyenne).

### Partie 3 - Comparer deux features (~10 min)

Le product owner propose d'ajouter une feature de **génération d'affiches personnalisées par IA** (type DALL-E). Comparez :

```markdown
| Feature                    | CO2e / utilisation | Utilisations/jour | CO2e/an        |
|----------------------------|--------------------|-------------------|----------------|
| US-A : Poster IA           | ~5g (génération)   | 100 users × 3     |                |
| US-C : Formulaire de log   | ~0.01g (POST)      | 100 users × 2     |                |
| **Ratio US-A / US-C**      |                    |                   | **______×**    |
```

## Avant de commencer

Ouvrez un fichier vide dans votre éditeur. Copiez les tableaux. Remplissez-les en silence, sans recherche.

## Indice

La règle contre-intuitive : **60 à 80% de l'impact d'un service numérique vient des terminaux** (fabrication + énergie de consultation côté client), pas des serveurs. Ça change complètement la lecture des décisions techniques.
