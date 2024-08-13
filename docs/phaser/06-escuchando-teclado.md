---
sidebar_position: 6
---

# ⌨️ Escuchando el teclado

En un videojuego siempre será necesario la interacción del jugador. Éste podrá ser a través de un teclado, el ratón, un joystick, etc.

Aquí aprenderás a cómo escuchar las teclas pulsadas por el jugador en un teclado.

Dentro del método `create` crea las teclas de la siguiente forma:

```js
function create() {
  this.keys = this.input.keyboard.createCursorKeys();
}
```

Luego dentro de la función `update` podrás consultar si alguna tecla fue pulsada:

```js
function update() {
  if (this.keys.left.isDown) {
    // Move left
  } else if (this.keys.right.isDown) {
    // Move right
  }
}
```

:::warning[Importante]
`createCursorKeys()` crea y regresa un objeto que contiene acceso sólo a las teclas de dirección `arriba`, `abajo`, `izquierda` y `derecha`, y también para la barra espaciadora y la tecla `shift`.