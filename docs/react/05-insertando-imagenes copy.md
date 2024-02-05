---
sidebar_position: 4
---

# Insertando imágenes en React

En HTML para insertar una imagen, simplemente debemos usar la etiqueta `img` y el atributo `src` para indicar la ruta de la imagen.

```html
<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" />
```

Pero en React debemos importar la imagen primero y luego usarla en el atributo `src`.

```jsx
const App = () => {
  return (
    <div>
      <img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" />
    </div>
  );
};
```