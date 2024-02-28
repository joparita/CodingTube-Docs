---
sidebar_position: 2
---

# 🏷️ Etiquetas HTML

Las etiquetas en HTML, son la forma en la que podemos estructurar el contenido de nuestra página web. Es decir, si queremos especificar que cierto contenido es un título, tenemos una etiqueta para ello que se llama `h1` y su escritura es de la siguiente manera:

```html
<h1>Bienvenidos a mi página web</h1>
```

Con esto indicamos al navegador que el título de nuestra página es la frase `Bienvenidos a mi página web`.

## Estructura base en HTML

Existen muchas etiquetas en HTML, que las iremos conociendo en los siguientes apartados, pero existe una estructura base, es decir ciertas etiquetas HTML que deben existir si o si en nuestra página web y son las siguientes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

:::note[Nota]

Para generar la estructura anterior en un documento HTML, existen dos shortcut en Visual Studio Code que te lo autocompletan: el signo de cierre de admiración: `!` o `html:5`. Si escribes cualquiera de estos dos comandos en un documento HTML vacío, se te va a autocompletar la estrucutra anterior.

:::

En la estructura anterior, existen las siguientes etiquetas:

- `<!DOCTYPE html>`: Indica al navegador que el documento es de tipo HTML5.
- `<html lang="en">`: Indica al navegador que el idioma del documento es inglés.
- `<head>`: Contiene información sobre el documento, como metadatos, enlaces a estilos, scripts, etc.
- `<meta charset="UTF-8">`: Indica al navegador que el documento está codificado en UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Indica al navegador que el ancho del documento es igual al ancho del dispositivo y que el zoom inicial es de 1.
- `<title>Document</title>`: Indica al navegador el título del documento.
- `<body>`: Contiene todo el contenido visible de la página web.

## Etiquetas de apertura y cierre

Las etiquetas en HTML pueden ser de dos tipos: de apertura y cierre o auto-cierre. 

### Etiquetas de apertura y cierre

Las etiquetas de apertura y cierre son aquellas que tienen un inicio y un fin, es decir, tienen una etiqueta de apertura y una etiqueta de cierre. Por ejemplo, la etiqueta `h1` es una etiqueta de apertura y cierre, ya que se abre con `<h1>` y se cierra con `</h1>`. Las etiquetas de apertura y cierre se utilizan para envolver contenido, es decir, para indicar que cierto contenido es de cierto tipo.

### Etiquetas auto-cierre

Las etiquetas auto-cierre son aquellas que no tienen un inicio y un fin, es decir, solo tienen una etiqueta de apertura. Por ejemplo, la etiqueta `img` es una etiqueta auto-cierre, ya que se abre con `<img>` y no se cierra. Las etiquetas auto-cierre se utilizan para insertar contenido en la página web, como imágenes, videos, audios, etc.

## Etiquetas HTML más comunes

A continuación, se presentan las etiquetas HTML más comunes:

- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Indican al navegador que el contenido es un título.
- `<p>`: Indica al navegador que el contenido es un párrafo.
- `<a href="#">`: Indica al navegador que el contenido es un enlace.
- `<img src="#" alt="">`: Indica al navegador que el contenido es una imagen.
- `<ul>`, `<ol>`, `<li>`: Indican al navegador que el contenido es una lista.
- `<table>`, `<tr>`, `<td>`, `<th>`: Indican al navegador que el contenido es una tabla.
- `<form>`, `<input>`, `<button>`, `<select>`, `<option>`, `<textarea>`: Indican al navegador que el contenido es un formulario.

Todas estas etiquetas se irán viendo en detalle en los siguientes apartados.

## Etiquetas semánticas

Las etiquetas semánticas son aquellas que tienen un significado, es decir, que indican al navegador el tipo de contenido que contienen. Por ejemplo, la etiqueta `h1` indica al navegador que el contenido es un título, la etiqueta `p` indica al navegador que el contenido es un párrafo, etc. Las etiquetas semánticas son importantes para el SEO, ya que indican al navegador el tipo de contenido que contienen, y para la accesibilidad, ya que indican al navegador el tipo de contenido que contienen.

Las etiquetas semánticas más comunes son las siguientes:

- `<header>`: Indica al navegador que el contenido es la cabecera de la página web.
- `<nav>`: Indica al navegador que el contenido es la barra de navegación de la página web.
- `<main>`: Indica al navegador que el contenido es el contenido principal de la página web.
- `<section>`: Indica al navegador que el contenido es una sección de la página web.
- `<article>`: Indica al navegador que el contenido es un artículo de la página web.
- `<aside>`: Indica al navegador que el contenido es una barra lateral de la página web.
- `<footer>`: Indica al navegador que el contenido es el pie de página de la página web.

Con estas etiquetas semánticas podemos armar la estructura general de nuestra página web y dentro de estas etiquetas de estructura podemos usar las de contenido, como por ejemplo el encabezado de nuestra página la podríamos armar de la siguiente forma:

```html
<header>
  <h1>Bienvenidos a mi página web</h1>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
```

En este caso, el contenido de la etiqueta `header` es la cabecera de la página web, que contiene un título y una barra de navegación.

## La etiqueta div

La etiqueta `div` es una etiqueta genérica que se utiliza para agrupar contenido. Es decir, si queremos agrupar cierto contenido, podemos envolverlo con la etiqueta `div`. Por ejemplo, si queremos agrupar un título y un párrafo, podemos hacer lo siguiente:

```html
<div>
  <h1>Bienvenidos a mi página web</h1>
  <p>Esta es una página web de ejemplo</p>
</div>
```

En este caso, el contenido de la etiqueta `div` es un título y un párrafo, que están agrupados. Esto nos ayuda a organizar el contenido de nuestra página web y a darle estructura en caso de que no exista una etiqueta semántica que nos ayude a hacerlo.

## Explicación en video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/GucaPbn9Cf8?si=F6LqPPNSVLGJFfRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>