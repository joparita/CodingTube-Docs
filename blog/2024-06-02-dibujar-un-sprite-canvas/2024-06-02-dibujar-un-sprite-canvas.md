---
slug: dibujar-un-sprite-canvas
title: ¿Cómo dibujar un sprite en canvas?
authors:
  name: David Ruiz
  title: Frontend Developer
  url: https://github.com/Davichobits
  image_url: https://github.com/Davichobits.png
tags: [gamedev]
---

Si te quieres dedicar al desarrollo de videojuegos con javascript, es esencial que aprendas a utilizar la etiqueta `canvas` en html. La etiqueta `canvas` permite el renderizado de imágenes en el navegador, pero a diferencia de la etiqueta `img` que también permite hacer lo mismo, la etiqueta`canvas` te permite hacer animaciones como la siguiente:

![Sprite](./animated_character128x128.gif)

<!--truncate-->

En este tutorial te enseñaré paso a paso cómo dibujar en la etiqueta `canvas` un personaje a partir de un `sprite` (conjunto de imágenes que representan un personaje u objeto). En resultado final será la siguiente imagen:

![Sprite](./character128x128.png)

El sprite que vamos a dibujar es el siguiente:

![Sprite](./idle64x64.png)

Este sprite lo podrás descargar desde [aquí](https://www.google.com/)

:::info[Nota]
Seguramente pensarás que lo puedes hacer con la etiqueta `img` como una imagen, y en teoría lo puedes hacer. Pero lo que queremos hacer a futuro es animar el sprite y para eso necesitamos agregarle cierta lógica, y para esto nos viene mucho mejor la etiqueta canvas.
:::

## Estructura del proyecto

## 1. Crear un canvas en HTML

Lo primero que vas a hacer es insertar una etiqueta canvas dentro de tu archivo html, de la siguiente forma:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      #canvas {
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        border: 1px dashed black;
      }
    </style>
    <title>Drawing Images</title>
  </head>
  <body>
    <h1>Drawing Images</h1>
    <canvas id="canvas"></canvas>
    <script src="./main.js"></script>
  </body>
</html>
```

En el código anterior, tenemos un código html básico con la etiqueta `canvas` insertada. Ten en cuenta que la etiqueta `canvas` es una etiqueta de apertura y cierre. No es necesario que lleve ningún contenido entre las etiquetas de apertura y cierre. El `id` que tiene es opcional y te servirá para poder seleccionar el elemento canvas en el futuro.

## 2. Estilos

Al tener pocos estilos los vamos a hacer sobre la etiqueta `style`, la misma que estará dentro del head:

```html
<style>
  #canvas {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    border: 1px dashed black;
  }
</style>
```

## 3. Lógica en JavaScript

Cuando estés desarrollando un videojuego, la mayor parte del código estará en JavaScript. Para el presente tutorial donde solamente dibujaremos una imagen el código será relativamente pequeño, pero esto puede ir aumentando conforme vayamos ampliando más elementos.

### 3.1 Seleccionar el `canvas`

Para seleccionar el `canvas` vamos a utilizar el método `getElementById` y lo guardarás en una constante. En este ejemplo le pondremos `canvas`

```js
const canvas = document.getElementById("canvas");
```

### 3.1 Extraer el contexto.

El contexto de canvas permite especificar con que tipo de gráficos vamos a trabajar. Hay varios contextos disponibles:

- `2d` para trabajar con gráficos 2D
- `webgl` para trabajar con gráficos 3D

Como vamos a trabajar con gráficos 2D, vamos a utilizar el contexto `2d` y lo guardaremos en una constante que generalmente lleva el nombre de `ctx`.

```js
const ctx = canvas.getContext("2d");
```

### 3.2 Cargar la imagen

La imagen que debemos cargar es la de nuestro `asset` para que a partir de ella extraer el frame que nos interesa. Recuerda, el asset que utilizaremos será el siguiente:

![Sprite](./character128x128.png)

Para esto vamos a utilizar el metodo `Image` y lo guardaremos en una constante que generalmente lleva el nombre de `player`. Para agregar la imagen a nuestro elemento `player` recién creado usaremos el método `src` y le pasaremos el `path` de la imagen.

```js
const player = new Image();
player.src = "./assets/idle.png";
```

:::info[Nota]
También pudimos haber cargado la imagen del `asset` dentro del html con la etiqueta `img`. Solamente recuerda agregar un `id` para poderlo seleccionar después desde Javascript.

```html
<img id="player" src="./assets/idle.png" alt="" />
```

:::

### 3.3 Extraer el frame específico

Para extraer un frame en específico de un `asset` vamos a utilizar el metodo `drawImage` perteciente al contexto.

```js
player.onload = () => {
  // ctx.drawImage(player, 0, 0)
  ctx.drawImage(
    player, // sprite sheet image
    0, // frame X position
    0, // frame Y position
    80, // frame width
    64, // frame height
    0, // destination X position
    0, // destination Y position
    80, // destination frame width
    64 // destination frame height
  );
};
```

:::info[Nota]
En la [documentación](https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage) de MDN encontrás más información de cómo utilizar este método
:::
