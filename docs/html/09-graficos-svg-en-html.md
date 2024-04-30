---
sidebar_position: 9
---

# 🎨 Gráficos SVG en HTML

Las ventajas de trabajar con gráficos SVG, es que te permiten modificar sus dimensiones (ancho o alto) sin que la resolución de la imagen se pierda. Esto debido a que los gráficos SVG están basados en vectores. De hecho la palabra SVG significa `Scalable Vector Graphics`.

## Dibujando un círculo

Para hacer cualquier gráfico SVG vamos a utilizar la etiqueta `svg`, la misma que va a englobar todos los vectores que queremos dibujar. Por ejemplo, si queremos dibujar un círculo, podemos hacerlo de la siguiente manera:

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="red" />
</svg>
```

En el código anterior, creamos un elemento `svg` que engloba un `circle`. Dentro de la etiqueta `svg` verás que hay varios atributos:

- `width`: establece el **ancho** del elemento `svg`.
- `height`: establece el **alto** del elemento `svg`.
- `xmlns`: este atributo es recomendable para asegurar la correcta visualización del elemento `svg` en navegadores antiguos.

Y dentro de la etiqueta `circle` tenemos los atributos:

- `cx`: desplazamiento horizontal del círculo. Tomando como referencia su centro.
- `cy`: desplazamiento vertical del elemento círculo. Tomando como referencia su centro.
- `r`: radio del cículo.
- `fill`: color del círculo. En este caso rojo.

El resultado es el siguiente gráfico:

![formulario](./img/circle.webp)

:::note[Nota]
Hay muchas formas geométicas que puedes dibujar con esta etiqueta, pero entre más compleja sea la figura, se hará más complejo el código. En este caso se recomienda usar un editor de graficos para crear la figura y exportarla en formato svg para usarla en tu página web.
:::

Aquí solamente hemos hevho un ejemplo pequeño de lo que se puede hacer con la etiqueta svg, pero si deseas conocer más de esta etiqueta, puedes ver el siguiente video.

## Explicación en video

<iframe width="100%" height="444" src="https://www.youtube.com/embed/tiRhwoobANE?si=ml17xHro472OvbEm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
