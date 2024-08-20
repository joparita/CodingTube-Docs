---
sidebar_position: 1
---

# 🗃️ Variables en Dart

Una variable es un contenedor de un dato. Un dato puede ser `String` (cadena de texto), `number`(numero entero o decimal), `boolean`(valores de verdadero o falso), etc, o datos más complejos como `lists` (listas de datos). 

De momento no nos vamos a centrar en los tipos de datos, si no en las variables como tal. Luego profundizaremos en los tipos de datos.

Para crear una variable en dart podemos utilizar la palabra reservada `var`, de la siguiente manera:

```dart
void main() {
  var userName = 'Juan';
}
```

:::note[Nota]
El código en dart siempre deberá encerrado dentro de una la función `main`.
```dart
void main() {
  // tu código va aquí
}
```
:::

Las variables guardan referencias. En el ejemplo anterior, la variable `userName` guardará una referencia al objeto `String` con el valor de `Juan`.

:::note[Nota]
Si bien es cierto se pueden declarar variables con la palabra reservada `var`, no es obligatorio, ya que estamos obligando a Dart a que infiera el tipo de dato. Es mejor especificarlo directamente de esta forma:
```dart
String userName = 'Juan';
```
:::

```dart
String userName = 'Juan';
int age = 30;
Boolean isAdmin = true;
```

## `final` y `const`

Si la variable no va a cambiar usa `final` o `const`. Las variables especificadas con `final` no cambian son aquellas que no cambian en tiempo de ejecución, mientras que con `const` si pueden cambiar.