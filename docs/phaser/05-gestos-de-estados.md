---
sidebar_position: 5
---

# 🎛️ Gestor de estados

Para mantener el estado de una variable entre varias escenas, es necesario crear un gestor de estados.

Por ejemplo, si queremos tener un estado que nos permita almacenar la puntuación del jugador, podemos hacerlo de la siguiente manera:

```js
class GameState {
  constructor() {
    this.reset();
  }

  reset() {
    this.points = 0;
  }

  addPoints(points) {
    this.points += points;
  }

  getPoints() {
    return this.points;
  }
}

export const gameState = new GameState();
```

Con el gestor de estados anterior podemos, resetear, actualizar o obtener la puntuación.

Para utilizar este gestor de estados en una escena, necesitamos importarlo primero en la escena en que la necesitemos. Por ejemplo de su uso sería el siguiente:

```js
import { Scene } from "phaser";
import { gameState } from "../GameState";

export class BoardScene extends Scene {

  constructor() {
    super("BoardScene");
  }

  init() {
    gameState.reset(); // Si es necesario, se resetea la puntuación al inicio.
  }

  create() {
    // Aquí es obtiene el valor actual de la puntuación
    this.scoreText = this.add.text(350, 10, gameState.getPoints(), { fontSize: '24px', fontFamily: 'monospace' });

    // ...
    // Resto de lógica
  }
  update() {
    // ...
    // resto de lógica

    addPoints() {
      gameState.addPoints(1); // Se actualiza la puntuación
      this.scoreText.setText(gameState.getPoints());
    }
    if(this.player.touch.ball){
      addPoints() // Si el jugador toca la pelota se agrega puntos
    }
  }
}
```
