# Selectores combinadores 

## Hermano siguiente o hermano adyacente

Selecciona exactamente el hermano de al lado.

.unElemento + .suHermanoAdyacente {

}

Una utilidad muy interesante es para hacer efectos. Por ejemplo darle un hover a unElemento y afectar a suHermanoAdyacente

.unElemento:hover + .suHermanoAdyacente {
    background-color:black; /*Y cambiamos el color de fonde por ejemplo*/
}



## Hermanos generales

Selecciona a todos los hermanos siguientes.

.unElemento:hover ~ .suHermanoAdyacente {
    transform:translate(100%) /*Y movemos todos sus hermanos menos el*/
}

---

# Pseudoclases

Los Pseudoclases comienzan con dos puntos :
Permiten crear estados.

## :hover 
Para hacer algo cuando pasamos el mouse encima, o en el celu cuando le damos un toque.

## :root 
Para definir las custom properties (las variables en css)

## :active 
Para cuando este activo el elemento, es decir mantener presionado.

## :target 
Para cuando un elemento esta apuntado. Es decir cuando un href de un a esta referenciando con #element a otro objeto con id= element y ese elemento tiene la clase que le pondremos .clase:target

## :focus 
Cuando esta activo un input. Al tocar un placeholder por ejemplo, cuando parpadea la barra | 

Por ejemplo una utilidad para hacer algo con un hermano adyacente 

.unElemento:focus + .suHermanoAdyacente {
    /*Y aca modificar algo*/
}


## :checked 
Cuando un input de tipo radio o check esta activo. Es decir cuando esta con la palomita o el punto marcado

Por ejemplo una utilidad para hacer algo con un hermano adyacente 

.unElemento:checked + .suHermanoAdyacente {
    /*Para validar un input por ejemplo y cambiamos el color*/
}


---

# Pseudoelementos

Similares a las pseudoclases pero comienzan con 4 puntos ::
Permiten crear estilos extras en nuestro HTML

## ::before y ::after
Permite crear elementos en el html
Se colocan como las pseudoclases.
::before lo crea antes y ::after lo crea despues

Ej

.elemento::after {
    content:"Soy Maury"
}

Esto crea un elemento al lado del que tenia en el html con esa clase .elemento 
Le podemos colocar propiedades como display:block o flex etc, pero no lo podemos seleccionar.

El content podria estar vacio tambien 

.elemento::before {
    content:""
}

