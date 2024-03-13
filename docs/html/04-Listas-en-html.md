---
sidebar_position: 4
---

# 📒 Listas en HTML

Las listas en HTML son una forma de organizar y mostrar información de manera estructurada. Existen tres tipos de listas en HTML: listas ordenadas, listas no ordenadas y listas de definición.

## Listas ordenadas

Las listas ordenadas se utilizan para mostrar elementos en un orden específico. En HTML, las listas ordenadas se crean con la etiqueta `ol` y los elementos de la lista se crean con la etiqueta `li`. Por ejemplo, si queremos crear una lista de compras, podemos hacer lo siguiente:

```html
<ol>
  <li>Leche</li>
  <li>Huevos</li>
  <li>Queso</li>
</ol>
```

Esto, en la página, se verá así:

1. Leche
2. Huevos
3. Queso

:::note[Nota]

En este caso, la etiqueta `ol` indica que estamos creando una lista ordenada y las etiquetas `li` indican los elementos de la lista. Al visualizar esta lista en un navegador, los elementos se mostrarán con números en orden ascendente.

:::



## Listas no ordenadas

Las listas no ordenadas se utilizan para mostrar elementos en un orden no específico. En HTML, las listas no ordenadas se crean con la etiqueta `ul` y los elementos de la lista se crean con la etiqueta `li`. Por ejemplo, si queremos crear una lista de tareas, podemos hacer lo siguiente:

```html
<ul>
  <li>Lavar los platos</li>
  <li>Limpiar la casa</li>
  <li>Ir al supermercado</li>
</ul>
```

Esto, en la página, se verá así:

- Lavar los platos
- Limpiar la casa
- Ir al supermercado

:::note[Nota]
En este caso, la etiqueta `ul` indica que estamos creando una lista no ordenada y las etiquetas `li` indican los elementos de la lista. Al visualizar esta lista en un navegador, los elementos se mostrarán con viñetas.
:::

## Listas de definición

Las listas de definición se utilizan para mostrar pares de términos y sus definiciones. En HTML, las listas de definición se crean con la etiqueta `dl`, los términos se crean con la etiqueta `dt` y las definiciones se crean con la etiqueta `dd`. Por ejemplo, si queremos crear una lista de definiciones, podemos hacer lo siguiente:

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado de hipertexto</dd>
  <dt>CSS</dt>
  <dd>Hojas de estilo en cascada</dd>
  <dt>JavaScript</dt>
  <dd>Lenguaje de programación de alto nivel</dd>
</dl>
```

Esto, en la página, se verá así:

HTML <br/>
Lenguaje de marcado de hipertexto

CSS <br/>
Hojas de estilo en cascada

JavaScript <br/>
Lenguaje de programación de alto nivel

:::note[Nota]
En este caso, la etiqueta `dl` indica que estamos creando una lista de definición, las etiquetas `dt` indican los términos y las etiquetas `dd` indican las definiciones. Al visualizar esta lista en un navegador, los términos y las definiciones se mostrarán con un formato específico.
:::

## Listas anidadas

Todas las listas en HTML pueden ser anidadas, es decir, una lista puede contener otra lista dentro de uno de sus elementos. Por ejemplo, si queremos crear una lista de tareas con subtareas, podemos hacer lo siguiente:

```html
<ul>
  <li>Lavar los platos</li>
  <li>Limpiar la casa
    <ul>
      <li>Barrer el suelo</li>
      <li>Limpiar las ventanas</li>
    </ul>
  </li>
  <li>Ir al supermercado</li>
</ul>
```
:::note[Nota]
En este caso, la lista de tareas contiene una lista de subtareas dentro del elemento "Limpiar la casa". Al visualizar esta lista en un navegador, las subtareas se mostrarán con viñetas y estarán indentadas para indicar que son parte de la tarea "Limpiar la casa".
:::

## Explicación en video

¿Deseas ver esta explicación a detalle en video? Te lo dejo aquí:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/TWeV5D9RHg0?si=GO_MoHNYqSFwefnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>