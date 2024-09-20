---
sidebar_position: 8
---

# 🔊 Audio y video en HTML

## Audio

Insertar audio en HTML es muy sencillo. La etiqueta que vas a utilizar es la etiqueta `audio`, y su implementación es la siguiente:

```html
<audio src="asset/audio.mp3" controls></audio>
```

En el código anterior, se indica con el atributo `src` la ruta del archivo de audio. Y con el atributo `controls` se especifica al navegador que deben mostarse los controles de manejo del audio, como `play`, `pause` y `volume`.

También puedes insertar audios de respaldo, es decir, un segundo audio que se reproduce si el primer no puede reproducirse.

### Audio de respaldo

Si necesitas insertar un audio de respaldo, se tiene dos etiquetas: `audio` y `source`. Su implementación es la siguiente:

```html
<audio controls>
  <source src="asset/audio.mp3" type="audio/mpeg" />
  <source src="asset/audio.ogg" type="audio/ogg" />
  El navegador no soporta HTML5.
</audio>
```

En el código anterior estamos utilizando la etiqueta `audio` para anidar las etiquetas source, las mismas que tienen el atributo `src` que apunta a la ruta del archivo de audio y el atributo `type` que indica el tipo de audio.

Las etiquetas `source` nos van a servir para insertar audios de respaldo. HTML va a intentar reproducir el primer archivo, si no puede, intentará reproducir el segundo. Si tampoco puede con el segundo, mostrará el mensaje `El navegador no soporta HTML5`.

## Video

Por otro lado, para insertar videos en HTML, tienes que utilizar el siguiente código:

```html
<video src="asset/video.mp4" controls></video>
```

Aquí el atributo `controls` también indica al navegador que deben mostarse los controles de manejo del audio, como `play`, `pause` y `volume`.

### Video de respaldo

Si necesitas insertar un video de respaldo, se puede hacer de la misma forma en que se inserta un audio de respaldo, es decir anidando la etiqueta source dentro de la etiqueta audio:

```html
<video controls>
  <source src="asset/recording.mp4" type="video/mp4" />
  <source src="asset/recording.wav" type="video/wav" />
  El navegador no soporta HTML5.
</video>
```

## Atributos opcionales para audio y video

Tanto las etiquetas de audio como la de video tienen los siguientes atributos opcionales:

- `loop`: reproducir el audio o video en bucle (se repide indefinidamente).
- `muted`: el sonido por defecto del audio o video estará en silencio.

# Explicación en video

En el siguiente video te explico todo lo anterior paso a paso.

<iframe width="100%" height="444" src="https://www.youtube.com/embed/akFzU5K8VL0?si=xZqlW3w0CyOmipRV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
