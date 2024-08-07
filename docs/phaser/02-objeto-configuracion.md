---
sidebar_position: 2
---

# 🎛️ Objeto de configuración

Antes de empezar a crear tu videojuego en Phaser, es necesario crear la configuración del mismo. Esto lo haces estableciendo un objeto con las siguientes propiedades:

```js
const config = {
  type: AUTO,
  width: 800,
  height: 600,
  roundPixels: true,
  pixelArt: true,
  backgroundColor: "#000",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};
```

En el objeto anterior, se está especificando lo siguiente:

- `type` Tipo de renderizado. Puede tener tres valores: `CANVAS`, `WEBGL` o `AUTO`. Si lo dejas como `AUTO`, Phaser intentará detectar automáticamente el mejor tipo de renderizado disponible en el navegador del usuario. Si el navegador admite WebGL, Phaser utilizará WebGL. Si no, utilizará Canvas.
- `width` el ancho del canvas donde se dibujará el juego.
- `height` el alto del canvas donde se dibujará el juego.
- `roundPixels` establece si las coordenadas se redondearan o no. Esto puede ser útil para mejorar la fiabilidad de la animación del juego.
- `pixelArt` establece si el juego debe ser pixelado o no.
- `backgroundColor` establece el color de fondo del canvas.
- `scale` es un objeto que contiene la configuración de escalado. Este objeto puede tener los siguientes valores:

  - `mode` establece el modo de escalado. `Scale.FIT` significa que el juego se escalará para que se ajuste dentro de la pantalla del usuario sin distorsionar la relación de aspecto. El juego se encogerá o agrandará para llenar el espacio disponible sin deformarse.
  - `autoCenter` establece el modo de centrado. `Scale.CENTER_BOTH`. significa que el juego se centrará tanto horizontal como verticalmente en la pantalla del usuario. Si el juego no llena toda la pantalla (porque la relación de aspecto del juego no coincide con la relación de aspecto de la pantalla), se dejará espacio en blanco alrededor del juego para mantener su alineación central.

- `physics` es un objeto que contiene la configuración de físicas. Éste puede tener los siguiente valores:

  - `default` el tipo de físicas que se utilizará. Con el valor `arcade` se indica a Phaser que utilice el sistema de física Arcade como el sistema de física predeterminado para el juego. El sistema de física Arcade es el más simple y más rápido de los sistemas de física integrados en Phaser, y es ideal para juegos de plataformas y otros juegos de estilo retro.
  - `arcade` el sistema de físicas Arcade. Aquí puedes especificar la gravedad tanto en el eje `x` como en el eje `y`. También puedes activar el modo debug, muy importante al momento de desarrollar el juego.

- `scene` es un objeto que contiene la configuración de escena. Este objeto puede tener los siguientes valores:

  - `preload` es una función que se ejecuta antes de que el juego comience. Puedes utilizar esta función para cargar recursos que se necesitan antes de que el juego comience.
  - `create` es una función que se ejecuta cuando se crea el juego. Todos los recursos cargados previamente se pueden utilizar en esta función.
  - `update` es una función que se ejecuta cada vez que el juego se actualice. Puedes utilizar esta función para actualizar el estado del juego.

:::note[Nota]
Una vez que tienes tu objeto configuración, es necesario inicializarlo pasando el objeto al constructor de Phaser de la siguiente forma: `new Phaser.Game(config)`.
:::
