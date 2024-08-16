---
sidebar_position: 1
---

# 🆕 Cómo crear un nuevo proyecto

Puedes crear un nuevo proyecto con cualquiera de las siguientes opciones:

## Linea de comando

Phaser nos ofrece varias opciones para crear un nuevo proyecto a través de la línea de comando:

```js
npm create @phaserjs/game@latest
```

```js
npx @phaserjs/create-game@latest
```

```js
yarn create @phaserjs/game
```

```js
pnpm create @phaserjs/game@latest
```

```js
bun create @phaserjs/game@latest
```

Cualquiera de estos comandos crearán un nuevo proyecto a través de una serie de pasos donde podrás seleccionar el framework de tu preferencia así como la posibilidad de crear un proyecto desde cero o desde una plantilla.

## CDN - Red de distribución de contenido

Phaser está disponible a través de los siguientes CDNs (Content Delivery Network) :

```txt
//  No minificado:
https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/phaser.js
https://cdn.jsdelivr.net/npm/phaser@v3.80.1/dist/phaser.js

//  Minificado:
https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/phaser.min.js
https://cdn.jsdelivr.net/npm/phaser@v3.80.1/dist/phaser.min.js

```

## Descarga el proyecto

También puedes descargar el proyecto con el código completo, minificado o en formato zip desde [aquí](https://phaser.io/download/stable)

Recuerda que una vez que hayas descargado el proyecto, es necesario llamarlo desde tu archivo html. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example</title>
</head>
<body>
  <div id="game"></div>
  <script src="./phaser.min.js"></script>
  <script type="module" src="./main.js"></script>
</body>
</html>
```