## PÁGINAS
1. Inicio de sesión
2. Vista previa
3. Curso

## UNIDADES DEL CURSO
1. Introducción al curso
2. Uso básico de la computadora
3. Procesadores de texto
4. Presentaciones
5. Hojas de cálculo
6. Herramientas compartidas de Google
7. Evaluación final

## Estructura de carpetas
Las carpetas client y server dividen al proyecto de la siguiente manera:
client (carpeta de todo el frontend, las páginas, los estilos, las funcionalidades javascript del frontend, etc.):
  - public (acá se meten cosas como imágenes, el ícono del sitio y demás, aunque si la página no va a tener imágenes, videos, o ícono ni nada de eso se puede sacar la carpeta nomás)
  - src (acá se meten los archivos de código del frontend, html, css, javascript, etc.)
  
server (carpeta de todo el backend, el servidor, las funcionalidades del backend, la comunicación con la base de datos, etc.):
  - app.js (archivo principal del backend, con esto se manejan las peticiones y respuestas del servidor, como las respuestas de la base de datos y así)
  - config.js (archivo de configuración del backend, como el puerto, etc.)
  - mysql (carpeta con la configuración para acceder a la base de datos)
    - config.js (archivo con las configuraciones de acceso a la base de datos)
    - userControllers.js (archivo con la conexión hecha a la base de datos, a partir de esa se hacen las peticiones a la misma)
    - db.sql (archivo con los scripts para inicial la base de datos, crear la tabla de usuarios y demás)
  - controllers
    - users.controller.js (archivo con las funciones para las rutas del servidor)
  - routes
    - users.routes.js (archivo con las rutas de la url del servidor)

**Cabe aclarar que por ahora la base de datos funciona únicamente de manera local, falta desplegarla así se puede usar en línea**

UNIDAD #1 - INTRODUCCIÓN AL CURSO

UNIDAD #2 - USO BÁSICO DE LA COMPUTADORA 
    La computadora es una herramienta muy útil para trabajar hoy en día. Al aprender a usarla de forma correcta y eficiente podemos abrirnos puertas a puestos y dinámicas de trabajo distintas, modernas y mucho más amplias. Actualmente, el buen uso de los dispositivos electrónicos en el trabajo nos suma muchos puntos para nuestro perfil como trabajador, son herramientas casi esenciales. En esta unidad vamos a abarcar el uso básico de la computadora, es una sección importante ya que no solo nos va a sumar un desarrollo propio, sino también saberes especialmente necesarios para las unidades siguientes.

    LECCIÓN #1 - Encendido y apagado correcto de la computadora
    Algo importante para tener en cuenta al usar una computadora es que, como cualquier cosa material, necesita un mantenimiento y un cuidado. Hay muchas prácticas que podemos implementar en nuestro día a día para evitar el desgaste prematuro de nuestro dispositivo. Una acción muy fácil que podemos realizar para mantener nuestra computadora en buen estado es un buen y eficiente apagado y encendido.
    ¿CÓMO PODEMOS ENCENDER LA COMPUTADORA CORRECTAMENTE?
    Para encender una computadora hay que tener en cuenta varios factores, como el tipo de computadora, la marca, el modelo, etc. Pero en general todas cumplen con los mismos estándares:
    LAPTOPS
    Estas son las más sencillas de encender, ya que es todo mediante un único botón: el botón de encendido. Dependiendo del modelo, la computadora debería encender con un sólo clic o manteniendo presionado por algunos segundos (use este método si el primero no funcionó).
    Estas son algunas imágenes de cómo podría lucir un botón de encendido de este estilo: