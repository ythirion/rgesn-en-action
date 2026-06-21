# Exercice 5 - Réponse

## Panorama des hébergeurs

### Hébergeurs européens

| Hébergeur      | PUE déclaré      | Énergie              | Points forts                              | Points de vigilance                |
|----------------|:----------------:|----------------------|-------------------------------------------|------------------------------------|
| **OVHcloud**   | 1.09 (Gravelines)| Mix + renouvelable   | Chaleur réutilisée, RGPD EU, souveraineté | Pas 100% renouvelable partout      |
| **Scaleway**   | 1.3              | 100% renouvelable    | DC Paris + Amsterdam, transparence        | Moins de régions que hyperscalers  |
| **Infomaniak** | 1.08             | 100% hydraulique     | Zéro compensation, suisse, très transparent| Capacité limitée, tarif premium    |
| **Hetzner**    | 1.30             | 100% renouvelable    | Prix compétitifs, allemand/finlandais     | Moins de services managés          |

### Hyperscalers

| Provider         | PUE    | CFE %       | Remarques                                          |
|------------------|:------:|:-----------:|----------------------------------------------------|
| **Google Cloud** | 1.10   | 64% (2023)  | Meilleur dashboard carbone, objectif 24/7 CFE 2030 |
| **AWS**          | ~1.15  | ~85% (2023) | Carbon Footprint Tool disponible                   |
| **Azure**        | ~1.18  | ~82% (2023) | Sustainability Calculator, net-zero 2030           |

### Intensité carbone par pays

| Pays/région   | gCO2/kWh | Commentaire                  |
|---------------|:---------:|------------------------------|
| Islande       | ~20       | Géothermie + hydro           |
| France        | ~55       | Parc nucléaire dominant      |
| Suède         | ~45       | Hydro + éolien               |
| Allemagne     | ~350      | Charbon/gaz encore important |
| Pologne       | ~700      | Charbon majoritaire          |
| États-Unis    | ~400      | Très variable par état       |

**Impact concret** : 10 000 kWh IT consommés :
- PUE 1.2 en France (55 gCO2/kWh) → **660 kg CO2e**
- PUE 1.6 aux US (400 gCO2/kWh) → **6 400 kg CO2e**
- Facteur : **~10×** pour le même service

## Architecture hot/cold pour movie_logs

```
movie_logs
    │
    ├── < 6 mois   ──► PostgreSQL (hot)            ← requêtes utilisateur
    ├── 6–24 mois  ──► Stockage objet compressé (cold) : S3 Glacier, OVH Cold Archive
    └── > 24 mois  ──► Suppression ou export RGPD à la demande
```

Héberger des années de logs dans PostgreSQL "chaud" coûte 10× plus cher - en argent et en énergie - que dans un stockage froid.

## Recommandation pour Letterflop

Pour un projet de cette taille (petite application, trafic limité) :

- **Option souveraine** : Scaleway ou Infomaniak - transparence maximale, 100% renouvelable, RGPD natif
- **Option pragmatique** : OVHcloud `GRA` (Gravelines) - PUE 1.09, infrastructure FR, prix compétitifs
- **Option hyperscaler** : GCP `europe-west9` (Paris) - meilleur dashboard carbone

**Dans tous les cas : éviter les régions US par défaut** - c'est la décision la plus simple et la plus impactante.

## Ce que la mesure vérifie

La règle des 3 questions avant de choisir un hébergeur :
1. Quel est son **PUE** ?
2. D'où vient son **électricité** ?
3. Où sont ses **datacenters** ?

Cela couvre 80% des critères d'hébergement du RGESN.

## Pourquoi c'est important

| Ce que le développeur contrôle directement | Ce qui nécessite un choix d'entreprise |
|--------------------------------------------|----------------------------------------|
| Choix de la région de déploiement (8.6)    | Sélection de l'hébergeur (8.3-8.5)    |
| Séparation données chaudes/froides (8.8)   | Négociation des SLAs de réplication    |
| Ordonnancement batch bas-carbone (8.10)    | Politique de récupération de chaleur   |

## Bonnes pratiques

- **`us-east-1` par défaut est l'anti-pattern le plus répandu** - il suffit de changer la région pour diviser l'impact par 5-7
- **Demander si l'énergie est en consommation directe ou en certificats (RECs/GOs)** - la nuance est énorme
- **PUE + WUE sont complémentaires** - un bon PUE obtenu par évaporation peut cacher un mauvais WUE
- **Le stockage froid commence dans le code** - la politique de rétention (7.2) est le pendant applicatif du critère 8.8

## Boîte à outils

| Outil | Usage |
|-------|-------|
| [Electricity Maps](https://www.electricitymaps.com) | Intensité carbone en temps réel par pays |
| [Green Web Foundation](https://www.thegreenwebfoundation.org) | Vérifier si un domaine est hébergé "vert" |
| [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org) | Estimation d'impact par provider cloud |
| Rapports durabilité hébergeurs | Métriques PUE/WUE vérifiables |
