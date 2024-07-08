---
sidebar_position: 9
---

# 🛞 Transiciones con CSS

Para crear una transición en CSS, sigue estos dos pasos:

1. Especifica la propiedad que va a tener la transición en `transition-property`.
2. Coloca la duración de la transición en milisegundos en `transition-duration`.

Por ejemplo, para cambiar el color del `background-color` a una clase llamada `card`, debemos hacerlo de la siguiente manera:

```css
.card {
  transition-property: background-color;
  transition-duration: 500ms;
}

.card:hover {
  background-color: darkgrey;
}
```

:::note[Nota]
Si deseas especificar más de una propiedad, deberás ponerlas dentro de `transition-property` separadas por comas. Por ejemplo, si además de cambiar el `background-color` quieres cambiar el `width` y `height` deberás hacerlo de la siguiente manera:

```css
.card {
  transition-property: background-color, width, height;
  transition-duration: 500ms;
}
.card:hover {
  // nuevos valores de card cuando se haga hover sobre el card.
  background-color: darkgrey;
  width: 200px;
  height: 200px;
}
```

:::

## Explicación en video:

También existe la propiedad `transition-timing-function` que te permite especificar la curvatura de la transición. Esta propiedad te la explico a detalle en el siguiente video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/pdPtKBWoI9E?si=KYgVoluG39n8Yu3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
