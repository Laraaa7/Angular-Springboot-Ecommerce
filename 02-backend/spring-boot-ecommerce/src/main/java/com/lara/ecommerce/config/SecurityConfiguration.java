package com.lara.ecommerce.config;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.accept.ContentNegotiationStrategy;
import org.springframework.web.accept.HeaderContentNegotiationStrategy;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // desactiva CSRF para API REST
                .cors(cors -> {}) // habilita CORS
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/orders/**").authenticated() // protege solo /api/orders
                        .anyRequest().permitAll() // resto público
                )
                .oauth2ResourceServer(oauth2 -> oauth2
                        .jwt(jwt -> {})
                        .authenticationEntryPoint((request, response, authException) -> {
                            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                            response.setContentType(MediaType.TEXT_PLAIN_VALUE);
                            response.getWriter().write("401 Unauthorized");
                        })
                );

        // añadir estrategia de negociacion de contenido
        http.setSharedObject(ContentNegotiationStrategy.class,
                              new HeaderContentNegotiationStrategy());


        return http.build();
    }
}
