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

![Sprite](./editor-imagenes-game-maker-studio-2.png)

Si te quieres dedicar al desarrollo de videojuegos con javascript, es esencial que aprendas a utilizar la etiqueta `canvas` en html. Y no solo eso, si no que aprendas a dibujar un sprites `canvas`.

<!--truncate-->

En este tutorial te enseñaré paso a paso cómo dibujar un sprite en canvas.

El sprite que vamos a dibujar es el siguiente:

![Sprite](./megaman.jpg)

:::info[Nota]
Seguramente pensarás que lo puedes hacer con la etiqueta `img` como una imagen, y en teoría lo puedes hacer. Pero lo que queremos hacer a futuro es animar el sprite y para eso necesitamos agregarle cierta lógica, y para esto nos viene mucho mejor la etiqueta canvas.
:::

## 1. Crear un canvas en HTML

Lo primero que vas a hacer es insertar una etiqueta canvas dentro de tu archivo html, de la siguiente forma:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
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
