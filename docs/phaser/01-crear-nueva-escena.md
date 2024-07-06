---
sidebar_position: 1
---

# 🚧 Crear una nueva escena

Para crear una nueva escena en Phaser, tienes que seguir estos pasos:

## 1. Crear una nueva clase

En un nuevo archivo, generalmente dentro de la carpeta `scenes`, crea una nueva clase que extienda de la clase `Scene` de Phaser, la misma que debe estar previamente importada:

```js
import { Scene } from "phaser";

export class FinalScene extends Scene {
  constructor() {
    super({ key: "FinalScene" });
  }

  create() {}

  update() {}
}
```

## 2. Agregar la nueva escena

Luego dentro de tu archivo de configuración, debes agregar la nueva escena a tu arreglo de escenas:

```js
import { Game } from "phaser";
import { Preloader } from "./preloader";
import { FinalScene } from "./scenes/FinalScene";

const config = {
  // resto de configuraciones
  scene: [Preloader, FinalScene],
};

new Game(config);
```

## 3. Llamar la nueva escena

Finalmente, llama la nueva escena cuando la necesites, como por ejemplo cuando el jugador ha perdido.

```js
if (this.player.points === 0) {
  this.scene.start("FinalScene");
}
```
