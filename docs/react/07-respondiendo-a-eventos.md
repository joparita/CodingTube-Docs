---
sidebar_position: 7
---

# 👆 Respondiendo a eventos

## ¿Qué son los eventos?

Los eventos son acciones que ocurren en la interfaz de usuario, como hacer clic en un botón, escribir en un campo de texto, o mover el ratón. En React, podemos responder a estos eventos utilizando *manejadores de eventos*.

## Manejadores de eventos

Un manejador de eventos es una función que se ejecuta cuando ocurre un evento. Para responder a eventos en React, podemos utilizar la sintaxis de JSX para asignar un manejador de eventos a un elemento de la siguiente forma:

```jsx
const App = () => {
  const handleClick = () => {
    alert('¡Hiciste clic en el botón!');
  };

  return (
    <button onClick={handleClick}>Haz clic en mí</button>
  );
};
```

En el ejemplo anterior, creamos un manejador de eventos llamado `handleClick` que muestra un mensaje de alerta cuando se hace clic en el botón. Luego, asignamos el manejador de eventos al botón utilizando la sintaxis de JSX: `onClick={handleClick}`.

## ¿Cómo acceder al `event` en React?

Cuando se ejecuta un manejador de eventos en React, se puede pasar un objeto `event` como argumento a la función. Este objeto `event` contiene información sobre el evento que ocurrió, como el tipo de evento, el elemento que generó el evento, y más. Para acceder al objeto `event` en un manejador de eventos, podemos agregar un parámetro a la función que representa el objeto `event`, de la siguiente forma:

```jsx
const App = () => {
  const handleClick = (event) => {
    alert(`¡Hiciste clic en el botón! El tipo de evento es: ${event.type}`);
  };

  return (
    <button onClick={handleClick}>Haz clic en mí</button>
  );
};
```

## ¿Cómo pasar parámetros a un manejador de eventos?

A veces, es útil pasar parámetros adicionales a un manejador de eventos en React. Por ejemplo, si queremos pasar un valor específico a un manejador de eventos, podemos utilizar una función flecha
para envolver el manejador de eventos y pasar los parámetros necesarios, de la siguiente forma:

```jsx
const App = () => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => handleClick('¡Hiciste clic en el botón!')}>
      Haz clic en mí
    </button>
  );
};
```

## Explicación en video:

<iframe width="100%" height="444"src="https://www.youtube.com/embed/vmlqBnMxOX4?si=K8-iGXrXbgAj6bfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>