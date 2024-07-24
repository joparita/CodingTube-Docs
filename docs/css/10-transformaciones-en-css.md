---
sidebar_position: 10
---

# 🔃 La propiedad `transform`

`transform` es una propiedad en CSS que te permite mover, rotar, inclinar o modificar las dimensiones de un elemento tanto en 2D como 3D.

Existen varios tipos de transformaciones en CSS, a continuación analizaremos las más utilizadas.

## Transformaciones 2D

### `translate()`

```css
div {
  transform: translate(20px, 10px);
}
```

En el ejemplo anterior estamos moviendo el elemento `div` en el eje `x` 20px y en el eje `y` 10px.

### `rotate()`

```css
div {
  transform: rotate(45deg);
}
```

Gira el elemento `div` 45 grados.

### `scale()`

```css
div {
  transform: scale(2);
}
```

Multiplica el tamaño del elemento `div` por 2.

### `skew()`

```css
div {
  transform: skew(10deg, 20deg);
}
```

Inclina el elemento `div` 10 grados en el eje `x` y 20 grados en el eje `y`.

### `matrix()`

La función `matrix()` se utiliza para combinar multiples transformaciones. Por ejemplo:

```css
div {
  transform: matrix(1, 0.45, 0.45, 1, 20, 10);
}
```

Donde

- 1er y 4to valor representan la escala en el eje `x` y `y`, respectivamente.
- 2do y 3er representan la rotación en el eje `x` y `y`, respectivamente. Aquí los grados se los especifica en decimales. 0.45 equivale a 45 grados.
- 5to y 6to valor representan la traslación en el eje `x` y `y`, respectivamente.

## Transformaciones 3D

En las transformaciones 3D se agrega una dimensión extra a las funciones `rotate` y `translate`. Es decir que además de modificar los valores `x` y `y` también lo podemos hacer en el eje `z`.

Lo podemos hacer especificando valor por valor `translateX()`, `translateY()`, `translateZ()` o usando la función `translate3d()` de la siguiente manera:

### `translate3d()`

```css
div {
  transform: translateX(40px); /* Sólo eje X */
  transform: translateY(25px); /* Solo eje Y */
  transform: translateZ(55px); /* Solo eje Z */

  transform: translate3d(40px, 25px, 55px); /* Todos los ejes */
}
```

### `rotate3d()`

Lo mismo se puede hacer para rotar. Podemos especificar valor por valor o utilizando la la función `rotate3d()` de la siguiente manera:

```css
div {
  transform: rotateX(50deg);
  transform: rotateY(25deg);
  transform: rotateZ(5deg);

  transform: rotate3d(1, 0, 0, 50deg); /* Equivale a rotateX(50deg) */
  transform: rotate3d(0, 1, 0, 25deg); /* Equivale a rotateY(25deg) */
  transform: rotate3d(0, 0, 1, 5deg); /* Equivale a rotateZ(5deg) */

  transform: rotate3d(
    1,
    1,
    0,
    100deg
  ); /* Equivale a rotateX(100deg) rotateY(100deg) */
}
```

## Explicación en video

¿Deseas ver esta explicación a detalle en video? Te lo dejo aquí:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/-dMy4Tw-Iqg?si=Yi0SJRIRjK6iAXMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
