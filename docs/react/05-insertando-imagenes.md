---
sidebar_position: 5
---

# 🖼️ Insertando imágenes en React

En HTML para insertar una imagen, simplemente debemos usar la etiqueta `img` y el atributo `src` para indicar la ruta de la imagen.

```html
<img src="ruta-de-la-imagen.jpg" alt="Descripción de la imagen" />
```

Pero en React debemos importar la imagen primero y luego usarla en el atributo `src`.

```jsx
import imagen from './ruta-de-la-imagen.jpg';

const App = () => {
  return (
    <div>
      <img src={imagen} alt="Descripción de la imagen" />
    </div>
  );
};
```