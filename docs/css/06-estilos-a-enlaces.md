---
sidebar_position: 6
---

# 🔗 Estilos a enlaces

Un enlace en HTML tiene estilos básicos como un subrayado, y un color específico.

![Enlace con subrayado](./img/enlace.webp)

Quizá no sea muy llamativo pero es una forma de diferenciar un enlace de un texto normal. Estos estilos se pueden personalizar con CSS y hacer este enlace visualmente un poco más bonito.

## Quitando subrayado

Para quitar el subrayado de un enlace, puedes hacerlo de la siguiente manera:

```css
a {
  text-decoration: none;
}
```

:::note[nota]
La propiedad `text-decoration` no solamente sirve para quitar el subrayado, si no que también lo puedes usar para ponerlo. Por ejemplo para subrayar texto que no sean un enlace pero que necesites que si tengan un subrayado: `text-decoration: underline`
:::

## Agregando estado hover

Generalmente a un enlace quieres agregarle un estado `hover` (estilo que se aplica cuando pasas el puntero por encima). Puedes hacerlo de la siguiente manera:

```css
a {
  text-decoration: none;

  /* Aplicamos un estilo inicial */
  background-color: black;
  color: white;
}
a:hover {
  /* Aplicamos este estilo al pasar el puntero */
  background-color: white;
  color: black;
}
```

En el código anterior, estamos aplicando estilos básicos como ejemplo al estado inicial del enlace como un color de fondo negro y un color de letra blanco, pero al pasar el puntero por encima, aplicaremos lo opuesto, es decir, un color de fondo blanco y un color de letra negro.

## Explicación en video:

¿Quieres conocer más ejemplos de cómo puedes personalizar tus enlaces con CSS? haz clic en el siguiente video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/2uuwZ-bY_Bw?si=D54zzoW5mlF1KlG2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
