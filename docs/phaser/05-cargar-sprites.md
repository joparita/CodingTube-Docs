---
sidebar_position: 5
---

# 🤺Cargar sprites en phaser

Un sprite es una secuencia de imágenes que sirven para formar la animación de un objeto de tu juego. Por ejemplo este:

![sprite](./img/idle64x64.png)

Cargar estos sprites es ligeramente diferente a cómo se [carga una imagen en Phaser](https://codingtube.dev/docs/phaser/cargar-imagenes). Pero igual es muy sencillo. 

## Cargar el `sprite` en el `preload`

Empieza cargando el sprite en la función `preload`:

```js
function preload() {
  this.load.spritesheet(
    "player", 
    "/assets/player-sprite.png", 
    {
      frameWidth: 16,
      frameHeight: 18,
    }
  );
}
```

El método `load.spritesheet` recibe tres parámetros:

- `key` el nombre del sprite que le queremos asignar.
- `url` la ruta del sprite.
- Un objeto con dos propiedades:
  - `frameWidth` el ancho en pixeles del frame del sprite.
  - `frameHeight` la altura en pixeles del frame del sprite.

:::note[Nota]
El frame del sprite es cada uno de las imágenes que componente el sprite.
![frame](./img/frame.png)
:::

## Agregar el `sprite` en el `create`

Una vez que el sprite está precargado, podemos agregarlo en la función `create`:

```js
function create() {
  this.player = this.add.sprite(400, 300, "player");
}
```

En el código anterior se está agregando el sprite identificado con el nombre "player" a la escena en la posición 400, 300.