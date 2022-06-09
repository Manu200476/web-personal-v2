---

title: Imagen de Docker para Levantar SF en Minutos
name: Imagen de Docker para SF
metaDescription: En este nuevo proyecto que he creado, vas a poder levantar un crawl de screaming frog en poco menos de 5 minutos en un nuevo servidor o VPS 
index: index
type: SEO y SRE
time: 5 minutos
stack: Docker y Screaming Frog
difficulty: Media Alta
follow: follow
slug: docker-image-sf
featuredImage: /images/docker.png
publishDate: 03/10/2021
excerpt: Bienvenido al primer proyecto que voy a presentar en mi web, me quedan muchos por subir que ya estan hechos, pero este ha sido algo especial porque se me ocurrio hace una semana, lo desarrolle y aqui estamos

---

Bienvenido al primer proyecto que voy a presentar en mi web, me quedan muchos por subir que ya están hechos, pero este ha sido algo especial porque se me ocurrio hace una semana, lo desarrollé y aquí estamos
\
\
La idea de esta Imagen de Docker es ahorrar tiempo a la gente que necesite configurar Screaming Frog en un servidor, por la dimension del proyecto y que no tenga que estar 1 hora configurando cosas para arriba y para abajo
\
\
Con esta iamgen y dos comandos lo vas a tener corriendo en menos de 5 minutos, acompáñame a lo largo de esta pequeña explicacion y lo verás
\
\
Pero antes de nada quiero hacer un lista con 4-5 perosnas de las que puedes aprender sobre SF y Docker que son las tecnologías que usamos aquá
\
\
Esta es una cosa que quiero hacer en todo mis proyectos y posts, mencionar a 4-5 personas de las que yo mismo he aprendido mucho
\
\
[MjChacon y Laika Team para SF](https://laikateam.com/blog/configurar-screaming-frog/)
\
\
[Pelado Nerd, muy buen contenido sobre DevOps](https://www.youtube.com/c/PeladoNerd)
\
\
[Gustavo Arellano, gran contenido sobre backend](https://twitter.com/arellano_gus)

## Lo que vas a necesitar

    Un maquina / servidor con Ubuntu instalado
    Tener Instalado Git, Docker y un editor de texto como Nano o VIM

Te dejo por aqui el [repositorio de Github](https://github.com/Manu200476/docker-image-sf.git) con el proyecto

## Clonar Repositorio de GitHub

Ahora que ya tenemos todo instalado vamos a clonar el repositorio, no he podido dejarlo en Dockerhub ya que no he encontrado la manera de programar la imagen para que cada uno pueda configurar su propia licencia
\
\
Si aguien sabe como hacerlo, que lanze PR al proyecto o que me lo diga por Twitter, por el momento vamos a clonar el repo

    cd /home
    git clone https://github.com/Manu200476/docker-image-sf.git && cd ./docker-image-sf

## Configuracion del Proyecto

Una vez clonado el repo, vas a encontrarte varios archivos, no te asustes solo vas a tener que configurar un par de cosas
\
\
Por partes, tenemos un archivo llamado spider.config donde vas a poder poner tu Api Key de Ahref, MOZ, Majestic... de esta manera vas a poder usar estas herramientas a la hora de correr tu crawl con SF
\
\
Para editar el archivo, ejecutaríamos el siguiente comando si tenemos Nano instalado
    
    sudo nano spider.config

A la hora de configurar el spider.config hay muchas más opciones pero el que te te he dejado es el básico, y si necesitas más pues todos es darle un par de vueltas
\
\
Después tenemos otro archivo llamado .screamingfrogseospider, aquí vamos a configurar la RAM que va a tener disponible SF, hariamos lo mismo

    sudo nano .screamingfrogseospider

Te dejo por [aquí](https://www.it-swarm-es.com/es/java/que-son-los-parametros-xms-y-xmx-al-iniciar-jvm/1071515239/) una guía para poner la RAM que necesites y en el formato específico que la debes poner
\
\
Por último tenemos que crear un archivo llamado license.txt, aquí vamos a configurar nuestra licencia para tener todas las opciones de SF disponibles, entónces lo que haríamos sería 

    sudo nano license.txt

En la primera línea pondríamos nuestro username de SF y en la segunda la clave de la licencia, guardamos y ya estaría

## Construimos la Imagen

Una vez ya esta todo configurado, tenemos que hacer el build de la imagen, dentro del mismo directorio ejecutaríamos

    docker build -t ejemplo-01 .

## Creamos un Volumen

En Docker si no creamos un volumen, la informacion al correr un contenedor va a desaparecer, por lo que vamos a crear uno

    docker volume create mi_volumen

## Ya podemos crawlear

Ahora ya lo que nos queda es correr nuestro primer crawl

    docker run -d -it --name screaming-frog -v mi_volumen:/home/crawls ejemplo-01 --crawl nike.com --headless

Screaming Frog en su version CLI tiene un monton de opciones, aqui te dejo la [documentación oficial](https://www.screamingfrog.co.uk/seo-spider/user-guide/general/#command-line) para que puedas ampliar información
\
\
Muchas gracias!!!

