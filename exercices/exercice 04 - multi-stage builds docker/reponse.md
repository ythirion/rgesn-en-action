# Exercice 4 — Réponse

## Diagnostic

- **eclipse-temurin:25 (JDK)** embarque le compilateur Java, les outils de debug, les sources, les man pages. En production, on n'a besoin que du JRE (Java Runtime Environment) pour exécuter le `.jar`.
- **`npm start` (Vite dev server)** en production : hot-reload activé, pas de compression, pas de cache HTTP, sourcemaps exposées. Un serveur de développement n'a rien à faire en production.
- **JDK vs JRE** : le JDK contient le compilateur (`javac`) + le JRE. Le JRE contient uniquement la JVM pour exécuter du bytecode. En production, seul le JRE est nécessaire.

## Solution — backend/Dockerfile

```dockerfile
FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=build /app/target/letterflop-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
```

## Solution — frontend/Dockerfile

```dockerfile
FROM node:24.15.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

## Solution — docker-compose.yml (extrait)

```yaml
frontend:
  build: ./frontend
  ports:
    - "3000:80"   # nginx écoute sur le port 80 en interne
```

## Résultats mesurés

| Service   | Avant        | Après       | Gain   |
|-----------|--------------|-------------|--------|
| frontend  | ~904 MB      | ~62.4 MB    | −93 %  |
| backend   | ~1.28 GB     | ~284 MB     | −78 %  |
| db        | ~445 MB      | ~445 MB     | 0 %    |
| **Total** | **~2.63 GB** | **~791 MB** | **−80 %** |

## Ce que la mesure vérifie

```bash
docker images --format "table {{.Repository}}\t{{.Size}}" | grep -E "letter-flop|nginx"
```

Le total doit passer sous les 800 MB.

## Pourquoi c'est important

**Ce que ça coûte au transfert :**
- Premier `docker pull` sur une machine CI : 2-4 min à 100 Mbps
- Chaque push au registry stocke et transfère l'intégralité des couches
- Chaque développeur clone ces images sur sa machine

**Ce que nginx apporte au-delà de la taille :**
- Support natif HTTP/2 (multiplexage des requêtes)
- Compression brotli/gzip automatique
- Headers de cache (`Cache-Control`, `ETag`)
- Conçu pour tenir la charge (event-driven, non-blocking)

## Bonnes pratiques

- **Multi-stage build par défaut** — il n'y a aucune raison de ne pas l'utiliser
- **Toujours Alpine** — les variantes Alpine sont 5-10× plus légères
- **JDK pour builder, JRE pour exécuter** — ne jamais expédier le compilateur en production
- **Séparer build et serve** — le code source et `node_modules` n'ont rien à faire dans l'image de production

## Boîte à outils

| Outil | Usage |
|-------|-------|
| `docker images` | Taille des images |
| `docker history <image>` | Taille de chaque couche (identifier ce qui pèse) |
| `docker image inspect` | Métadonnées détaillées |
| `docker run --rm -it <image> sh` | Explorer le contenu d'une image |
| [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/) | Documentation officielle |
