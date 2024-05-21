---
sidebar_position: 3
---

# 🗨️ Editar texto en CSS

## Tipografía

Para editar la tipografía (fuente) de un texto, debes usar la propiedad `font-family`. Hay muchos valores que puedes usar dentro de esta propiedad, como por ejemplo `Arial, Helvetica, sans-serif`. Te recomiendo usar el auto completado de Visual Studio Code para buscar las fuentes disponibles.

Ejemplo:

```css
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
```

:::note[Nota]
También puedes cambiar la fuente de un texto utilizando una [fuente de Google](https://fonts.google.com/).
:::

## Tamaño de texto

Para editar el tamaño de texto, debes usar la propiedad `font-size`. Puedes especificar el tamaño del texto en pixeles, por ejemplo `20px`. Hay más unidades de medidas disponibles, como `em`, `rem` que los veremos a detalle en una siguiente sección.

Ejemplo:

```css
h1 {
  font-size: 20px;
}
```

## Alineación

`text-align` es la propiedad que te permite cambiar la alineación del texto. Algunos de los valores disponibles para esta propiedad son: `left`, `center`, `right`, `justify`, `start` o `end`.

Ejemplo:

```css
h1 {
  text-align: center;
}
```

:::note[Nota]
Esta propiedad también la puedes aplicar a un párrafo entero para justificar su contenido por ejemplo, y esto lo puedes hacer así: `text-align: justify;`.
:::

## Sombras

Para agregar sombras a un texto debes usar las propiedad `text-shadow`. Los valores que llevará son los siguientes: `offset-x`, `offset-y`, `blur-radius`, `color`. A continuación un ejemplo:

```css
h1 {
  text-shadow: 2px 2px 4px #000000;
}
```

Donde:

- `offset-x` representa la distancia que tendrá la sombra horizontalmente,
- `offset-y` representa la distancia que tendrá la sombra verticalmente,
- `blur-radius` representa la intensidad de la sombra,
- `color` representa el color de la sombra.

## Explicación en video:

¿Deseas ver los conceptos anteriores aplicados en un ejemplo práctico? mira el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/4dAMMDPZUG4?si=HNao0oaT10S5mmwt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
