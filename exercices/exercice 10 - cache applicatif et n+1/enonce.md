# Exercice 10 : Cache applicatif et N+1

## Critères RGESN

- **7.1** - Le service met-il en cache les données les plus utilisées ?
- **4.7** - Le service limite-t-il les appels réseau ?

## Contexte

Une recherche retournant 20 films déclenche **41 appels HTTP** vers l'API TMDB : 1 appel de recherche + 20 appels `getMovieDetail()` pour récupérer le réalisateur de chaque film. C'est le problème N+1.

10 utilisateurs qui cherchent "Matrix" simultanément = **410 appels** vers TMDB pour des données strictement identiques. Et ces données sont quasi-statiques : le réalisateur de Matrix ne change pas.

## Votre mission

### 1. Identifier le N+1 (~5 min)

Ouvrez `backend/src/main/java/com/yot/letterflop/service/TmdbService.java` et lisez `searchMovies()` :

```markdown
Pour chaque résultat de recherche, quelle méthode est appelée ?     → ___
Combien d'appels HTTP au total pour 20 résultats ?                  → ___
Quelles données sont récupérées mais jamais affichées dans la grille ? → ___
```

### 2. Ajouter le cache Spring (~20 min)

**Étape 1** - Ajouter les dépendances dans `backend/pom.xml` :
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

**Étape 2** - Activer le cache dans `LetterflopApplication.java` :
```java
@SpringBootApplication
@EnableCaching  // ← ajouter cette annotation
public class LetterflopApplication { ... }
```

**Étape 3** - Annoter les méthodes dans `TmdbService.java` :
```java
@Cacheable("tmdb-search")
public List<MovieSearchResultDto> searchMovies(String query) { ... }

@Cacheable("tmdb-detail")
public MovieDetailDto getMovieDetail(Integer tmdbId) { ... }
```

**Étape 4** - Configurer le TTL dans `application.properties` :
```properties
spring.cache.caffeine.spec=maximumSize=500,expireAfterWrite=3600s
```

### 3. Configurer les timeouts RestTemplate (~10 min)

Ouvrez `backend/src/main/java/com/yot/letterflop/config/RestTemplateConfig.java`. Le RestTemplate actuel n'a aucun timeout - un appel TMDB lent peut bloquer un thread indéfiniment.

Ajoutez des timeouts :
```java
// connectTimeout : temps max pour établir la connexion TCP
// readTimeout : temps max pour recevoir la réponse
```

## Avant de coder

```bash
# Lancez l'application et recherchez "Matrix"
# Observez les logs du backend :
docker compose logs -f backend

# Comptez les lignes contenant "api.themoviedb.org"
```

Recherchez "Matrix" une première fois, notez le nombre d'appels TMDB dans les logs.

## Validation

1. Recherchez "Matrix" **deux fois de suite**
2. La deuxième recherche doit être quasi-instantanée (<10 ms)
3. Les logs serveur ne doivent montrer **aucun appel TMDB** lors de la deuxième recherche

```bash
# Vérifier dans les logs
docker compose logs -f backend | grep -c "themoviedb"
```

## Indice

- `@Cacheable("nom-du-cache")` crée un cache en mémoire basé sur les paramètres de la méthode
- Caffeine est le cache in-memory le plus performant pour la JVM
- TTL de 1h (3600s) : les données TMDB changent rarement (corrections de crédits, mise à jour de synopsis)
- Le cache ne résout pas le N+1 **structurellement** - il l'amortit. Le vrai fix serait de ne pas appeler `getMovieDetail()` depuis `searchMovies()`
