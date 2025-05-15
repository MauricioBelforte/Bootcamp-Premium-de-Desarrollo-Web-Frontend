# Animaciones

Inventamos un nombre (En la propiedad animation-name) en el elemento, y luego lo llamamos en @keyframes

.elemento{
    animation-name: cambia-color;
    animation-duration:1s;
}


Pódemos usar que va de from hasta to:

@keyframes cambia-color{
    from{
        transform: translate(0) scale(.5);
        background-color: crimson;
    }

    to{
        transform: translate(100%);
        background-color: salmon;
    }
}



O tambien en porcentajes:

@keyframes mover {
    0%{
        transform: translate(0) scale(.5);
        background-color: crimson;
    }
    25%{
        transform: translate(100%);
        background-color: salmon;
    }
    50%{
        transform: translate(100%, 100%);
        background-color: slateblue;
    }
    75%{
        transform: translate(0, 100%);
        background-color: teal;
    }
    100%{
        transform: translate(100%, 100%);
    }
}


## Tambien podemos colocar en el elemento
animation-timing-function: ease; /*Pueden usarse todas las mismas que en transition ease-in-out linear etc*/


## Tambien cuantas veces queremos que se ejecute la animacion
animation-iteration-count: 5; /*Puede usarse infinite*/


## Tambien tenemos la direccion, desde que punto parte la animacion.
Por defecto esta normal que seria el 0%.
animation-direction:reverse /*Puede usarse alternate, alternate reverse,etc*/


## Tambien tenemos delay
Cuanto tarda en realizarse la animacion

animation-delay:1s;


## Tambien tenemos fill mode,define lo que sucede antes y despues de que se ejecute la animacion, si se aplican antes o despues de que se aplique la animacion.
Es decir podemos decir en que momento se frena en los porcentajes
Por defecto esta en none.

animation-fill-mode: forwards /*Sirve para que una vez que termine se apliquen los estilos una vez que termine. Tambien esta both*/

## Define si una animacion esta en pausa o corriendo

animation-play-state:paused; o runing


## Srothand animation

animation: name duration timing-function delay iteration-count direction fill-mode;

