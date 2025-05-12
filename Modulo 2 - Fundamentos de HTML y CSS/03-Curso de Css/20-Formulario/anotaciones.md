Vamos a analizar estos elementos del formulario

<input type="text" id="user" class="form__input" placeholder=" ">
<label for="user" class="form__label">Usuario:</label>
<span class="form__line"></span>


El input es el campo donde vamos a ingresar los datos

El label es el nombre al lado del campo. En este caso esta arriba

Y en el span vamos a pintar una linea


En la clase .form__label 

.form__label{
    color: var(--color);
    cursor: pointer; /*para mostrar la manito*/
    position: absolute; /*para sacarlo del flujo*/
    top: 0; /*Para moverlo*/
    left: 5px; /*Para moverlo*/
    transform: translateY(10px);
    transition: transform .5s, color .3s;
}



# Placeholder 
Es un texto que se muestra en un formulario cuando no hay ningún valor ingresado. 
Sirve como una pista para el usuario sobre el tipo de dato que se espera ingresar. 


# Pseudoclase :placeholder-show
Sirve para saber si existe un placeholder.
Si existe se puede hacer algo.
Si nos paramos en el input se borra y deja de existir.

Por eso en esta linea:
<input type="text" id="user" class="form__input" placeholder=" ">
Deja un espaciado " ", para que exista por lo menos el placeholder vacio, para que no se vea nada pero que este ahi.

# Pseudoclase :not()
Para negar


## .form__input:not(:placeholder-shown)
Combinandolas en CSS
Significa si no existe ningun placeholder hacer algo.

Entonces se activa cuando nos paramos encima del input para escribir. Ya que el placeholder (en este caso el espacio vacio " ") deja de existir.



## .form__input:not(:placeholder-shown)+.form__label
Ejemplo completo:
Si no existe el placeholder, vamos a modificar el hermano adyacente. 