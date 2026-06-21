# Exercice 3 : Challenger le besoin - Grille Spécifications RGESN

## Critères RGESN

- **2.3** - Le service numérique fonctionne-t-il sur une connexion lente ou en mode dégradé ?
- **2.6** - L'impact environnemental a-t-il été évalué avant la mise en production ?
- **2.7** - Existe-t-il une stratégie de décommissionnement ?
- **2.9** - L'impact des composants d'interface prêts à l'emploi a-t-il été évalué ?
- **2.10** - L'impact des services tiers a-t-il été évalué ?

## Contexte

Le backlog de Letterflop contient 3 user stories. Le product owner les veut toutes. Le sprint ne peut en accueillir qu'une. La question habituelle serait : "Laquelle a le plus de valeur métier ?" La question RGESN est : **"Laquelle a le meilleur ratio valeur / impact ?"**

## Votre mission

### Partie 1 - Arbitrage produit avec la grille RGESN (~15 min)

Trois user stories sont en backlog :

**US-A : Affiches personnalisées par IA**
> En tant qu'utilisateur, je veux générer une affiche personnalisée pour chaque film loggé, créée par IA à partir du synopsis et de ma note.

**US-B : Bande-annonce HD en autoplay**
> En tant qu'utilisateur, je veux voir la bande-annonce en HD du film directement sur la fiche, en lecture automatique à l'ouverture de la page.

**US-C : Formulaire simple de log**
> En tant qu'utilisateur, je veux enregistrer un visionnage avec une note, une date et un commentaire.

Remplissez la grille de décision pour chaque US :

```markdown
| Critère RGESN | Question                                         | US-A | US-B | US-C |
|---------------|--------------------------------------------------|------|------|------|
| 2.3           | Fonctionne sur connexion lente / offline ?        |      |      |      |
| 2.6           | Impact évalué avant construction ?                 |      |      |      |
| 2.7           | Peut être décommissionnée proprement ?            |      |      |      |
| 2.9           | Les composants UI ont un impact maîtrisé ?        |      |      |      |
| 2.10          | L'impact des services tiers est évalué ?          |      |      |      |
| **Décision**  | Construire / Reworker / Abandonner ?              |      |      |      |
```

### Partie 2 - Reworker US-B (~5 min)

US-B n'est pas à abandonner, mais à reworker. Réécrivez-la pour qu'elle respecte le RGESN :

```markdown
## US-B reworkée
> En tant qu'utilisateur, je veux...
```

Contraintes de la version reworkée :
- Pas d'autoplay
- Image au lieu de vidéo par défaut
- Chargement à la demande uniquement

### Partie 3 - Audit Stratégie de Letterflop (~10 min)

Auditez la branche `main` de Letterflop contre les 10 critères de la famille Stratégie (1.1 à 1.10) :

```markdown
| #    | Critère                                                        | Conforme ? | Commentaire |
|------|----------------------------------------------------------------|:----------:|-------------|
| 1.1  | L'utilité du service a-t-elle été évaluée ?                    |            |             |
| 1.2  | Les cibles utilisateurs sont-elles clairement identifiées ?    |            |             |
| 1.3  | Un responsable écoconception est-il désigné ?                  |            |             |
| 1.4  | Les revues de conception intègrent-elles l'écoconception ?     |            |             |
| 1.5  | Des objectifs de réduction sont-ils quantifiés ?               |            |             |
| 1.6  | La collecte de données est-elle limitée au strict nécessaire ? |            |             |
| 1.7  | Le chiffrement est-il adapté aux besoins ?                     |            |             |
| 1.8  | Le service favorise-t-il les solutions open source ?           |            |             |
| 1.9  | Le service est-il interopérable ?                              |            |             |
| 1.10 | Les API sont-elles ouvertes et documentées ?                   |            |             |
```

## Avant de coder

Il n'y a pas de code dans cet exercice. Ouvrez votre éditeur, copiez les tableaux, et remplissez-les en équipe. Discutez chaque réponse.

## Indice

Le retournement : la feature la plus impressionnante (US-A) est souvent celle qu'il faut abandonner. La feature la plus banale (US-C) est souvent la plus sobre. **Le meilleur code vert est celui qu'on n'écrit pas.**
