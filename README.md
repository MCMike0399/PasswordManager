# Manejador de Contraseñas
>Programa diseñado en electron para manejar y encriptar las contraseñas de un usuario

## Tabla de Contenido
* [Información General](#información-general)
* [Instalación](#instalación)
* [Alta de Cuenta](#alta-de-cuenta)
* [Alta de Red Social](#alta-de-red-social)
* [Datos del usuario](#datos-del-usuario)

## Información General 

*Manejador de Contraseñas* es un programa desarrollado en electron para que puedas guardar tus contraseñas y encriptarlas de manera segura. Utiliza un formato de encriptación **Aes256**, y una llave maestra que es dada por el usuario. 

  ![](https://i.imgur.com/YrEz37G.png "Encriptación Aes256")

Permite dar de alta distintas redes sociales, y su contraseña que protege a la misma. La contraseña puede ser dada por el usuario o generada aleatoriamente. La contraseña generada respeta las pautas para tener una contraseña segura.

El fin del programa es mostrar de una manera organizada y fácil de leer las contraseñas y las contraseñas encriptadas de cada red social que hayas dado de alta.

## Instalación 

Para instalar el programa en tu computadora es necesario instalar **NodeJS** y **NPM**, que puedes bajarlos en el siguiente [vínculo](https://nodejs.org/en/). Una vez instalado, ejecuta los siguientes comandos en la terminal:
 ```
  npm install 
  npm start
```

## Alta de Cuenta 

Para dar de alta una cuenta maestra (cuenta que guardará todas las redes sociales del usuario), debes dar click en *Ingresar* y llenar todos los datos que pide la ventana. Si el programa registra tus datos correctamente debería mostrarte el siguiente mensaje: **Registro Correcto**.
El Botón de *AutoGenerar* crea una contraseña aleatoria que cumple con los requerimientos de seguridad.

  ![](https://i.imgur.com/JNkWSoE.png)

## Alta de Red Social

Si deseas dar de alta una red social debes ingresar a la ventana correspondiento. Para lograrlo, da click en el botón de *Alta Red Social* que se encuentra en la ventana de inicio. Llena los datos correspondientes y haz click en Alta Red Social. Si todos los datos fueron llenados correctamente el programa desplegará el siguiente mensaje: **Red Social Dada de Alta**. Si no logró dar de alta la red social mostrará un mensaje corresponiente.

  ![](https://i.imgur.com/RCSNW4h.png)

## Datos del Usuario

La ventana principal del programa funciona para ingresar tu correo y tu contraseña maestra para ingresar a una nueva ventana que muestra todas tus redes sociales guardadas y sus respectivas contraseñas. Si tu cuenta está guardada en la bases de datos podrás ingresar correctamente.

La ventana de datos mostrará cada red social y cada contraseña que tienes guardada. Esta misma te permite borrar redes sociales guardadas. Para hacerlo, debes ingresar el nombre de la red social **idénticamente** a como está guardada. Al borrarlo se actualizará la tabla automáticamente.

  ![](https://i.imgur.com/DKQmD7d.png)