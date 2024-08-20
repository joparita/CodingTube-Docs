---
sidebar_position: 9
---

# 🗺️ Diseño de mapas con Tiled y Phaser

```js
function preload() {

  this.load.image("tileset1Image", "./assets/tileset.png");
  this.load.tilemapTiledJSON("level1Json", "./level1.json");

}
```

* `this.load.image` recibe dos parámetros: 
  - `key` con el nombre que se le va a asignar a la imagen del tileset.
  - `url` dirección de la imagen.

* `this.load.tilemapTiledJSON` recibe dos parámetros:
  - `key` con el nombre que se le va a asignar a la archivo JSON.
  - `url` dirección del archivo JSON.

```js
function create() {

  const level1Tilemap = this.make.tilemap({ key: "level1Json" });
  const tileset = level1Tilemap.addTilesetImage("Tileset1", "tileset1Image"); // nombre del tileset en Tiled, el nombre de la imagen importada como this.load.image

  const platformLayer = level1Tilemap.createLayer('platform', tileset, 0, 0);

}
```

* Dentro de `this.make.tilemap` hay que pasar un objeto con la propiedad `key` cuyo valor es igual a la imagen del tileset.