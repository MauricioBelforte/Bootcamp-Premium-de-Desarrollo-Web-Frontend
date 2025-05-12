# Transition
Es una propiedad que que permite un cambio de un estado a otro.
Es una de las 2 formas de animar los elementos.

transition:
Esta es un shorthand, vamos a ver de a una.

## transition-property:all;

Especifica las propiedades a las que se le va a aplicar la transicion. Por defecto esta en all. No es recomendable porque consume muchos recursos. Lo ideal es animar solo la propieadad. 
Por ejemplo:
transition-property:background-color,transform;

## transition-duration:1s;
Es el tiempo que tarda en aplicar el cambio.Se mide em ms (milisegundos) o s (segundos)


Un truco para cuando queremos mover un elemento con un :hover es colocar el elemento dentro de un contenedor y aplicar el hover a su contenedor, pero mover el hijo


.element{
    transition-property:transform;
    transition-duration:1s;
}

.container:hover .element{
    transform:translate(200px);
}


## transition-timing-function:ease;

Define la curva de la transicion entre el estado inicial y final. Por defecto esta en ease.

Tenemos las siguientes propiedades:

ease (Aumenta en la mitad y disminuye al final)
ease-in (Comienza lento y aumenta progresivamente)
ease-out (Comienza rapidamente y disminuye con el tiempo)
ease-in-out (Comienza lento y aumenta progresivamente y luego disminuye)
linear (Es constante)



## transition-delay:0s;

El tiempo de espera para que una transition se ejecute. Esta en s o ms. Por defecto esta en 0s.



## transition:

Vamos a ver el shorthand. No hay un orden obligatorio, solo hay que colocar una propiedad al lado de la otra. Lo unico que hay que cumplir es que el primer tiempo es para duration y el segundo para el delay.

El unico que hay que poner si o si es el transition-duration:


transition:duration transform function;

Ej:
transition: 1s transform ease-in 2s;
transition: 1s transform ease 2s;
transition: 1s ease-in-out transform ;


---


