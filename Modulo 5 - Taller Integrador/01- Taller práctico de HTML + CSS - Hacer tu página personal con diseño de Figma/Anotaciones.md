# Taller practico

## Enlaces de interes

1. https://codepen.io/carmenansio
2. https://codepen.io/carmenansio/pen/JjVLQMM/5c86cb44a8410a353b6227b98
1bcd48d
3. https://codesandbox.io/

3. https://twitter.com/carmenansio
4. https://www.figma.com/
5. https://codepen.io/carmenansio/pen/BaErgxX/f7127185448f84cc95289da6d49
220bb
6. https://www.smashingmagazine.com/
7. https://css-tricks.com/
8. https://web.dev/learn/css?hl=es
9. https://www.w3schools.com/howto/howto_css_hero_image.asp


## Propiedades nuevas

Para adaptar nuestra web a diferentes idiomas.
En CSS tradicional solemos usar propiedades como `margin-top`, `margin-left`, `margin-right` y `margin-bottom` para definir los márgenes de los elementos. Sin embargo, existen nuevas propiedades como `margin-block-start`, `margin-block-end`, `margin-inline-start` y `margin-inline-end` que permiten definir márgenes de manera más flexible y adaptada a diferentes direcciones de escritura.

Por ejemplo, en textos con dirección de izquierda a derecha (LTR, como el español o inglés), `margin-inline-start` equivale a `margin-left` y `margin-inline-end` a `margin-right`. Si el texto cambia a una dirección de derecha a izquierda (RTL), estos valores se adaptan automáticamente, facilitando la internacionalización y el diseño responsivo.

Estas propiedades también existen para el padding (`padding-inline-start`, etc.), y ayudan a crear layouts más adaptables y modernos.



## HTML semántico

El **HTML semántico** consiste en utilizar etiquetas que describen claramente el significado del contenido que envuelven, facilitando la accesibilidad, el SEO y el mantenimiento del código.

### Etiquetas más importantes (de primer orden)
- `<header>`: Encabezado principal de la página o sección, suele contener logotipos, menús o títulos.
- `<nav>`: Contenedor para la navegación principal, como menús o enlaces de navegación.
- `<main>`: Contenido principal y único de la página, debe haber solo uno por documento.
- `<section>`: Sección temática del documento, agrupa contenido relacionado bajo un mismo tema.
- `<article>`: Contenido independiente y autocontenible, como una noticia, entrada de blog o comentario.
- `<footer>`: Pie de página de la página o sección, contiene información de contacto, derechos de autor, etc.
- `<aside>`: Contenido relacionado o complementario, como barras laterales, anuncios o enlaces adicionales.

### Etiquetas de segundo orden
- `<h1>` a `<h6>`: Encabezados jerárquicos, definen la estructura del contenido.
- `<p>`: Párrafos de texto.
- `<ul>`, `<ol>`, `<li>`: Listas desordenadas, ordenadas y sus elementos.
- `<figure>`, `<figcaption>`: Imágenes, gráficos u otros elementos ilustrativos y sus descripciones.
- `<img>`: Inserta imágenes en el documento, requiere al menos el atributo `src` y es recomendable usar `alt` para accesibilidad.
- `<blockquote>`: Citas textuales de otras fuentes.
- `<time>`: Fechas y horas, útil para eventos o publicaciones.
- `<mark>`, `<strong>`, `<em>`: Resaltado, énfasis y marcado de texto.
- `<address>`: Información de contacto.
- `<details>`, `<summary>`: Contenido expandible/colapsable.
- `<code>`, `<pre>`: Fragmentos de código y texto preformateado.

### Etiquetas de tercer orden
- `<b>`, `<i>`: Texto en negrita o cursiva sin énfasis semántico.
- `<abbr>`: Abreviaturas o acrónimos, con su significado completo en el atributo `title`.
- `<cite>`: Referencias a títulos de obras, libros, artículos, etc.
- `<dfn>`: Definición de un término.
- `<samp>`: Salida de un programa o sistema.
- `<kbd>`: Entrada del usuario (teclado).
- `<var>`: Representa una variable en una expresión o contexto matemático.
- `<sup>`, `<sub>`: Texto en superíndice y subíndice.
- `<small>`: Texto de menor importancia o tamaño reducido.
- `<del>`, `<ins>`: Texto eliminado o insertado en un documento.



### Ejemplo de HTML semántico

```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ejemplo de HTML Semántico</title>
    </head>
    <body>
        <header>
            <h1>Mi Página Personal</h1>
            <nav>
                <ul>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="sobre-mi">
                <h2>Sobre mí</h2>
                <p>Soy desarrollador web apasionado por el diseño y la accesibilidad.</p>
            </section>
            <section id="proyectos">
                <h2>Proyectos</h2>
                <article>
                    <h3>Proyecto 1</h3>
                    <figure>
                        <img src="proyecto1.png" alt="Captura de pantalla del Proyecto 1">
                        <figcaption>Proyecto 1: Aplicación de tareas.</figcaption>
                    </figure>
                    <p>Descripción breve del proyecto.</p>
                </article>
            </section>
            <aside>
                <h2>Enlaces de interés</h2>
                <ul>
                    <li><a href="https://www.w3schools.com/">W3Schools</a></li>
                    <li><a href="https://developer.mozilla.org/">MDN Web Docs</a></li>
                </ul>
            </aside>
        </main>
        <footer>
            <address>
                Contacto: <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
            </address>
            <p>&copy; 2024 Mi Página Personal</p>
        </footer>
    </body>
</html>
```

Utilizar estas etiquetas mejora la estructura y comprensión del contenido tanto para usuarios como para buscadores y tecnologías de asistencia.

