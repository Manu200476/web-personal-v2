---

title: Tutorial de Git de 0 a 100 - Parte 1
metaDescription: En este tutorial aprenderemos a usar Git de manera sencilla y rápida para que puedas usarlo en tus proyectos y que te puedas manejar en entornos donde se usa Git.
excerpt: En este tutorial aprenderemos a usar Git de manera sencilla y rápida para que puedas usarlo en tus proyectos y que te puedas manejar en entornos donde se usa Git.
index: index
follow: follow
slug: tutorial-de-git-de-0-a-100-parte-1
featuredImage: /public/images/favicon.png
readingTime: 15min
publishDate: 02/02/2022

---

Bienvenido a un nuevo post, hoy te voy a hablar sobre Git y vamos a ir de 0 a 100, esto va a ser una serie de 2-3 posts donde te voy a intentar explicar todo lo que necesitas saber sobre Git
\
\
Vamos a ir poco a poco y voy a empezar explicándote que es Git y que es lo que hace, si te gusta este post no olvídes compartirlo, sin más dilación vamos a ello !!  

## ¿Que es Git?

Git es un sistema de control de versiones, es decir, con Git vamos a poder controlar las distintas versiones de un mismo codigo.  
\
\
No te preocupes si no has entendido esto, te lo voy a intentar explicar de una manera mucho más sencilla y rápida de entenderlo.  
\
\
Imagínate que nosotros tenemos un trozo de código que hace x funcion, pero necesitamos controlar los cambios que se vayan haciendo y además, necesitamos añadirle una funcionalidad, pero obviamente no queremos que afecte a nuestro código hasta que no este terminada
\
\
Aquí es donde entra Git, vamos a poder tener distintas versiones de un código, independientes entre ellas y cuando queramos las podemos mezclar y comparar entre ellas, esto es lo que hace especial a las tecnología de Git

## ¿Para que se usa Git?

Como vengo explicando, Git tiene distintos usos pero el más generalizado y para el que fue creado fue para gestionar las distintas versiones de un código
\
\
También nos va a ayudar a la hora de trabajar con más personas y que cada uno vaya desarrollando paralelamente y de forma asíncrona

## ¿Como instalar Git?

Para instalar Git, puedes hacerlo desde aqui: [Descargar Git](https://git-scm.com/downloads)

## ¿Como Funciona Git?

Ahora que ya tienes instalado Git y mas o menos sabes lo que es y para que se usa, te voy a dejar con un par o tres de recursos por si quieres indagar en cuanto al funcionamiento de Git
\
\
Para comenzar te dejo con un vídeo de Antonio Sarosi, donde explica de una manera muy sencilla el funcionamiento de Git en profundidad, os recomiendo seguirle ya que sube cosas muy interesante a Youtube, os dejo [aquí su twitter](https://twitter.com/antoniosarosi)

<iframe width="750" height="450" class="my-4" src="https://www.youtube.com/embed/LjwR--_ZUt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

También os dejo por aquí un enlace a un libro de los creadores de Git donde explican todo su funcionamiento en profundidad (es gratis)
\
\
[Pro Git Book](https://git-scm.com/book/es/v2)

## Conceptos Basicos de Git

Ahora que ya sabemos un poco más sobre que es Giy y para que lo vamos a poder usar en nuestro día a día, voy a explicarte distos conceptos un poco mas avanzados de Git

### ¿Que es un repositorio?

Una manera muy sencilla de entender los repositorios, es entenderlo como cajas donde vamos a guardar nuestro código, es una forma muy simple y fácil de manejar nuestro codigo
\
\
Dentro de esta "caja" podemos tener distintas versiones de un mismo código, podemos tener a varias personas trabajando al mismo tiempo...

### ¿Que son las ramas?

Pero claro yo antes te he comentado que con Git íbamos a gestionar las distintas verisones de un mismo código, para esto se creaon las ramas
\
\
Imagínate que tenemos nuestro código en nuestro repositorio en la rama main, la cual es por defecto 
\
\
Pero queremos desarrollar x funcionalidad sin que afecte a nuestro "código principal" por lo que creamos una rama nueva llamada "develop" por ejemplo, en proximos tutoriales veremos como crear estas ramas
\
\
Ahora en vez de operar con la rama main, la cual supuestamente es la que esta en producción y los riesgos que eso conlleva, vamos a trabajar con una rama que es una copia de la rama main, pero que no es la que esta en producción y aquí vamos a desarrollar nuestra nueva funcionalidad
\
\
Pero claro ahora tenemos una rama main, la cual es la que se usa y una rama develop con la nueva funcionalidad, lo que vamos a hacer es combinar la rama develop y la main
\
\
Ahora hemos fusionado nuestro codigo y ya podemos usar la nueva funcionalidad en la rama main

### ¿Que es un commit?

Otro concepto importante que tienes que aprender son los commit, Git a parte de ayudarnos a controlar las versiones de un mismo código nos va a ayudar a guardar un historico del mismo
\
\
Esto lo vamos a hacer a traves de los commit, segun vayamos haciendo cambios en nuestro codigo vamos a ir creando commits y "guardando" nuestro poryecto
\
\
A los commit también les podemos añadir un comentario, esto eso es opcional pero muy recomendable, de esta manera vamos a poder documentar nuestros cambios
\
\
Los commits contienen mucha más información, pero bueno esto es lo basico de Git
\
\
En los siguientes posts te voy a hablar de como crear nuestro primer repositorio, subir el código o como mergear dos ramas y todo esto con la línea de comando git