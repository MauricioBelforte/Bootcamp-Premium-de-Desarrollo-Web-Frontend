# Custom Properties

**Son las variables en Css** 

Se declara una pseudoclase root, que es como la etiqueta html pero con mas especificidad, y se colocan las variables adentro.

Se colocan dos guiones medios al comienzo -- en cada variable

:root{
    --pablito: 2px solid red;
    --bordes-colores: 3px solid black;
}


Y cuando se las quiere utilizar, hay que llamarlas dentro de var();

Ejemplo:

.title{
    border: var(--bordes-colores)
}

Si no encuentra la variable se puede colocar una coma , y otros valores

.title{
    border: var(--bordes-colores, 10px solid black)
}


Se puede pisar el valor de esa variable, en otro selector.

.container {
    --bordes-colores: 5px dash yellow;
}

Y cambio el valor de la variable para container y para todos sus hijos.