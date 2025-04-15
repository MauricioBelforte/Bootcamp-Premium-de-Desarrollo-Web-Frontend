# Posicionamiento

## sticky 

Es una mezcla entre relative y fixed.
Es relative hasta que el scroll sobrepasa un punto  y pasa a ser fixed.

Ej: Le colocamos a una barra de navegacion:

.nav{
    background-color: purple;
    padding: 30px 5%;

    position: sticky; /*Para pegarlo luego del scroll*/
    top: 0;
}

Cuando scrolleamos y nuestro elemento, en este caso nav, pasa por el top:0 se activa y se queda fixed.
Cuando pasa por cero esa es su posicion original.

Cuando scrolleamos en inversa si nuestro elemento pasa el cero se despega. 
Vuelve a pasar por su posicion 0 original