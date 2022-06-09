---
title: Experimento sobre PyScript y cómo Google lo renderiza
name: Experimento sobre PyScript y Google
metaDescription: En este tercer proyecto, voy a mostrar los resultados de un experimento sobre PyScript y Google, para ver como Google lo renderiza y que problemas podemos tener
index: index
type: SEO
time: 15 minutos
stack: PyScript y HTML
difficulty: Alta
follow: follow
slug: pyscript-experiment
featuredImage: /images/pyscript-image.png
publishDate: 09/06/2022
excerpt: En este tercer proyecto, voy a mostrar los resultados de un experimento sobre PyScript y Google, para ver como Google lo renderiza y que problemas podemos tener

---

Bueno, tras 2 semanas de espera, hoy vengo con los resultados de un experimento que he hecho con PyScript y Google, la idea es ver cómo Google lo renderiza y que problemas podemos tener.

## Pero, ¿qué es pyscript?

Si no sabes lo que es PyScript, por aquí te dejo el tweet donde lo compartí, se me olvido citar a [Charlie](https://twitter.com/charliesbot), que gracias a él lo descubrí, sorry 🙏
\
\
[Tweet](https://twitter.com/Manu_200476/status/1520685617495121920)
\
\
En el tweet que he dejado arriba explico por encima cómo funciona, en resumen:
\
\
👉 Podemos programar código Python pero después usa tanto WebAssembly como JavaScript para "pintarlo" (explicado muyy brevemente)
\
\
No me voy a meter mucho sobre como funciona, porque tendría que hacer otro hilo, pero quedaros con la idea de que al final para pintar lo que programamos en Python tira de JS y WebAssembly
\
\
Aquí ya vamos viendo un problema bastante gordo, y sobre el que se ha investigado mucho, si queréis saber más sobre JS , Google y su amor platónico, podéis seguir a gente como [Lino Uruñuela](https://twitter.com/Errioxa) ó [Niña del Sur](https://twitter.com/ninadelsur_seo)

## Hipótesis y cómo se ha hecho el experimento

Entonces la hipótesis que sacamos de aquí es básicamente que Google no va a renderizar PyScript bien, y nos va a dar muchos dolores de cabeza
\
\
Spoiler: Es mucho peor 😅
\
\
Para hacer este experimento he usado un dominio nuevo y limpio:
\
\
[https://experimentoseo.es](https://experimentoseo.es)
\
\
Y el código que he usado es:
\
\
[https://github.com/Manu200476/pyscript-experiment](https://github.com/Manu200476/pyscript-experiment)
\
\
La propiedad de GSC la creé el 22 de Mayo y el Martes 24 ya estaban indexadas 3 de 4 URLs
\
\
La idea es esta:
\
\
👉 Una landing, [https://experimentoseo.es/prueba-1.html](https://experimentoseo.es/prueba-1.html), dónde veremos como funciona con Panda y Numpy, generando un dataframe aleatorio
\
\
👉 Otra landing, [https://experimentoseo.es/prueba-2.html](https://experimentoseo.es/prueba-2.html), dónde usamos el paquete Requests
\
\
Da error, lo sé, no se puede usar Requests, pero salta un error y quería ver que pasaba
\
\
👉 Una tercera landing, [https://experimentoseo.es/prueba-3.html](https://experimentoseo.es/prueba-3.html), donde usamos Datetime y metemos contenido dentro de Divs, similar a el innerHtml de JS
\
\
Vale una vez explicado todo esto, vamos con los resultados que es lo importante

## Resultados del experimento

Lo primero si desactivamos JS del navegador, se renderiza el código propio de Python y no el texto, si no haz la prueba tú mismo
\
\
Todavía no hemos entrado a ver que ha hecho Google, si la pasamos por la herramienta de Mobile Friendly de Google, renderiza el propio código de Python
\
\
Pero..... si usamos Pagespeed, pues se queda cargando por los tiempos de los tiempos, de esto tiene un hilo muy interesante [Carlos Ortega](https://twitter.com/carlos_darko)
\
\
[Hilo de Carlos Ortega](https://twitter.com/carlos_darko/status/1531959455176437761)
\
\
Vale, pasamos a ver que ha ocurrido en verdad, si ejecutamos:
\
\
site:https://experimentoseo.es
\
\
Vemos que todas las metas que muestra Google son código Python, ahora vamos a probar a ver el cache, haciendo
\
\
cache:https://experimentoseo.es/prueba-2.html
\
\
Podéis hacerlo con cualquier otra URL, imaginad que pasa....

## Reflexiones finales

Lo primero, es que Google renderiza el código de Python, lo que es un problema ya no solo de SEO, si no de seguridad. Ahora en vez de posicionar keywords vamos a posicionar bucles, condicionales....😂😂
\
\
Y lo segundo, es que ahora mismo no es un problema muy grande ya que PyScript acaba de salir y pues hay muy pocas webs hechas de esta forma pero seguramente ocurra como paso con React, que dentro de 4-5 años si no antes, salgan nuevos frameworks, librerías..
\
\
Espero que guste, porque lleva su curro, sé que se puede hacer mejor, mirando logs... intentaré hacerlo de esta manera pero quería sacarlo un poco antes y que voy pegado de tiempo, para compartirlo con la comunidad
\
\
Además CREO que es el primer experimento que se hace con PyScript y Google tanto en habla hispana como en habla inglesa, nunca suelo pedirlo, pero si podéis compartir esto
\
\
Espero que haya gustado y que os sea útil!!!