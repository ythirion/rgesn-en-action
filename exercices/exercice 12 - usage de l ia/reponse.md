# Exercice 12 — Réponse : Usage de l'IA

## 1. Évaluation des scénarios

### Scénario A — Recommandation de films similaires

| | Option IA | Option déterministe |
|---|-----------|---------------------|
| **Approche** | Embeddings vectoriels / LLM | Endpoint TMDB `/movie/{id}/similar` |
| **CO2e/requête** | ~3g (embedding) | ~0.3g (1 appel API REST) |
| **Facteur** | **10×** plus impactant | Baseline |
| **Qualité** | Potentiellement meilleure | Suffisante pour le besoin |

**Décision : Déterministe** — TMDB propose déjà un endpoint `/movie/{id}/similar` basé sur les genres et métadonnées. L'IA ajouterait de la complexité et du coût pour un gain marginal sur un besoin déjà couvert.

### Scénario B — Analyse de sentiment des commentaires

| | Option IA | Option déterministe |
|---|-----------|---------------------|
| **Approche** | NLP / LLM pour classifier | L'utilisateur a déjà donné une note 1-5 |
| **CO2e/requête** | ~2g | **~0g** (donnée existante) |
| **Facteur** | **∞** (coût pour zéro valeur ajoutée) | Gratuit |

**Décision : Pas nécessaire** — La note de 1 à 5 étoiles EST le sentiment de l'utilisateur. Analyser le texte du commentaire pour en déduire ce que l'utilisateur a déjà explicitement exprimé est un gaspillage pur.

### Scénario C — Résumé annuel de visionnage

| | Option IA | Option déterministe |
|---|-----------|---------------------|
| **Approche** | LLM pour rédiger un texte narratif | SQL agrégation + template HTML |
| **CO2e/requête** | ~5g | ~0.01g (1 requête SQL) |
| **Volume** | 100 users × 1/an = 100 requêtes/an | Idem |
| **CO2e/an total** | ~500g | ~1g |

**Décision : Déterministe** — Les données sont entièrement structurées (titre, note, date, genre). Une requête SQL d'agrégation (`GROUP BY genre`, `AVG(rating)`, `COUNT(*)`) + un template HTML produit un résumé factuel parfaitement adapté. L'IA ajouterait du style narratif pour 500× le coût.

## 2. Arbre de décision

```
La tâche porte sur des données structurées ?
  ├── OUI → Utiliser SQL / code déterministe
  │         (agrégation, filtrage, calcul, template)
  └── NON → L'input est du texte libre / non structuré ?
              ├── OUI → Une alternative déterministe existe-t-elle ?
              │           ├── OUI → Utiliser l'alternative (regex, API existante, règles)
              │           └── NON → Le volume est-il élevé (>1000/jour) ?
              │                       ├── OUI → Justifier le coût, utiliser le plus petit modèle
              │                       └── NON → IA acceptable si la valeur métier le justifie
              └── NON → Probablement pas besoin d'IA ni de NLP
```

**La question clé** : "Est-ce que j'utilise l'IA parce qu'elle résout un problème qu'aucune autre approche ne peut résoudre, ou parce que c'est à la mode ?"

## 3. Green prompting — Quand l'IA EST légitime

1. **Choisir le plus petit modèle adapté** — GPT-4o mini au lieu de GPT-4 quand la tâche le permet (facteur 10-50× en consommation)
2. **Minimiser le contexte** — n'envoyer que les données strictement nécessaires dans le prompt, pas tout l'historique
3. **Cacher les réponses** — si 100 utilisateurs posent la même question, ne la traiter qu'une fois (`@Cacheable`)
4. **Batch plutôt que temps réel** — regrouper les traitements IA en batch nocturne plutôt qu'à chaque requête utilisateur

**Bonus :**
5. **Mesurer l'impact** — estimer le CO2e/requête et le multiplier par le volume prévu avant de décider

## Ce que la mesure vérifie

Cet exercice ne produit pas de mesure technique mais une **matrice de décision** applicable à chaque futur choix technologique.

## Pourquoi c'est important

Le réflexe "on va mettre de l'IA" est devenu le `SELECT *` des choix d'architecture : on prend tout, on réfléchit après.

Chaque requête IA consomme 10 à 1000× plus de ressources qu'un traitement déterministe équivalent. Sur un service à fort volume, la différence se mesure en tonnes de CO2e par an.

Le RGESN 2.10 demande explicitement d'**évaluer l'impact des services tiers** — et l'IA est le service tiers le plus impactant de cette décennie.

## Bonnes pratiques

- **Poser la question "l'IA est-elle la bonne réponse ?" AVANT de l'implémenter** — pas après
- **Données structurées → SQL/code** — l'IA est faite pour le non-structuré
- **Volume élevé → déterministe** — le coût IA croît linéairement avec le volume
- **Faible volume + haute valeur → IA acceptable** — un résumé annuel pour 100 users, pourquoi pas
- **Redondance = gaspillage** — si l'utilisateur a déjà donné l'information (note 1-5), ne pas la recalculer

## Boîte à outils

| Outil | Usage |
|-------|-------|
| Matrice de décision IA/déterministe | Filtrage systématique au backlog |
| [Luccioni et al., 2024](https://arxiv.org/abs/2311.16863) | Référence sur la consommation des modèles IA |
| CO2e par modèle (estimations) | GPT-4: ~3-10g, GPT-4o mini: ~0.3g, Embedding: ~0.1g |
| `@Cacheable` Spring | Cache pour les réponses IA répétitives |
