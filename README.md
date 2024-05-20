# TicketShow API - v1

es una aplicación backend desarrollada en Node.js con el framework Nest.js, diseñada para gestionar una colección de libros digital. Esta API permite a los usuarios registrarse, iniciar sesión y comprar boletas para eventos usando roles específicos, así como el de admin que tendrá acceso a cambios en la pagina web.

## Demostración

Puedes interactuar con la API utilizando la siguiente URL:

[Ir a probar la API](http://localhost:3000/api#/Users/AuthController_profile) -> Para ingresar como admin puedes usar estas credenciales:
```json
{
  "email": "prueba@gmail.com",
  "password": "12345ri"
}
```
- **Autenticación de Usuarios**: Gestiona el acceso a través de un sistema robusto de autenticación JWT.
- **Gestión de Roles**: Controla el acceso a diferentes partes de la API basándose en roles de usuario (admin, user).
- **Validación de Datos**: Asegura la integridad de los datos con validaciones completas en todas las entradas.

## Tecnologías Utilizadas

- Nest.js: Un framework progresivo de Node.js para construir aplicaciones de servidor eficientes y escalables.
- TypeORM para PostgreSQL: Sistema de gestión de bases de datos relacional para almacenar todos los datos de libros y usuarios.
- JWT: Para la autenticación y gestión de sesiones.
- Swagger: Para la documentación de la API.
- Gitflow: Estrategia de manejo de ramas que mantiene el desarrollo organizado y eficiente.
- Docker: Tecnologia de contenerización para levantar la base de datos usando postgres.

## Configuración Local

Para ejecutar el proyecto localmente, clona el repositorio y configura las variables de entorno necesarias para la base de datos y JWT.

1. Clona el repositorio:
   ```shell
   git clone https://github.com/JuanHiguita77/Ticket-Show-Web
    ```

2. Instala las dependencias necesarias:
   ```shell
   npm install
   ```

3. Copia el archivo .env.example a un nuevo archivo .env y configura las variables de entorno necesarias:
   ```shell
   cp .env.example .env
    ```
    PORT=3000
    DB_NAME=tu_nombre_de_base_de_datos
    DB_USER=tu_usuario_de_base_de_datos
    DB_PASS=tu_contraseña_de_base_de_datos
    DB_HOST=tu_host_de_base_de_datos
    DB_PORT=tu_puerto_de_base_de_datos

    JWT_DURATION=12h
    JWT_SECRET=m54543bxmgx4xSecr37Key

    USER_ROLE=user
    ADMIN_ROLE=admin

    Estos pasos garantizan que tengas toda la configuración necesaria para ejecutar el proyecto localmente, ajustando las variables de entorno según las necesidades de tu entorno de desarrollo.


## Levantar contenedor de base de datos
en la raiz del proyecto hay un archivo docker-compose.yml, este contiene el manifiesto necesario para levantar la base de datos con el siguiente comando 

```
docker-compose up
```

## Conexion a la base de datos
puedes usar cualquier cliente de base de datos como dbeaver, usando las variables de entorno definidas en el archivo _env_ o en el _docker-compose.yml_

## Carga de información inicial
para que el proceso de register pueda ser exitoso se require ejecutar los siguiente queries en la base de datos para tener la los roles creados

```
    INSERT into rol (id,name)values (1,'user');
    INSERT into rol (id,name)values (1,'admin');
```


## Levantar API
para levantar la api solo debes ejecutar el siguiente comando 

```
npm run start:dev
```