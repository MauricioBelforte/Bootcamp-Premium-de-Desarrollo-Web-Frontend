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


# Repositorio
1. https://github.com/carmenansio/codigo-facilito-taller
   
2. https://codesandbox.io/p/sandbox/agitated-neumann-hnxnnl



# En este archivo md esta toda la informacion importante del taller.

[Readme de la profe](readmedeltaller.md)



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




## Algunos elementos hero y cta

### ¿Qué es un "hero"?

El **hero** es la sección principal y destacada al inicio de una página web. Suele ocupar gran parte de la pantalla y su objetivo es captar la atención del usuario rápidamente. Normalmente incluye un título llamativo, una breve descripción y una imagen o fondo visual atractivo.

**Ejemplo de hero:**

```html
<section class="hero">
    <h1>Bienvenido a mi portafolio</h1>
    <p>Desarrollador web apasionado por el diseño y la accesibilidad.</p>
    <a href="#proyectos" class="cta">Ver mis proyectos</a>
</section>
```

### ¿Qué es un "CTA"?

Un **CTA** (Call To Action, o llamada a la acción) es un elemento, generalmente un botón o enlace, que invita al usuario a realizar una acción específica, como registrarse, descargar, contactar, etc. Suele estar destacado visualmente para incentivar la interacción.

**Ejemplo de CTA:**

```html
<a href="#contacto" class="cta">Contáctame</a>
```

Ambos elementos son fundamentales para guiar al usuario y mejorar la conversión en una web.



## Donde buscar Layouts hechos de grid

https://gridbyexample.com/


## Si tenemos varios css por ejemplo fonts.css styles.css y toggle.css

La profe recomienda crear una carpeta css y dentro solo un style.css,
dentro de ese style.css importamos el resto de archivos css por ejemplo:

```css

@import '../css/normalize.css';
@import '../css/variables.css';
@import '../css/typography.css';
@import '../css/utility.css';
@import '../css/grid.css';
@import '../css/flex.css';
@import '../css/spacing.css';
@import '../css/position.css';
@import 'fonts.css';
@import '../css/hover.css';
@import '../css/transition.css';
@import '../css/animation.css';
@import '../css/scroll.css';
@import '../css/opacity.css';


```


## Reset CSS, Content-box y Normalize.css

El **reset CSS** es una técnica para eliminar o estandarizar los estilos predeterminados que los navegadores aplican a los elementos HTML, logrando así una base uniforme para el diseño web.

### ¿Cómo vienen los estilos por defecto?

Cada navegador aplica sus propios estilos predeterminados a los elementos HTML. Por ejemplo, los encabezados (`<h1>`, `<h2>`, etc.) suelen tener márgenes y tamaños de fuente distintos, las listas (`<ul>`, `<ol>`) incluyen sangrías y viñetas, y los botones o formularios tienen estilos propios. Estas diferencias pueden causar inconsistencias en el diseño si no se gestionan.

### El modelo de caja: `content-box` vs `border-box`

Por defecto, la mayoría de los navegadores usan el modelo de caja **`content-box`**. Esto significa que las propiedades `width` y `height` solo afectan al contenido del elemento, y el `padding` y el `border` se suman a ese tamaño, haciendo que el elemento ocupe más espacio del esperado.

**Ejemplo:**

```css
/* Por defecto: content-box */
.elemento {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```
El ancho total será: `200px (contenido) + 40px (padding) + 10px (border) = 250px`.

Para evitar estos cálculos y facilitar el diseño, se suele cambiar a **`border-box`**, donde el `width` incluye el contenido, el padding y el borde.

### Reset CSS moderno

Una forma común de resetear los estilos es usar un *reset* que establece el modelo de caja a `border-box` para todos los elementos y elimina los márgenes y rellenos por defecto:

```css
/* Reset universal moderno */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

Esto asegura que el ancho y alto de todos los elementos incluyan el contenido, el padding y el borde, y elimina los espacios por defecto, proporcionando una base sólida y predecible para construir tus estilos personalizados.

### ¿Qué es Normalize.css?

**Normalize.css** es una alternativa al reset tradicional. En lugar de eliminar todos los estilos por defecto, *normalize* los ajusta para que sean consistentes entre navegadores, manteniendo los estilos útiles y corrigiendo diferencias o bugs conocidos. Así, los elementos conservan una apariencia razonable y coherente, facilitando el trabajo con estilos personalizados.

Puedes incluirlo en tu proyecto descargando el archivo desde [https://necolas.github.io/normalize.css/](https://necolas.github.io/normalize.css/) o instalándolo vía npm/yarn. Luego, simplemente impórtalo en tu CSS principal:

```css
@import 'normalize.css';
```

**Resumen:**  
- *Reset CSS* elimina todos los estilos por defecto y suele cambiar el modelo de caja a `border-box`.
- *Content-box* es el modelo de caja por defecto, pero puede causar cálculos inesperados en el tamaño de los elementos.
- *Normalize.css* mantiene y corrige los estilos útiles, asegurando coherencia entre navegadores.

Ambos enfoques ayudan a evitar sorpresas y a tener un punto de partida controlado para el diseño web.



## Explicación de `:root` y `[data-theme]` en CSS

El selector `:root` en CSS representa el elemento raíz del documento (generalmente `<html>`). Es útil para definir variables CSS globales (custom properties) que pueden ser reutilizadas en todo el archivo CSS. Por ejemplo:

```css
:root {
    --primary-color: #22223b;
    --secondary-color: #9a8c98;
    --background-color: #f2e9e4;
    --text-color: var(--primary-color);
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --accent-color: #f72585;
}
```

Estas variables pueden ser usadas en cualquier parte del CSS, facilitando la gestión de colores, fuentes y otros valores repetidos.

#### ¿Qué es `[data-theme="dark"]`?

`[data-theme="dark"]` es un selector de atributo que aplica estilos cuando un elemento (normalmente `<html>` o `<body>`) tiene el atributo `data-theme="dark"`. Esto permite cambiar fácilmente el tema de la web (por ejemplo, de claro a oscuro) sobrescribiendo las variables definidas en `:root`:

```css
[data-theme="dark"] {
    --primary-color: #f2e9e4;
    --text-color: var(--primary-color);
    --background-color: #212529;
    --box-shadow: 0 4px 6px rgba(239, 239, 239, 0.1);
}
```

Así, al cambiar el atributo `data-theme` en el HTML, los estilos de la web se actualizan automáticamente usando las nuevas variables, permitiendo implementar fácilmente un modo oscuro o cualquier otro tema personalizado.
Lo decide el sistema operativo o la configuracion que tiene el usuario, sin necesidad de codigo en javascript.

### Ejemplo de uso de `data-theme` en HTML

Para aplicar un tema oscuro o personalizado usando `[data-theme]`, puedes agregar el atributo directamente en la etiqueta `<html>` o `<body>`. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es" data-theme="dark">
    <head>
        <meta charset="UTF-8">
        <title>Ejemplo con data-theme</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Modo oscuro activado</h1>
        <p>Este ejemplo utiliza el atributo <code>data-theme="dark"</code> en la etiqueta <code>&lt;html&gt;</code>.</p>
    </body>
</html>
```

Al cambiar el valor de `data-theme`, los estilos definidos en CSS para ese tema se aplicarán automáticamente.


