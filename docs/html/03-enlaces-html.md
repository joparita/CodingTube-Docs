---
sidebar_position: 3
---

# 🔗 Enlaces en HTML

Los enlaces en HTML son una de las partes más importantes de una página web, ya que nos permiten navegar entre diferentes páginas web. En HTML, los enlaces se crean con la etiqueta `a` y el atributo `href` para indicar la dirección a la que queremos que nos lleve el enlace.

## Creando un enlace

Por ejemplo, si queremos crear un enlace a la página de Google, podemos hacer lo siguiente:

```html
<a href="https://www.google.com">Ir a Google</a>
```

En este caso, el contenido de la etiqueta `a` es "Ir a Google", y el atributo `href` indica que al hacer clic en el enlace nos llevará a la dirección `https://www.google.com`.

## Enlaces relativos

También podemos crear enlaces relativos, es decir, enlaces que nos lleven a una página dentro de nuestro propio sitio web. Por ejemplo, si queremos crear un enlace a la página de inicio de nuestro sitio web, podemos hacer lo siguiente:

```html
<a href="about.html">Ir a la página de Acerca de</a>
```

En este caso, el atributo `href` indica que al hacer clic en el enlace nos llevará a la página `about.html` que está en el mismo directorio que la página actual.

## Enlaces a secciones de la misma página

También podemos crear enlaces a secciones de la misma página. Para hacer esto, debemos usar el atributo `href` con el valor `#` seguido del `id` de la sección a la que queremos ir. Por ejemplo, si queremos crear un enlace que nos lleve a una sección con el `id` "seccion1", podemos hacer lo siguiente:

```html

<a href="#seccion1">Ir a la sección 1</a>
```

En este caso, al hacer clic en el enlace nos llevará a la sección con el `id` "seccion1" de la misma página.

## Atributo `target`

El atributo `target` nos permite indicar en qué ventana queremos que se abra el enlace. Por ejemplo, si queremos que el enlace se abra en una nueva ventana, podemos hacer lo siguiente:

```html
<a href="https://www.google.com" target="_blank">Ir a Google</a>
```

En este caso, al hacer clic en el enlace se abrirá la página de Google en una nueva ventana.

## Explicación en video

<iframe width="100%" height="444" src="https://www.youtube.com/embed/uphhHrkRLQA?si=Tdzg8x6U3VHM2guU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>