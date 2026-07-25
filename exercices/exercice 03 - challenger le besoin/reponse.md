# Exercice 3 - Réponse

## Partie 1 - Grille de décision

fix: | Critère RGESN | Question                                   | US-A        | US-B                 | US-C       |
|---------------|--------------------------------------------|-------------|----------------------|------------|
| 2.3           | Fonctionne sur connexion lente / offline ? | Non (IA cloud) | Non (vidéo HD)       | Oui       |
| 2.6           | Impact évalué avant construction ?         | Non         | Non                  | Oui (léger)|
| 2.7           | Peut être décommissionnée proprement ?     | Difficile (images générées stockées) | Oui                  | Oui |
| 2.9           | Les composants UI ont un impact maîtrisé ? | Non (GPU)   | Non (player vidéo)   | Oui (formulaire HTML) |
| 2.10          | L'impact des services tiers est évalué ?   | Non (API IA coûteuse) | Moyen (YouTube/TMDB) | Aucun service tiers |
| **Décision**  |                                            | **Abandonner** | **Retravailler**     | **Construire** |

### Le retournement chiffré

Avec 100 utilisateurs actifs et un taux de réutilisation de 3 générations par utilisateur/jour :

| Feature | CO2e / utilisation | Utilisations/jour | CO2e/an |
|---------|--------------------|--------------------|---------|
| US-A    | ~5g (génération IA) | 300              | ~547 kg |
| US-C    | ~0.01g (POST HTTP) | 200               | ~0.73 kg |

**US-A = ~750× l'impact de US-C pour un même volume d'utilisateurs.**

À l'échelle de 1 million d'utilisateurs quotidiens, US-A représenterait ~5 840 tonnes de CO2e par an. US-C : ~3.65 tonnes.

## Partie 2 - US-B retravaillée

> En tant qu'utilisateur, je veux pouvoir **consulter la bande-annonce d'un film en cliquant sur un bouton "Voir la bande-annonce"**, affichée en qualité standard par défaut, avec la possibilité de passer en HD.

Corrections RGESN :
- **Pas d'autoplay** (critère 4.1) → clic utilisateur requis
- **Vignette cliquable** au lieu de lecteur vidéo embarqué au chargement
- **Qualité standard par défaut** → l'utilisateur choisit la HD s'il le souhaite
- **Lazy loading** de l'iframe YouTube uniquement au clic

## Partie 3 - Audit Stratégie de Letterflop

| #    | Critère                                                        | Conforme ?   | Commentaire |
|------|----------------------------------------------------------------|:------------:|-------------|
| 1.1  | L'utilité du service a-t-elle été évaluée ?                    | Partiel      | Le service existe mais pas d'évaluation utilité vs impact |
| 1.2  | Les cibles utilisateurs sont-elles clairement identifiées ?    | Partiel      | Usage personnel implicite, pas documenté |
| 1.3  | Un responsable écoconception est-il désigné ?                  | Non          | Aucun rôle désigné |
| 1.4  | Les revues de conception intègrent-elles l'écoconception ?     | Non          | Pas de processus de revue |
| 1.5  | Des objectifs de réduction sont-ils quantifiés ?               | Non          | Pas de baseline, pas d'objectif |
| 1.6  | La collecte de données est-elle limitée au strict nécessaire ? | Non          | `SELECT *` partout, synopsis stocké même en liste |
| 1.7  | Le chiffrement est-il adapté aux besoins ?                     | Oui          | App locale, pas de données sensibles |
| 1.8  | Le service favorise-t-il les solutions open source ?           | Oui          | PostgreSQL, Spring Boot, Vite, Tailwind |
| 1.9  | Le service est-il interopérable ?                              | Partiel      | API REST mais pas de standard d'export |
| 1.10 | Les API sont-elles ouvertes et documentées ?                   | Oui          | Swagger/OpenAPI via springdoc |

**Bilan : 3 Oui / 4 Non / 3 Partiel**

## Ce que la mesure vérifie

La grille de décision force à poser les bonnes questions **avant** d'écrire la première ligne de code. C'est le filtre le moins coûteux et le plus efficace.

## Pourquoi c'est important

Le RGESN Spécifications est la famille la plus rentable en termes d'impact. Une feature qu'on ne construit pas :
- ne consomme pas de ressources serveur
- ne transfère pas de données
- ne fait pas travailler les terminaux utilisateurs
- ne nécessite pas de maintenance

## Bonnes pratiques

- **À chaque refinement**, poser la question : "Cette feature justifie-t-elle son coût environnemental par rapport au gain métier ?"
- **Toujours proposer une version sobre** avant la version "wow"
- **Le décommissionnement** est un critère souvent oublié : si une feature ne peut pas être retirée proprement, c'est un signal d'alerte

## Boîte à outils

| Outil | Usage |
|-------|-------|
| Grille RGESN Spécifications | Filtrage systématique des US au backlog |
| RGESN Stratégie (1.1-1.10) | Audit du niveau de maturité écoconception |
| Event Storming | Cartographier les événements métier pour identifier le gaspillage fonctionnel |
