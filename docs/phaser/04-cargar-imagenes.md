---
sidebar_position: 4
---

# 🖼️ Cargar imágenes en Phaser

La carga de imágenes la hacemos dentro de la función `preload`. Para esto utilizamos el método `load.image` de la escena (identificada con la palabra reservada `this`).

```js
function preload() {
  this.load.image("logo", "assets/logo.png");
}
```

El método `load.image` recibe dos parámetros:

- `key` el nombre de la imagen que le queremos asignar.
- `url` la ruta de la imagen.

Luego para dibujar esta imagen dentro de nuestro juego haremos referencia a esta imagen en el método `add.image` dentro del método `create`:

```js
function create() {
  this.add.image(400, 300, "logo");
}
```

Dentro del método `add.image` hay que especificar tres valores:

- `x` posición en el eje `x` de la imagen,
- `y` la ubicación en el eje `y` de la imagen,
- `key` el nombre de la imagen (la misma que tenemos en el `preload`).
