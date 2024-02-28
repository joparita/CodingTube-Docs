---
sidebar_position: 3
---

# 🪺 Componentes anidados

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

En el siguiente video tendrás una explicación más a profundidad de los
componentes anidados y los props.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kcr_3nJcvmk?si=Ngj6J9eQgoKM85yF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>