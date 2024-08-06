---
sidebar_position: 11
---

# 🌈 Animaciones CSS

Para hacer animaciones en CSS, primero tenemos que definir las propiedades de la animación y luego sus valores.

## 1. Definir las propiedades de la animación

Las propiedades que vamos a definir son:

- Nombre de la animación: `animation-name`
- Duración de la animación: `animation-duration`
- Tiempo de repetición: `animation-iteration-count`

Por ejemplo, vamos a crear una animación para un div:

```css
div {
  // otras propiedades ...

  animation-name: cambiarColor;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
}
```

Lo anterior se puede hacer de forma abreviada especificando todo en la propiedad `animation`:

```css
div {
  animation: cambiarColor 3000ms infinite;
}
```

Aquí estamos definiendo la animación con el nombre `cambiarColor` y que se reproducirá en un tiempo de `3000ms`. `infinite` significa que la animación se va a repetir indefinidamente.

## 2. Definir los valores de la animación

Ahora que ya tenemos la animación, vamos a definir sus valores. Es decir vamos a especificar cómo va a cambiar en el tiempo.

En nuestro ejemplo vamos a hacer que el `div` cambie de color, de rojo inicialmente a azul. Para definir estos dos valores usamos `keyframes`. Los mismos que nos permiten declarar los valores de la animación con respecto al tiempo en términos de porcentaje. Es decir si yo deseo que al inicio tenga un determinado valor, lo especifico con un `0%`, y al final, con el `100%`. Si a la mitad se me ocurre que tenga otro valor lo defino con `50%`:

```css
@keyframes color {
  0% {
    background-color: red;
  }
  100% {
    background-color: blue;
  }
}
```

El resultado es el siguiente:

![Modelo de caja](./img/animation_color.gif)

Si a la mitad de la animación se me ocurre cambiar el color a amarillo lo defino con `50%` de la siguiente forma:

```css
@keyframes color {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: blue;
  }
}
```

No solamente se puede animar el color, si no que se puede animar la posición, el tamaño, la opacidad, etc. Y esto te lo explico a detalle en el siguiente video:

## Explicación en video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/bqQscQXxIls?si=lOLcudZaGbMzgEby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
