# API NestJS con Docker Compose

¡Bienvenido a la API NestJS! Esta API está construida sobre el framework NestJS, que proporciona una estructura sólida y modular para desarrollar aplicaciones Node.js escalables. Utilizamos Docker Compose para gestionar nuestra base de datos PostgreSQL, lo que facilita la configuración y ejecución de la base de datos junto con nuestra API.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Docker: [Instalación de Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalación de Docker Compose](https://docs.docker.com/compose/install/)

## Configuración

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone <url_del_repositorio>
    ```

2. Navega hasta el directorio de la API:

    ```bash
    cd nombre_de_tu_api
    ```

3. Crea un archivo `.env` en el directorio raíz de la API y configura las variables de entorno necesarias. Puedes encontrar un ejemplo en el archivo `.env.example`.

## Ejecución

Para ejecutar la API junto con la base de datos PostgreSQL, sigue estos pasos:

1. Abre una terminal y navega hasta el directorio de la API.

2. Ejecuta el siguiente comando para construir las imágenes Docker y levantar los contenedores:

    ```bash
    docker-compose up --build
    ```

3. Una vez que los contenedores estén en funcionamiento, podrás acceder a la API en `http://localhost:3000`.

## Detener y Limpiar

Para detener los contenedores y limpiar los recursos, ejecuta el siguiente comando en la misma terminal donde iniciaste los contenedores:

```bash
docker-compose down
