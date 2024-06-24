---
sidebar_position: 8
---

# 🖼️ Cómo insertar imágenes en CSS

Insertar una imagen en CSS es muy sencillo. Simplemente hay utilizar la propiedad `background-image`. Ésta propiedad puede tener como valor la función `url()`, la misma que recibe como parámetro la ruta de la imagen. Esto lo veremos mejor con un ejemplo:

```css
div {
  background-image: url("/img/logo.png");
}
```

:::note[Nota]
La url no solamente debe hacer referencia a archivos locales. Puedes también poner la url de una imagen en línea. Un servicio en línea que te provee imágenes es [unsplash](https://unsplash.com/es).
:::

## Repetición de la imagen.

Por defecto, la imagen insertada se va a repetir las veces que sea necesario hasta llenar todo el espacio de nuestra página web, pero si no queremos que se repita, podemos indicar a CSS que no lo haga con la propiedad `background-repeat` y el valor `no-repeat`:

```css
div {
  background-image: url("/img/logo.png");
  background-repeat: no-repeat;
}
```

## Posición de la imagen.

También podemos modificar la posición de la imagen dentro de su contenedor con la propiedad `background-position` y alguno de los valores más usados son `center`, `top`, `bottom`, `left`, `right`. Como por ejemplo:

```css
div {
  background-image: url("/img/logo.png");
  background-repeat: no-repeat;
  background-position: center;
}
```

## Tamaño de la imagen.

El tamaño de la imagen se puede ajustar con la propiedad `background-size` y los valores permitidos son `cover`, `contain`, `auto`. Como por ejemplo:

```css
div {
  background-image: url("/img/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

## Explicación en video:

Para ver un ejemplo práctico de cómo se ven estas propiedades con sus diferentes valores te recomiendo ver el siguiente video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/8Dja3UOAPz0?si=uuV4qzozIr_lIdlO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
