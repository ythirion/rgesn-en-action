# Exercice 12 : Usage de l'IA - Quand l'IA est légitime

## Critères RGESN

- **2.10** - L'impact des services tiers a-t-il été évalué ?
- **2.6** - L'impact environnemental a-t-il été évalué avant la mise en production ?

## Contexte

L'équipe Letterflop envisage d'ajouter 3 fonctionnalités qui pourraient utiliser l'IA. L'IA n'est pas l'ennemie - son usage par défaut, sans questionnement, l'est.

La question n'est pas "peut-on utiliser l'IA ?" mais **"l'IA est-elle la bonne réponse à ce problème précis, ou existe-t-il une alternative déterministe plus sobre ?"**

## Votre mission

### 1. Évaluer 3 scénarios (~20 min)

Pour chaque scénario, décidez si l'IA est justifiée et estimez le coût comparé :

**Scénario A - Recommandation de films similaires**
> "Quand l'utilisateur consulte la fiche d'un film, lui recommander 5 films similaires."

```markdown
Option IA :      Embeddings/LLM pour calculer la similarité sémantique
Option déterministe : _______________________________________________
CO2e par requête (IA) :     ~___g
CO2e par requête (déterministe) : ~___g
Volume estimé (100 users) :     ___ requêtes/jour
Décision :                      IA / Déterministe / Hybride
Justification :
```

**Scénario B - Analyse de sentiment des commentaires**
> "Analyser automatiquement le sentiment (positif/négatif) de chaque commentaire pour afficher un emoji."

```markdown
Option IA :      NLP / LLM pour classifier le sentiment
Option déterministe : _______________________________________________
CO2e par requête (IA) :     ~___g
CO2e par requête (déterministe) : ~___g
Décision :                      IA / Déterministe / Pas nécessaire
Justification :
```

**Scénario C - Résumé annuel de visionnage**
> "En fin d'année, générer un résumé personnalisé des habitudes de visionnage de l'utilisateur."

```markdown
Option IA :      LLM pour rédiger un texte narratif personnalisé
Option déterministe : _______________________________________________
CO2e par requête (IA) :     ~___g
CO2e par requête (déterministe) : ~___g
Volume estimé :                 ___ requêtes/an
Décision :                      IA / Déterministe / Hybride
Justification :
```

### 2. Construire l'arbre de décision (~10 min)

Dessinez l'arbre de décision pour savoir quand utiliser l'IA :

```markdown
La tâche porte sur des données structurées ?
  ├── OUI → _______________
  └── NON → L'input est du texte libre/non structuré ?
              ├── OUI → _______________
              └── NON → _______________

Le volume de requêtes est élevé (>1000/jour) ?
  ├── OUI → _______________
  └── NON → _______________

Une alternative déterministe existe-t-elle ?
  ├── OUI → _______________
  └── NON → _______________
```

### 3. Green prompting : quand l'IA EST légitime (~5 min)

Listez 3 règles pour réduire l'impact quand l'usage de l'IA est justifié :

```markdown
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

## Avant de coder

Pas de code dans cet exercice. Ouvrez un fichier vide, copiez les tableaux, discutez en équipe.

## Indice

- TMDB a déjà un endpoint `/movie/{id}/similar` qui retourne des films similaires basés sur les genres et les métadonnées
- L'utilisateur donne déjà une note numérique de 1 à 5 étoiles à chaque film
- Les logs en base contiennent toutes les données structurées nécessaires pour un bilan annuel (titre, note, date, genre)
