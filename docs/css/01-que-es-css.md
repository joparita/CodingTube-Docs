---
sidebar_position: 1
---

# 🤔 ¿Qué es CSS?

CSS (Cascading Style Sheets) en español significa "Hojas de Estilos en Cascada". Su nombre hace referencia a la forma en la que se aplican los estilos a una página web. Se lo conoce como "Casada" porque los estilos se van aplicando uno después del otro, y el navegador los va aplicando de arriba hacia abajo.

## Formas de aplicar CSS

CSS se utiliza para agregar estilos (colores, espacios, formatos, fuentes, etc...) a una página web. Estos estilos los puedes aplicar de tres formas:

### 1. Estilos `inline`

Los estilos inline son estilos que se aplican directamente en el elemento HTML.

```html
<h1 style="color: red;">Hola mundo</h1>
```

En el código anterior, se está cambiando el color del texto "Hola mundo" a rojo.

:::warning[Importante]
Los estilos inline son aplicados cuando quieres probar un estilo en específico. Pero generalmente vas a querer cambiar más cosas que solamente el color. Esto puede hacer que los estilos inline no sean la mejor opción ya que será mucho código que tendrás que escribir en una línea. Por eso existen las siguientes dos opciones:
:::

### 2. Etiqueta `<style>`

La etiqueta `style` se la agrega dentro del `head` del archivo HTML. Para hacer referencia a la etiqueta `h1` por ejemplo, puedes hacerlo de la siguiente manera:

```html
<style>
  h1 {
    color: red;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
  }
</style>
```

Como puedes ver aquí hemos agregado muchos más estilos, y la forma de leer es mucho más clara que si estuviese todo en una línea.

:::info[Nota]
Hay muchas más formas de seleccionar un elemento HTML para darle estilos. Esto lo veremos en las siguientes secciones.
:::

También puedes separar los estilos en archivos independientes. Esto ayuda a organizar tu código.

### 3. Archivo CSS independiente

Los archivos CSS se pueden crear y agregar a un archivo HTML de forma independiente.

La estructura de archivos con un archivo html y otro css puede ser la siguiente:

```text
.
├── index.html
└── styles.css
```

El archivo `styles.css` contendrá los estilos que se aplicarán a la página web. Y para llamar desde el archivo `index.html` a los estilos, puedes hacerlo de la siguiente manera:

```html
<link rel="stylesheet" href="styles.css" />
```

Como ves, con la etiqueta `link`, estamos llamando al archivo `styles.css`, el mismo que se encuentra en la misma carpeta que el archivo `html`.

¿Quieres conocer más detalles sobre qué es CSS y cómo aplicar estilos a tu página web? mira el siguiente video:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/I_RG3bNjTfQ?si=FMrpVec_Apa05XaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
