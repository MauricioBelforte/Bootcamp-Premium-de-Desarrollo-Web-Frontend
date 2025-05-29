# Vamos a trabajar el metodo Visually hidden

Consiste en ocultar las cosas visualmente, pero sin quitarlas del flujo de navegacion.

Creamos la clase .visually-hidden tambien llamada .cloak o sr-only (screen reader only)

Esta clase esta hecha para cultar visualmente un elemento del html pero no lo saca del orden del DOM.

```css


/* Version copilot */
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  border: 0 !important;
}

/*La que nos paso la profe*/
/*Oculta visualmente un elemento del html pero no lo saca del orden del DOM*/
.cloak{
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden; 
    clip : rect(1px 1px, 1px, 1px);
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;                                                                 
}

```

# Creamos el Skip navegation

Consiste en agregar un enlace con un href que dirija a distintas secciones con el id, asi:

<a href="#principal">Saltar navegacion</a>

<main id="principal">
</main>

-Para moverse por los enlaces se presiona Shift, mientras se ve el focus.
-Para saltar de un enlace con # se presiona Enter y luego Shift para ver el focus.


```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skip Navegation</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <nav>
        <ul>
            <li><a href="#principal">Saltar navegacion</a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    <main id="principal">
        <h1>Estas en la seccion principal</h1>
        <p>Este es un ejemplo de cómo implementar un enlace para saltar la navegación principal y venir a la Seccion Principal.</p>
        <a href="#"> Ejemplo de link en seccion principal </a>
    </main>

</body>
</html>

```

# La etiqueta <main></main> 

Es el contenido principal de la pagina
No tiene que tener contenido repetitivo es decir, no tiene que incluir barra de navegacion, ni footer.
Ademas provee un atajo para los lectores de pantalla.


# Ahora vamos a hacer desaparecer y aparecer un elemento.

Agregando la clase cloak al elemento, lo desaparece.

```css

.cloak{
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden; 
    clip : rect(1px 1px, 1px, 1px);
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;  
}

```

Ahora quiero que el elemento aparezca, entonces trabajamos en el focus de la clase cloak

```css

.cloak:focus {
    position: static !important;
    height: auto !important;
    width: auto !important;
    overflow: visible !important;
    clip : auto !important;
    white-space: normal !important; 
    background-color: yellow !important;
}
```

Y de esta forma podemos presionar Shift hasta que aparezca ese elemento escondido, hasta que le haga foco.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skip Navegation</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <nav>
        <ul>
            <li><a href="#principal" class="cloak">Saltar navegacion</a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    <main id="principal">
        <h1>Estas en la seccion principal</h1>
        <p>Este es un ejemplo de cómo implementar un enlace para saltar la navegación principal y venir a la Seccion Principal.</p>
        <a href="#"> Ejemplo de link en seccion principal </a>
    </main>

</body>
</html>
```



Hacemos otro para saltar directo al footer


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skip Navegation</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <nav>
        <ul>
            <li><a href="#principal" class="cloak">Saltar navegacion</a></li>
            <li><a href="#footer" class="cloak">Saltar navegacion</a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>
    <main id="principal">
        <h1>Estas en la seccion principal</h1>
        <p>Este es un ejemplo de cómo implementar un enlace para saltar la navegación principal y venir a la Seccion Principal.</p>
        <a href="#"> Ejemplo de link en seccion principal </a>
    </main>
    <footer id="footer">
        <p>Este es el pie de página.</p>
        <p>Este es un ejemplo de cómo implementar un enlace para saltar la navegación y venir al pie de página.</p>
        <a href="#"> Ejemplo de link en footer </a>
    </footer>
</body>
</html>



# axe Accessibility Linter

Extension para trabajar mejor con accesibilidad. Nos ayuda bastante marcando errores o cosas a corregir.

