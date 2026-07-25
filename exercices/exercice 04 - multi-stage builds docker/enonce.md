# Exercice 4 : Architecture - Multi-stage builds Docker

## Critères RGESN

- **3.1** - Le service repose-t-il sur des composants conçus pour réduire leurs impacts environnementaux ?
- **3.3** - Le service supporte-t-il l'évolution des protocoles (HTTP/2, compression) ?

## Contexte

Letterflop pèse **~2.63 GB** en images Docker. C'est plus lourd qu'un système d'exploitation complet - pour une application qui cherche des films et logue des visionnages.

![You wanted a banana but what you got was a gorilla holding the banana and the entire jungle](../../img/gorilla.webp)

Le backend embarque le JDK complet (compilateur, outils de debug, man pages) alors qu'il n'a besoin que du JRE pour exécuter un `.jar`. Le frontend embarque Node.js et `node_modules` en production alors qu'il n'a besoin que de fichiers HTML/CSS/JS statiques.

## Votre mission

### 1. Diagnostiquer

Examinez les Dockerfiles actuels (`backend/Dockerfile` et `frontend/Dockerfile`). Répondez :

```markdown
Pourquoi l'image eclipse-temurin:25 (JDK) est-elle un problème en production ?
→ _______________

Pourquoi "npm start" (vite dev server) est-il un problème en production ?
→ _______________

Quelle est la différence entre un JDK et un JRE ?
→ _______________
```

### 2. Réécrire le Dockerfile backend

Transformez `backend/Dockerfile` en multi-stage build :
- **Stage 1** `build` : compiler le jar avec Maven
- **Stage 2** : exécuter uniquement avec le JRE Alpine

```dockerfile
# Stage 1 - build
FROM _______________ AS build
WORKDIR /app
COPY pom.xml .
RUN _______________
COPY src ./src
RUN _______________

# Stage 2 - run
FROM _______________
WORKDIR /app
COPY --from=build _______________
EXPOSE 8080
CMD _______________
```

### 3. Réécrire le Dockerfile frontend

Transformez `frontend/Dockerfile` en multi-stage build :
- **Stage 1** `build` : compiler les assets TypeScript avec Vite
- **Stage 2** : servir les fichiers statiques avec nginx

```dockerfile
# Stage 1 - build
FROM node:24.15.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN _______________
COPY . .
RUN _______________

# Stage 2 - serve
FROM _______________
COPY --from=build _______________ _______________
EXPOSE 80
```

### 4. Mettre à jour docker-compose.yml

Le frontend était servi par Vite sur le port 3000. Maintenant nginx écoute sur le port 80. Mettez à jour le mapping de ports.

## Avant de coder

```bash
# Observer la taille actuelle des images
docker images --format "table {{.Repository}}\t{{.Size}}" | grep letter-flop

# Inspecter les couches du backend (qu'est-ce qui pèse ?)
docker history letter-flop-backend
```

## Validation

```bash
# Reconstruire sans cache
docker compose build --no-cache

# Comparer les tailles
docker images --format "table {{.Repository}}\t{{.Size}}" | grep -E "letter-flop|nginx"

# Vérifier que l'application fonctionne
docker compose up -d
curl http://localhost:3000  # doit retourner le HTML de la page de recherche
```

## Indice

- Images de base : `maven:3.9-eclipse-temurin-25-alpine` pour le build, `eclipse-temurin:25-jre-alpine` pour le run
- Le jar compilé se trouve dans `/app/target/letterflop-0.0.1-SNAPSHOT.jar`
- `mvn dependency:go-offline` pré-télécharge les dépendances (optimise le cache Docker)
- nginx sert depuis `/usr/share/nginx/html`

---

→ [Proposition de solution](reponse.md)
