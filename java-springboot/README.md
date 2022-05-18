# Deploying a simple JAVA Spring Boot app using Argonaut

## Initial setup (Optional)

- Generate a Spring project from [spring initializr](https://start.spring.io/). For this example project the options we selected are:
  | Option | Value |
  | --- | --- |
  | Project | Maven |
  | Language | Java |
  | Spring Boot | 2.6.7 |
  | Packaging | Jar |
  | Java | 11 |
  | Dependencies | Spring Web |

- Open your project in your IDE and navigate to `src/main/resources/application.properties`.

- Add `server.port=3000` to the file. This is done to override the default 8080 port which is used by lambdas.

- Navigate to `src/main/java/<your group>/api/ApiApplication.java` and add the following code:

```java
package com.argonaut.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ApiApplication {

  @RequestMapping("/")
  public String home(){
    return "Hello from Spring Boot";
    }

  public static void main(String[] args) {
    SpringApplication.run(ApiApplication.class, args);
  }

}
```

The above code adds a `/` route to your web server using Spring Web's Decorators and returns a simple string on that route.

## Argonaut Deployment
