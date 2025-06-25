# 🏋️‍♂️ Backend - App para Guía de Atletas

Este es el backend de una aplicación diseñada para que entrenadores creen rutinas de entrenamiento y los usuarios (atletas) puedan visualizarlas, registrarlas y hacer seguimiento de su progreso.

---

## 🚀 Tecnologías utilizadas

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT (JSON Web Tokens)** para autenticación  
- **bcryptjs** para encriptar contraseñas  
- **dotenv** para gestionar variables de entorno  
- **CORS y Helmet** para seguridad  

---

## 🧩 Funcionalidades principales

- Registro y login de usuarios (atletas y entrenadores)  
- Roles con permisos (admin/profesor y usuario)  
- CRUD de entrenamientos por parte del entrenador  
- Visualización y registro de progreso por parte del atleta  
- Middleware de autenticación y protección de rutas  
- Validaciones y manejo de errores

---

## 📦 Estructura del proyecto

/src

 ├── controllers

 ├── models

 ├── routes
 
 ├── middlewares

 ├── config

 └── app.js


---

## 🛠️ Cómo iniciar el proyecto

```bash
# Clona el repositorio
git clone https://github.com/sebascarreram/pets-food-backend.git

# Entra a la carpeta
cd pets-food-backend

# Instala dependencias
npm install

# Configura el archivo .env

# Inicia el servidor
npm run dev
