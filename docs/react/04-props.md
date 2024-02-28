---
sidebar_position: 4
---

# 🎛️ Props

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

En el siguiente video tendrás una explicación más a profundidad de los
componentes anidados y los props.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kcr_3nJcvmk?si=Ngj6J9eQgoKM85yF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>