---
sidebar_position: 7
---

# 🤺 Posicionar elementos en CSS

Para poder posicionar un elemento en CSS, es necesario utilizar la propiedad `position`:

```css
h1 {
  position: static;
}
```

El valor por defecto de la propiedad `position` es `static`. Y su posición será la que tenga dentro del HTML. Pero existen más valores para esta propiedad y los más usados son:

- **`absolute`**: Su posición se mueve con respecto al `body` o a un elemento padre que tenga una posición `relative`.
- **`relative`**: Su posición se mueve y además crea una referencia para un elemento que tenga la posición `absolute`.
- **`sticky`**: El elemento se mueve, pero queda "pegado" a cierta posición dentro de la página.

## Asignando una posición

Una vez que has especificado una de la propiedades anteriores (excepto `static`), es necesario que asignes dónde se va a ubicar. Y para esto tienes a disposición las propiedades `top`, `bottom`, `left` y `right`, los mismos que crearían desplazamientos `arriba`, `abajo`, `izquierda` y `derecha` respectivamente. Un ejemplo de su utilización sería el siguiente:

```css
h1 {
  position: absolute;
  top: 50px;
  left: 50px;
}
```

En el ejemplo anterior el elemento `h1` se moverá 50px desde arriba y 50px desde la izquierda.

:::note[Nota]
Ten en cuenta que los movimientos anteriores se van a hacer respecto al `body`. Es decir desde la parte superior izquierda de la página, a menos que haya un elemento padre con la propiedad `relative` asignada.
:::

## Explicación en video

¿Te gustará ver ejemplos de cómo aplicar las propiedades anteriores? Haz clic en el video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/XLMJ52NnWQI?si=N7pom-wai88LwHTl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
