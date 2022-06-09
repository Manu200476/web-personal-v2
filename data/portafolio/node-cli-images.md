---

title: Creando Nuestra Propia CLI Tool para Imagenes
name: Herramienta de CLI para Imagenes
metaDescription: En este segundo proyecto, vamos a crear una herramienta de línea de comando para optimizar las imagenes en bullk y que va a tardar cero coma en hacerlo
index: index
type: SEO y SRE
time: 20 minutos
stack: NodeJS y NPM
difficulty: Alta
follow: follow
slug: node-cli-images
featuredImage: /images/node-cli.png
publishDate: 12/01/2022
excerpt: En este segundo proyecto, vamos a crear una herramienta de línea de comando para optimizar las imagenes en bullk y que va a tardar cero coma en hacerlo

---

En este post vamos a crear una herramienta de línea de comando para optimizar las imagenes en bullk y que va atardar cero coma en hacerlo, solo vamos a usar Node y NPM
\
\
Antes de nada, os dejo **[aquí](https://github.com/Manu200476/imagemin)** el repo en Github y **[esta herramienta](https://www.npmjs.com/package/imagemin-cli)** por si no queréis programarla vosotros, aunque es un poco coñazo de configurar
\
\
A continuacion te dejo con unos posts relacionados que pueden interesarte y de referentes de los cuales yo he aprendido:
\
\
[Como crear una herramienta de linea de comando en NodeJS](https://tecnops.es/creando-nuestro-cli-command-line-interface-usando-nodejs/)
\
\
[Optimizar y Redimensionar imagenes con Node](https://ahmadawais.com/resize-optimize-images-javascript-node/)
\
\
[NodeJS](https://nodejs.org/es/docs/)
\
\
[NPM](https://www.npmjs.com/)
\
\
[Inquirer](https://www.npmjs.com/package/inquirer)
\
\
[Figlet](https://www.npmjs.com/package/figlet)
\
\
[Chalk](https://www.npmjs.com/package/chalk)
\
\
[Imagemin](https://www.npmjs.com/package/imagemin)
\
\
[Imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran)
\
\
[Imagemin-mozjpeg](https://www.npmjs.com/package/imagemin-mozjpeg)
\
\
Lo primero es tener instalado Node y NPM, para comprobarlo, lo unico que teneis que hacer es

    node --version
y

    npm --version

Si no os devuleve nada es que no lo tenéis instalda y por lo tanto tenéis que instalarlo, *[aqui](https://kinsta.com/es/blog/como-instalar-node-js/)* os dejo un tutorial de como instalarlo
\
\
Ahora que ya tenemos Node y NPM instalados, vamos a crear una carpeta donde vamos a guardar todo nuestro proyecto, y ejecutaremos el siguiente comando

    npm init -y

De esta manera ya tendríamos el proyecto iniciando con NPM, ahora si no queréis complicaros la vida, ir al github y copiar el package json, por ultimo ejecutar el siguiente comando

    npm install

Poco a poco vamos teniendo todo nuestro proyecto listo, ahora vamos a crear un archivo llamado main.js que es donde va a estar todo nuestro código, empezaremos por importar todas las dependencias

    import chalk from 'chalk';
    import figlet from 'figlet';
    import inquirer from 'inquirer';
    import imagemin from 'imagemin';  
    import imageminJpegtran from 'imagemin-jpegtran';
    import imageminMozjpeg from 'imagemin-mozjpeg';


Perfecto, ya tenemos el primer paso hecho, ahora vamos a crear la funcion para mostrar un mensaje en la consola al iniciar el programa

    const cliMessage = (message) => {
        console.log(chalk.bold.cyan(figlet.textSync(message, {
            font: 'ANSI Shadow',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })))
    }

Si quereis podeis cambiar el color del mensaje y en vez de Cyan pues que sea rojo, verde... al final del post os dejo con la documentación de todas las librerias
\
\
Ahora vamos a crear la función que "nos va a preguntar" que calidad queremos dejar a nuestras imagenes

    const queryParams = () => {
        const qs = [
            {
                name: 'quality',
                type: 'input',
                message: 'Selecciona la calidad de las imagenes de 0 a 100',
            },
        ]
        return inquirer.prompt(qs)
    };

Perfecto, ya solo nos falta crear la función para optimizar las imagenes y que nos deje la calidad que queramos, la cual es la siguiente

    const optimize = async (data) => {
        const filesPath = `images/*.{jpg, jpeg, png}`
        try {
            await imagemin([filesPath], {
                destination: './optimized',
                plugins: [
                    imageminJpegtran(),
                    imageminMozjpeg({
                        quality: parseInt(data.quality)
                    })
                ]
            })
            console.log(
                ` ------ OPTIMIZADAS CORRECTAMENTE ------\n 
                    Tu servidor te lo va a agradecer. 
                    ---------------------------------------\n `
            )
        } catch (e) {
            chalk.red.bold(`Ha habido un error al optimizar las imagenes: ${e}`)
        }
    }

Un detalle que se me había olvidado comentar, es que necesitamos crear un directorio " images " dentro del proyecto, donde vamos a guardar todas las imagenes que queremos optimizar
\
\
Guardamos, y ya estaría, lo unico que tenemos que hacer es guardar las imagenes que queremos optimizar en el directorio images y correr el siguiente comando

    node main.js

o

    npm run start

Así de fácil muchas gracias!!

