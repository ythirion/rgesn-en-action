# Exercice 5 : Hébergement responsable - Où déployer Letterflop ?

## Critères RGESN

- **8.3** - PUE (Power Usage Effectiveness)
- **8.4** - WUE (Water Usage Effectiveness)
- **8.5** - Énergie renouvelable
- **8.6** - Localisation géographique
- **8.7** - Récupération de chaleur
- **8.8** - Données chaudes / froides

## Contexte

L'application est optimisée, mais où la déployer ? Le choix de l'hébergeur peut multiplier l'impact environnemental par 5 à 10. Un serveur alimenté par du charbon émet **800 gCO2/kWh**. Le même serveur alimenté par de l'hydroélectricité émet **20 gCO2/kWh**. Le facteur est **40×**.

## Votre mission

### 1. Comprendre les métriques (~5 min)

```markdown
PUE = Énergie totale du datacenter / Énergie des équipements IT

PUE 2.0  ████████████████████ 50% pertes
PUE 1.5  ██████████░░░░░░░░░░ 33% pertes
PUE 1.2  ████░░░░░░░░░░░░░░░░ 17% pertes
PUE 1.1  ██░░░░░░░░░░░░░░░░░░  9% pertes

WUE = Litres d'eau consommés / kWh d'énergie IT
```

### 2. Auditer 3 hébergeurs (~20 min)

Choisissez 3 hébergeurs parmi : OVHcloud, Scaleway, Infomaniak, Hetzner, Google Cloud, AWS. Recherchez les informations sur leurs pages "Sustainability" / "Environnement" et remplissez :

```markdown
| Critère                | Hébergeur 1 : ___ | Hébergeur 2 : ___ | Hébergeur 3 : ___ |
|------------------------|-------------------|-------------------|-------------------|
| PUE déclaré            |                   |                   |                   |
| WUE documenté ?        |                   |                   |                   |
| % énergie renouvelable |                   |                   |                   |
| Direct ou RECs ?       |                   |                   |                   |
| Datacenter le + proche |                   |                   |                   |
| Chaleur récupérée ?    |                   |                   |                   |
| Offre stockage froid ? |                   |                   |                   |
| Rapport durabilité ?   |                   |                   |                   |
```

### 3. Concevoir l'architecture hot/cold pour movie_logs (~10 min)

Les logs de visionnage s'accumulent indéfiniment dans PostgreSQL. Concevez une politique de cycle de vie :

```markdown
movie_logs
    │
    ├── < ___ mois  ──► _____________ (hot)   ← requêtes utilisateur
    ├── ___–___ mois ──► _____________ (cold)
    └── > ___ mois   ──► _____________
```

### 4. Choisir une région de déploiement

Pour des utilisateurs principalement en France, quelle région choisissez-vous chez chacun de vos 3 hébergeurs ? Justifiez.

## Avant de coder

Pas de code dans cet exercice. Utilisez les sources ci-dessous et remplissez les tableaux.

## Sources à consulter

- Pages "Sustainability" / "Environnement" des hébergeurs
- [Electricity Maps](https://www.electricitymaps.com) - intensité carbone en temps réel par pays
- [Green Web Foundation](https://www.thegreenwebfoundation.org) - vérifier si un domaine est hébergé "vert"
- [Uptime Institute](https://uptimeinstitute.com) - benchmark mondial des datacenters

---

→ [Proposition de solution](reponse.md)
