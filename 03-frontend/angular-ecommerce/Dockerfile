# Etapa de build usando Node 22
FROM node:22-alpine as build
WORKDIR /app

# Copiar archivos de package
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Build de producción
RUN npm run build -- --configuration production

# Etapa de producción con Nginx
FROM nginx:alpine
COPY dist/angular-ecommerce/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
