# Usar OpenJDK 25 en Ubuntu
FROM mcr.microsoft.com/openjdk/jdk:25-ubuntu

WORKDIR /app

# Copiar JAR y keystore
COPY target/*.jar app.jar
COPY target/classes/lara-keystore.p12 /app/lara-keystore.p12

EXPOSE 8443

# Ejecutar la aplicación con HTTPS
ENTRYPOINT ["java","-jar","app.jar","--server.port=8443","--server.ssl.key-store=/app/lara-keystore.p12","--server.ssl.key-store-password=secret","--server.ssl.key-store-type=PKCS12","--server.ssl.key-alias=lara","--server.ssl.key-password=secret"]
