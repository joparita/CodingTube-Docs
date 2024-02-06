---
sidebar_position: 3
---

# Componentes anidados y props

## ¿Qué es un componente anidado?

Un componente anidado, no es más que es un componente que se encuentra dentro
de otro componente. Los componentes anidados son una de las características
más poderosas de React, ya que permiten crear interfaces de usuario complejas
a partir de componentes más pequeños y reutilizables.

## ¿Cómo anidar un componente?

Si nos fijamos en el siguiente código, podemos ver que el componente `App`
con tres componentes : `Header`, `Main` y `Footer`.

```jsx
const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
```

Como puedes ver todos los componentes se cierran a si mismos, es decir, no
tienen componentes hijos.

Si queremos anidar un cuatro `<Navigation />` componente dentro `<Header />`, simplemente debemos abrir y cerrar el componente `Header` para poder poner dentro del componente `Header`, de la siguiente forma

```jsx
const App = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main />
      <Footer />
    </>
  );
};
```

:::info[Nota]

Para poder hacer lo anterior, debemos modificar el componente `Header` para que
pueda recibir un componente como hijo. Y esto lo hacemos de la siguiente forma:


```jsx
const Header = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};
```

:::

## ¿Qué son los Props en React?

Los props son argumentos que se pasan a un componente. Los props son
similares a los argumentos de una función, y nos permiten pasar datos a un
componente. Los props son inmutables, es decir, no se pueden modificar desde
dentro del componente.

## ¿Cómo pasar props a un componente?

Para poder pasar props a un componente, simplemente debemos hacerlo de la
siguiente forma:

```jsx
const App = () => {
  return (
    <>
      <Header title="Mi página web" />
      <Main />
      <Footer />
    </>
  );
};
```
Dentro del componente `Header` podemos acceder a los props de la siguiente
forma:

```jsx
const Header = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};
```
También se puede acceder a los props de la siguiente forma:

```jsx
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
};
```
Donde props es un objeto que contiene todos los props que se le pasan al
componente.