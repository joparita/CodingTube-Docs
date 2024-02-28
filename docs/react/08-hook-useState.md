---
sidebar_position: 8
---

# 👌Hook useState

## ¿Qué son los Hooks?

En React, un "Hook" es una función especial que te permite usar el estado y otras características de React en componentes funcionales. Los Hooks son una característica presente en React desde la versión 16.8.

:::note[Nota]

Un componente funcional en React es simplemente una función de JavaScript que recibe props como argumentos y devuelve elementos de React.

:::

Los hooks siguen una convención de nombres: comienzan con "use" (por ejemplo, useState, useEffect, etc.) para que React pueda distinguirlos de otras funciones personalizadas. Esto es importante ya que los hooks tienen reglas específicas sobre cuándo y dónde pueden ser llamados, y React se basa en esta convención para asegurarse de que se utilicen correctamente.

## ¿Qué es el Hook `useState`?

El Hook `useState` es una función que te permite añadir estado a un componente funcional. El estado es una forma de almacenar datos que pueden cambiar a lo largo del tiempo. Cuando el estado de un componente cambia, el componente se vuelve a renderizar.

## ¿Cómo usar el Hook `useState`?

Para usar el Hook `useState`, primero debes importarlo desde la librería de React:

```jsx
import { useState } from 'react';
```

Luego, puedes utilizar el Hook `useState` en un componente funcional de la siguiente forma:

```jsx
const App = () => {
  // Declarar una nueva variable de estado llamada "count"
  const [count, setCount] = useState(0);

  // Devolver el componente
  return (
    <div>
      <p>Hiciste clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic en mí
      </button>
    </div>
  );
};
```

En el ejemplo anterior: 

1. Creamos una variable de estado llamada `count` utilizando el Hook `useState`. 
2. La función `useState` recibe un argumento que representa el valor inicial del estado, en este caso `0`. 
3. La función `useState` devuelve un array con dos elementos: el valor actual del estado y una función para actualizar el estado. En este caso, el valor actual del estado es `0` y la función para actualizar el estado es `setCount`. 

4. Utilizamos el valor actual del estado para mostrar cuántas veces se ha hecho clic en el botón y usamos la función para actualizar el estado para incrementar el contador cada vez que se hace clic en el botón.

## ¿Cómo usar el Hook `useState` con arreglos?

El Hook `useState` también puede ser utilizado con arreglos. Por ejemplo, si queremos tener un estado que contenga un arreglo con varios elementos, podemos utilizar el Hook `useState` de la siguiente forma:

```jsx
const App = () => {
  // Declarar una nueva variable de estado llamada "list"
  const [list, setList] = useState(['manzana', 'naranja', 'pera']);

  // Devolver el componente
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setList([...list, 'uva'])}>
        Agregar uva
      </button>
    </div>
  );
};
```

En el ejemplo anterior: 

1. Creamos una variable de estado llamada `list` utilizando el Hook `useState`. 
2. La función `useState` recibe un argumento que representa el valor inicial del estado, en este caso un arreglo con los elementos `manzana`, `naranja` y `pera`. 
3. La función `useState` devuelve un array con dos elementos: el valor actual del estado y una función para actualizar el estado. En este caso, el valor actual del estado es un arreglo con los elementos `manzana`, `naranja` y `pera` y la función para actualizar el estado es `setList`. 
4. Utilizamos el valor actual del estado para mostrar los elementos del arreglo y utilizamos la función para actualizar el estado para agregar un nuevo elemento al arreglo cuando se hace clic en el botón.

:::danger[Principio de inmutabilidad]

Cuando actualizamos el estado en React, es importante mantener el principio de inmutabilidad. Esto significa que no debemos modificar directamente el valor del estado, sino que debemos crear una copia del valor del estado y modificar la copia.

Esto es importante porque React utiliza la comparación de referencias para determinar si un componente debe ser re-renderizado, y si modificamos directamente el valor del estado, React no podrá detectar los cambios y el componente no se re-renderizará correctamente.

:::

## ¿Cómo usar el Hook `useState` con objetos?

El Hook `useState` también puede ser utilizado con objetos. Por ejemplo, si queremos tener un estado que contenga un objeto con varias propiedades, podemos utilizar el Hook `useState` de la siguiente forma:

```jsx
const App = () => {
  // Declarar una nueva variable de estado llamada "user"
  const [user, setUser] = useState({ name: 'John', age: 30 });

  // Devolver el componente
  return (
    <div>
      <p>El nombre del usuario es {user.name} y su edad es {user.age}</p>
      <button onClick={() => setUser(prevUser => ({ ...prevUser, name: 'Jane', age: 25 }))}>
        Actualizar usuario
      </button>
    </div>
  );
};
```

Como puedes ver en este ejemplo, también estamos usando el principio de inmutabilidad de React.

En el ejemplo anterior: 
1. Creamos una variable de estado llamada `user` utilizando el Hook `useState`. 
2. La función `useState` recibe un argumento que representa el valor inicial del estado, en este caso un objeto con las propiedades `name` y `age`. 
3. La función `useState` devuelve un array con dos elementos: el valor actual del estado y una función para actualizar el estado. En este caso, el valor actual del estado es un objeto con las propiedades `name` y `age` y la función para actualizar el estado es `setUser`. 
4. Sacamos una copia del valor actual del estado (principio de inmutabilidad) para mostrar el nombre y la edad del usuario y utilizamos la función para actualizar el estado cambiando el nombre y la edad del usuario cuando se hace clic en el botón.