---
sidebar_position: 2
---

# 🎨 Colores en CSS

Hay varias formas en las que puedes especificar un color en CSS, las más comunes son:

## Colores predefinidos por nombre

En CSS, existen actualmente 140 colores predefinidos por nombre. Algunos de ellos son `black`, `white`, `red`, `green`, `blue`, `yellow`, `purple`, `orange` y `brown`. Como ves, su nombre es inglés y tiene existen variaciones como por ejemplo `lightblue`, `lightgreen`, `lightgrey`, `lightpink`, etc.

```css
h1 {
  background-color: green;
}
```

En el ejemplo anterior, estamos cambiando el color del fondo del elemento `h1` a color verde.

## Hexadecimales

Los códigos hexadecimales tienen un signo `#` al inicio y el código que le precede representa el código hexadecimal del color. Por ejemplo, el color rojo es `#ff0000`.

```css
h1 {
  background-color: #ff0000;
}
```

En el ejemplo anterior, estamos cambiando el color del fondo del elemento `h1` a color rojo.

:::note[Nota]
No te preocupes si no te sabes el código de cada color. Visual Studio Code tiene una paleta de colores integrada que te permitirá elegir el color que desees.
:::

## RGB

Los códigos RGB representan la combinación de los tres colores primarios Red Green y Blue (rojo, verde y azul). Para seleccionar un color en este formato, debes escribir la función `rgb()` y dentro de la misma especificar en números enteros el valor de cada color. Por ejemplo, el color azul es `rgb(0, 0, 255)`.

```css
h1 {
  background-color: rgb(0, 0, 255);
}
```

En el ejemplo anterior, estamos cambiando el color del fondo del elemento `h1` a color azul.

## RGBA

Al formato RGB podemos cambiar la opacidad, y esto lo hacemos cambiando el valor Alpha. Para esto se utiliza la función `rgba()` donde internamente recibirá los tres valores que representan cada color, y el cuarto valor alpha que representa la opacidad. Por ejemplo, el color verde es `rgba(0, 255, 0, 0.5)`.

```css
h1 {
  background-color: `rgba(0, 255, 0, 0.5);
}
```

En el ejemplo anterior, estamos cambiando el color del fondo del elemento `h1` a color verde, pero con una opacidad del 50%.

:::note[Nota]
Los valores del alfa van desde el 0 al 1, representando de esta manera del 0% al 100% de opacidad.
:::

## Explicación en video:

¿Quieres aprender más sobre los colores en CSS? Haz clic en el siguiente video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/dJLYnB395kg?si=ck4OwfCdDnFZYHZN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
