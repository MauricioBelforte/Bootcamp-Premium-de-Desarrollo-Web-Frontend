# Anotaciones importantes a mi criterio

## Optimizar la usabilidad del teclado en la web.

Testear es muy simple, Tab va a para adelante y Shift Tab va para atras.

## Como escribir el texto

- Separar en parrafos.
- Los parrafos deben tener una buena separacion entre ellos, un margen entre ellos.
- Cada parrafo como maximo 6 o 7 lineas de texto.
- Limitar el ancho del texto, debe ser de 7 a 10 palabras, con mas complejiza la lectura.


## Animaciones

- No usar animaciones infinitas,3 o 4 veces y ya esta. 
- Dar la posibilidad de apagarlas.
- No usar mas de 3 o 4 apagados por segundo porque puede causar epilepsia.

Existe el media queries para apagar las animaciones. El usuario lo selecciona en el sistema operativo.


```css

@media (prefers-reduced-motion: reduce) {
    .grid{
        animation: none;
    }
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

# Crear historias de usuarios

Ponerse en el lado de una persona con tal discapacidad, imaginarse un problema. 
Puede un usuario con **tal discapacidad** hacer **tal cosa?**


# No eliminar el foco

A lo sumo se puede modificar.
Es como sacarle el cursor a una persona que usa el mouse.


## Armar el Skip to main content o Skip navegation.

Es un objeto que es invisible hasta que presionamos tab en el navegador. Lo que hace es mover el foco. 
Herramienta para saltar la navegacion.

Armar el Skip to main content o skip navigation significa implementar un enlace de accesibilidad en la página web que permita a los usuarios saltar directamente al contenido principal, evitando la navegación repetitiva como menús o encabezados. Este tipo de enlace es fundamental para mejorar la experiencia de usuarios que utilizan lectores de pantalla o navegan mediante teclado, ya que les permite acceder rápidamente a la información relevante sin tener que recorrer todos los elementos de navegación en cada página.

Generalmente, este enlace se coloca como el primer elemento interactivo en el HTML y suele estar oculto visualmente, pero se hace visible cuando recibe el foco del teclado. Así, cumple con las buenas prácticas de accesibilidad web y ayuda a que el sitio sea más inclusivo para todas las personas.



Sara Soueidan es una especialista en el tema de accesibilidad y esta es su web que habla sobre el foco.

https://www.sarasoueidan.com/blog/focus-indicators/#examining-the-accessibility-of-focus-indicators-in-popular-design-systems-and-ui-pattern-libraries


# Los colores por si solos no pueden ser el indicativo de algo

Si vamos a colocar colores para indicar algo, debe existir algun elemento mas que describa lo que queremos.



# No esconder objetos con margenes

Esconder con display:none.

Muchas veces escondemos objetos a los costados y eso molesta la navegacion por teclado.

# Utilizar los headings es decir los titulos

h1,h2,h3,h4 etc




# El atributo alt en las imagenes es obligatorio

*Si no colocamos el alt a veces va a leer el atributo src de una web y lee htt://www......*



```html

<img src="ejemplo.jpg" alt="Descripción de la imagen">

```


No colocar **Imagen de tal cosa** porque automaticamente el lector de pantalla ya lo dice, **Imagen de** por lo que nos quedaria **Imagen de imagen de tal cosa**


## Si la imagen no aporta nada colocar el alt vacio 

```html

<img src="ejemplo2.jpg" alt="">

```


## A veces no tiene que describir la imagen sino la accion. 

Ejemplos:

- En un icono de una lupa colocar Buscar. <img src="ejemplo2.jpg" alt="Buscar">
  
- En el logo colocar Ir al inicio o Ir a la home. <img src="ejemplo2.jpg" alt="Ir al inicio">





# Formularios e inputs

Trabajamos en un en el index.html


Para una persona que ve esto funciona. Pero...

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1></h1>
    <form action="enviar.js">
       Nombre: <input type="text">
       Email: <input type="email">
             
       <button type="submit">Enviar</button>
    </form>
</body>
</html>

```

Pero para alguien que no ve, necesitamos que haya una coneccion entre ese Nombre y el (input) campo donde ingresar los datos.

Existen 3 soluciones.

## Opcion 1
Usando una etiqueta label que encierre el nombre y el input

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1></h1>
    <form action="enviar.js">
        <label>
            Nombre: <input type="text">
        </label>
        <label>
            Email: <input type="email">
        </label>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

*Este metodo no es muy recomendable ya que si necesitamos darle estilos al Nombre: o al Email: no tenemos como seleccionarlo en css*


## Opcion 2
*Esta es la mejor opcion*

Relacionarlo con el id.
En el label colocar el atributo for con el mismo nombre que tiene el atributo id del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1></h1>
    <form action="enviar.js">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" >
        
        <label for="email">Email:</label>
        <input type="email" id="email">
        
        <button type="submit">Enviar</button>
    </form>
</body>
</html>

```

## Opcion 3 
Label invisible.
Ideal para diseños que no tienen label, solo inputs.

Por ejemplo la barra de busqueda de google.
Hay que ocultar el texto en el html.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1></h1>
    <form action="enviar.js">
       
        <input type="text" aria-label="Nombre" >
        
        <input type="email"aria-label="Email">
        
        <button type="submit">Enviar</button>
    </form>
</body>
</html>

```

*Todo lo que comience con aria-... es para lectores de pantalla*


# Vamos a armar un Skip Navegation (o Skip to content) en la carpeta correspondiente

