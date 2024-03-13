---
sidebar_position: 9
---

# 🧶 Hook useEffect

## ¿Qué es el Hook `useEffect`?

El Hook `useEffect` es una función que te permite realizar efectos secundarios en los componentes de React. Los efectos secundarios son operaciones que no pueden ser realizadas durante el renderizado del componente, como por ejemplo, peticiones a una API, suscripciones a eventos, manipulación del DOM, etc.

## ¿Cómo usar el Hook `useEffect`?

Para usar el Hook `useEffect`, primero debes importarlo desde la librería de React:

```jsx
import { useEffect } from 'react';
```

Luego, puedes utilizar el Hook `useEffect` en un componente funcional de la siguiente forma:

```jsx
const App = () => {
  useEffect(() => {
    // Realizar efectos secundarios aquí
  }, [/* Dependencias */]);

  // Devolver el componente
  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
};
```

En el ejemplo anterior:

1. Utilizamos el Hook `useEffect` para realizar efectos secundarios en el componente.
2. La función `useEffect` recibe dos argumentos: una función que representa el efecto secundario a realizar y un array de dependencias.
3. La función que representa el efecto secundario es ejecutada después de que el componente es renderizado por primera vez y después de cada actualización.

## Arreglo de dependencias

El segundo argumento de `useEffect` es un array de dependencias. Este array es opcional y se utiliza para especificar las dependencias que el efecto secundario tiene. Si el array de dependencias está vacío, el efecto secundario se ejecutará después de cada renderizado del componente. Si el array de dependencias contiene una o más variables de estado, el efecto secundario se ejecutará solamente si alguna de las dependencias ha cambiado.

## Explicación en video

¿Deseas ver esta explicación a detalle en video? Te lo dejo aquí:

<iframe width="100%" height="444" src="https://www.youtube.com/embed/zyOcbYcGvXU?si=Qa6MLxYf_FTB7k8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
