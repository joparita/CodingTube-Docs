---
sidebar_position: 7
---

# 🎞️ Cómo crear animaciones

Para crear la animación de un sprite, es necesario cargarlo primero. Si no sabes cómo cargar un sprite, te dejo una guía [aquí](https://codingtube.dev/docs/phaser/cargar-sprites).

Una vez que tienes el sprite cargado, Phaser ofrece el método `anims.create` para crear la animación.

Imagina que tienes el siguiente sprite:

![sprite](./img/idle64x64.png)

La animación de este sprite, no es más que recorrer frame por frame para conseguir el efecto de movimiento.

Esto lo haces en la función `create` de la siguiente forma:

```js
function create() {
  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1
  })  
}
```

Donde:

- `key` es el nombre de la animación que deseas asignarle.
- `frames` son los frames que tendrá la animación. Mira la nota del final para saber más detalles.
- `frameRate` es la velocidad de la animación (frames por segundo).
- `repeat` Aquí puedes especificar cuantas veces deseas que se repita la animación. Si el valor es -1, la animación se repite infinitamente.

Ahora, dentro de la misma función `create` puedes usar la animación de la siguiente forma:

```js
function create() {
  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 7 }),
    frameRate: 10,
    repeat: -1
  })

  // ... resto de código
  this.player = this.add.sprite(400, 300, 'player');
  this.player.anims.play("walk", true);
}
```

El resultado es el siguiente:

![animacion](./img/animated_character128x128.gif)

:::note[Nota]
En la propiedad `frames`, el método `anims.generateFrameNumbers` está generando un arreglo de objetos que tiene las propiedades `key` y `frame`. Donde `key` es el nombre del sprite. Aunque también se pudo haber especificado de la siguiente manera:

```js
  this.anims.create({
    key: "walk",
    frames: [
      { key: "player", frame: 0 },
      { key: "player", frame: 1 },
      { key: "player", frame: 2 }
      // ...
    ],
    frameRate: 10,
    repeat: -1
  })
```

Pero como puedes ver, si el sprite tienes muchos frames sería muy tedioso estar especificando cada uno de los frames. Sin embargo esta forma de especificar los frames ayuda mucho cuando solamente tienes uno o pocos frames.
:::