# Exercice 10 — Réponse

## 1. Diagnostic du N+1

Dans `TmdbService.searchMovies()` :

```java
for (Map<String, Object> result : results) {
    Integer id = (Integer) result.get("id");
    MovieDetailDto detail = getMovieDetail(id);  // ← 1 appel HTTP par film !
    // ...
}
```

- Pour chaque résultat : `getMovieDetail()` est appelé → 1 appel HTTP vers `/movie/{id}?append_to_response=credits`
- 20 résultats = **1 + 20 = 21 appels HTTP** minimum (souvent 41 car `/credits` est un appel séparé)
- Données récupérées mais jamais affichées dans la grille : `synopsis`, `runtime`, `genres`, `voteAverage`, `originalTitle`, `originalLanguage`, `popularity`

## 2. Solution — Cache Spring

### pom.xml (ajouter les dépendances)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

### LetterflopApplication.java

```java
package com.yot.letterflop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class LetterflopApplication {
    public static void main(String[] args) {
        SpringApplication.run(LetterflopApplication.class, args);
    }
}
```

### TmdbService.java (annotations cache)

```java
@Cacheable("tmdb-search")
public List<MovieSearchResultDto> searchMovies(String query) {
    // ... code existant inchangé
}

@Cacheable("tmdb-detail")
public MovieDetailDto getMovieDetail(Integer tmdbId) {
    // ... code existant inchangé
}
```

### application.properties

```properties
spring.cache.caffeine.spec=maximumSize=500,expireAfterWrite=3600s
```

- `maximumSize=500` : au-delà de 500 entrées, les plus anciennes sont évincées
- `expireAfterWrite=3600s` : chaque entrée expire 1h après son écriture

## 3. Solution — Timeouts RestTemplate

```java
@Configuration
public class RestTemplateConfig {

    @Bean
    public RestTemplate restTemplate() {
        HttpComponentsClientHttpRequestFactory factory =
            new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(Duration.ofSeconds(5));
        factory.setReadTimeout(Duration.ofSeconds(10));
        return new RestTemplate(factory);
    }
}
```

Avec les imports :
```java
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import java.time.Duration;
```

## Résultats mesurés

| Métrique | Avant | Après (avec cache) | Gain |
|----------|-------|---------------------|------|
| Appels TMDB — 1ère recherche "Matrix" | 21-41 | 21-41 | 0 % (cache froid) |
| Appels TMDB — 2ème recherche "Matrix" | 21-41 | **0** | **−100 %** |
| Temps de réponse — 2ème recherche | ~2-5s | **< 10 ms** | **~99 %** |
| 10 users × "Matrix" simultanément | 210-410 | **21-41** (1er) + **0** (suivants) | **−90 %+** |

## Ce que la mesure vérifie

```bash
# Rechercher "Matrix" 2 fois — les logs ne doivent montrer aucun appel TMDB la 2ème fois
docker compose logs -f backend
```

## Pourquoi c'est important

### Le problème N+1 en un schéma

```
Recherche "Matrix" → 1 appel /search/movie → 20 résultats
                     │
                     ├── 1 appel /movie/603 (Matrix)
                     ├── 1 appel /movie/604 (Matrix Reloaded)
                     ├── 1 appel /movie/605 (Matrix Revolutions)
                     ├── ... × 17 autres films
                     └── Total : 21 appels HTTP

10 utilisateurs simultanés = 210 appels HTTP
100 utilisateurs = 2 100 appels HTTP

Avec cache : 21 appels (1er user) + 0 × 99 = 21 appels
```

### Cache vs fix structural

Le cache **amortit** le N+1, il ne le **supprime** pas. Le vrai fix serait de ne pas appeler `getMovieDetail()` dans la boucle de `searchMovies()` — les données de la recherche TMDB (`/search/movie`) contiennent déjà le titre, l'année et l'affiche. Seul le réalisateur nécessite un appel supplémentaire, et il pourrait être chargé à la demande sur la fiche détail.

### Timeouts

Sans timeout, un appel TMDB lent (réseau, rate limiting) bloque un thread Tomcat indéfiniment. Avec un pool de threads limité (défaut : 200), quelques appels bloqués peuvent paralyser le service entier.

## Bonnes pratiques

- **Cacher les appels vers les API externes** dont les données changent rarement
- **TTL adapté au contexte** : 1h pour des données quasi-statiques (TMDB), 5 min pour des données vivantes
- **`maximumSize`** pour éviter que le cache ne consomme toute la mémoire
- **Toujours configurer `connectTimeout` et `readTimeout`** sur les clients HTTP
- **Le cache est un amortisseur, pas une solution** — il masque le N+1, il ne le corrige pas

## Boîte à outils

| Outil | Usage |
|-------|-------|
| `docker compose logs -f backend` | Observer les appels TMDB dans les logs |
| Spring Boot Actuator `/actuator/caches` | Métriques du cache (hits/misses) |
| Caffeine | Cache in-memory haute performance pour JVM |
| `@Cacheable` / `@CacheEvict` | Annotations Spring Cache |
