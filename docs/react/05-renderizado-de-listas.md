---
sidebar_position: 5
---

# Renderizado de listas

## ¿Qué es el renderizado de listas?

El renderizado de listas es una técnica que nos permite mostrar una lista de elementos en la interfaz de usuario. 

## ¿Cómo renderizar listas en React?

En React, podemos renderizar listas de elementos utilizando el método `map` de los arrays, de la siguiente forma:

```jsx
const frutas = ['Manzana', 'Pera', 'Plátano', 'Fresa'];

const App = () => {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};
```

## ¿Para que sirve el atributo key en React?

El atributo `key` es un atributo especial que se utiliza en React para darle a cada elemento de una lista un identificador único. El atributo `key` es necesario para que React pueda identificar los elementos de la lista y realizar un renderizado eficiente.

## Explicación en video:


<iframe width="560" height="315" src="https://www.youtube.com/embed/2SR0cH0Qcno?si=y1aKoM79IsodSBoR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
