<div align="center">

# 🛍️ E-Commerce Store

### Full-Stack Project

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Stripe](https://img.shields.io/badge/Stripe-710abc?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)
[![Auth0](https://img.shields.io/badge/Auth0-000000?style=for-the-badge&logo=auth0&logoColor=white)](https://auth0.com/)

**A complete full-stack e-commerce application with product catalog, shopping cart, checkout, payments, and authentication.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Screenshots](#-screenshots)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 Core Functionality
- 📦 **Product Catalog** with categories
- 🔍 **Search & Filter** products
- 🛒 **Shopping Cart** management
- 📄 **Product Details** page
- 💳 **Stripe Checkout** integration

</td>
<td width="50%">

### 🔐 User Features
- 🔑 **Authentication** system
- 👤 **Members-only** area
- 📋 **Order History** tracking
- 🌍 **Countries & States** selection
- 💻 **Clean & user-friendly** UI

</td>
</tr>
</table>

---

## 🚀 Tech Stack

<div align="center">

### Frontend
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

### Backend
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white)
![REST API](https://img.shields.io/badge/REST-02569B?style=flat-square&logo=rest&logoColor=white)

### Database & Tools
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-710abc?style=flat-square&logo=stripe&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-000000?style=flat-square&logo=auth0&logoColor=white)

</div>

---

## 🐳 Quick Start with Docker

> **The easiest way to run the entire stack!**

### 📦 Docker Files Location

Docker configuration files are located in `01-starter-files/docker/`:

```
01-starter-files/
└── docker/
    ├── 📂 mysql/
    │   └── init.sql              # Database initialization script
    └── 📂 nginx/
        └── default.conf          # Reverse proxy configuration
```

**What each file does:**
- **mysql/init.sql** - Automatically initializes the database with tables and sample data
- **nginx/default.conf** - Configures the reverse proxy to route requests between frontend and backend

### ⚠️ Important: Environment Configuration

Before running the project, you need to create the `environments` folder with the required configuration files:

**📁 Location:** `03-frontend/angular-ecommerce/src/environments/`

Create the following files:

**`environment.prod.ts`** (for Docker):
```typescript
export const environment = {
    production: true,
    shopApiUrl: "/api",
    stripePublishableKey: "your_stripe_publishable_key_here"
};
```

**`environment.development.ts`** (for local development):
```typescript
export const environment = {
    production: false,
    shopApiUrl: "http://localhost:8080/api",
    stripePublishableKey: "your_stripe_publishable_key_here"
};
```

**`environment.ts`** (default):
```typescript
export const environment = {
    production: false,
    shopApiUrl: "http://localhost:8080/api",
    stripePublishableKey: "your_stripe_publishable_key_here"
};
```

> 🔒 **Note:** The `environments` folder is not included in the repository for security reasons. You must create it manually with your own API keys.

### 🚀 Running with Docker

```bash
# 1. Navigate to docker folder
cd 01-starter-files/docker/

# 2. Update file paths in docker-compose.yml
# Replace the volume paths with your local machine absolute paths:
# Example:
#   - /your/absolute/path/to/frontend:/usr/share/nginx/html/frontend
#   - /your/absolute/path/to/backend:/app

# 3. Start all services
docker compose up --build
```

**That's it!** 🎉 The entire stack (Angular + Spring Boot + MySQL + Nginx) will be up and running.

> 💡 **Tip:** Make sure Docker Desktop is running before executing the commands.

---

## 💻 Local Development Setup

### 📦 Prerequisites

- Node.js & npm
- Java JDK 11+
- MySQL Server
- IntelliJ IDEA (recommended for backend)
- Visual Studio Code (recommended for frontend)

### ⚙️ Environment Setup

> ⚠️ **Required for both Docker and Local development**

Create the `environments` folder in `frontend/src/` with the following files:

**Directory structure:**
```
03-frontend/angular-ecommerce/
└── src/
    └── environments/
        ├── environment.ts
        ├── environment.development.ts
        └── environment.prod.ts
```

**Configuration templates:**

<details>
<summary><b>environment.ts</b> (click to expand)</summary>

```typescript
export const environment = {
    production: false,
    shopApiUrl: "http://localhost:8080/api",
    stripePublishableKey: "pk_test_your_stripe_key_here"
};
```
</details>

<details>
<summary><b>environment.development.ts</b></summary>

```typescript
export const environment = {
    production: false,
    shopApiUrl: "http://localhost:8080/api",
    stripePublishableKey: "pk_test_your_stripe_key_here"
};
```
</details>

<details>
<summary><b>environment.prod.ts</b> (for Docker)</summary>

```typescript
export const environment = {
    production: true,
    shopApiUrl: "/api",
    stripePublishableKey: "pk_test_your_stripe_key_here"
};
```
</details>

> 🔒 **Security Note:** These files are not included in the repository. Replace `pk_test_your_stripe_key_here` with your actual Stripe publishable key.

### 🎨 Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:4200
```

**IDE:** Visual Studio Code

### ⚙️ Backend Setup

```bash
# Open project in IntelliJ IDEA
# Run SpringBootEcommerceApplication.java

# Ensure MySQL is running and credentials match application.properties
```

**IDE:** IntelliJ IDEA

---

## 🗄️ Database Setup

All SQL scripts are located in `01-starter-files/db-scripts/` and `01-starter-files/save-the-order-starter-files/`

### 📋 Import Order

```sql
1. 01-create-user.sql
2. 02-create-products.sql
3. refresh-database-with-100-products.sql
4. countries-and-states.sql
5. save-the-order-starter-files/create-order-tables.sql
```

### 🐳 Docker Setup

Database initialization scripts are automatically executed when using Docker Compose.

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page

![Home Products 1](https://github.com/user-attachments/assets/4374e8eb-851f-4df4-b6f0-4b21ba864685)

![Home Products 2](https://github.com/user-attachments/assets/8bd7f64f-4a70-4600-a6d2-e128bba598fe)

### 📄 Product Details

![Product Details](https://github.com/user-attachments/assets/92c8a371-287b-4e22-88aa-9f2e5e29888e)

### 🛒 Shopping Cart

![Cart Details](https://github.com/user-attachments/assets/ed47c96e-df3e-426b-bb28-9f70fcf57d1b)

### 💳 Checkout Process

![Checkout 1](https://github.com/user-attachments/assets/90a2e226-6d42-45df-af9c-9c14b840a4ed)

![Checkout 2](https://github.com/user-attachments/assets/79861a85-f434-464c-bad5-3655bf181df5)

![Checkout 3](https://github.com/user-attachments/assets/81a2ffa9-25b8-47bb-9070-4cd1d5ab5324)

### 📦 Order History

![Order History](https://github.com/user-attachments/assets/d81726d0-1623-4f3b-9d91-b49bedbaa3ce)

### 💰 Stripe Payment Integration

![Stripe Payment 1](https://github.com/user-attachments/assets/0d3f5476-40de-4ccd-9fb6-43498de2840f)

![Stripe Payment 2](https://github.com/user-attachments/assets/f206e29a-464f-49a3-9faf-7b71ed1a4e4c)

### ⭐ Members Area (Protected)

![Members Page](https://github.com/user-attachments/assets/879f5412-12fc-47ec-b963-86abe935a3e0)

### 🔐 Login

![Login](https://github.com/user-attachments/assets/0556c077-3bc5-4c4c-804b-e34a5e8d580b)

</div>

---

## 📁 Project Structure

```
e-commerce-project/
├── 📂 01-starter-files/
│   ├── 📂 db-scripts/
│   │   ├── 01-create-user.sql
│   │   ├── 02-create-products.sql
│   │   └── countries-and-states.sql
│   ├── 📂 save-the-order-starter-files/
│   │   ├── create-order-tables.sql
│   │   └── sample-purchase.json
│   └── 📂 docker/                    🐳 Docker configuration
│   │    ├── 📂 mysql/
│   │     │   └── init.sql              # Auto database setup
│   │     └── 📂 nginx/
│   │         └── default.conf          # Reverse proxy config
│   └── 📂 spring-boot-properties/                    
│       └── application.properties
├── 📂 02-backend/spring-boot-ecommerce (Spring Boot)
├── 📂 03-frontend/angular-ecommerce (Angular)
│   └── src/
│       └── 📂 environments/          ⚠️ (Not included - create manually)
│           ├── environment.ts
│           ├── environment.development.ts
│           └── environment.prod.ts
└── ⚙️.env
└── 🚫 .gitignore
└── 🐳 .docker-compose.yml
└── 📄 README.md
```

---

## 🔧 Configuration

### Environment Files Setup

The `environments` folder contains sensitive API keys and is **not included** in the repository for security reasons.

**Required files:**
- `environment.ts` - Default configuration
- `environment.development.ts` - Local development
- `environment.prod.ts` - Production (Docker)

**Key differences:**
- **Local:** Uses `http://localhost:8080/api`
- **Docker:** Uses `/api` (proxied through Nginx)

### Backend (`application.properties`)

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Stripe Integration

1. Get your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Add the **publishable key** to your environment files
3. Add the **secret key** to your backend configuration

> 💡 **Tip:** Use test keys (starting with `pk_test_` and `sk_test_`) for development.

---

## 👨‍💻 Author

**Lara**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Laraaa7)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/larasonodelaviuda)

---

<div align="center">

</div>
