# flex

flex es el shorthand de flex-grow flex-shrink y flex-basis en ese orden respectivamente.


Ejemplo:

flex: 1 2 auto
Que significa:
flex-grow:1;
flex-shrink:2; 
flex-basis:auto;


Tambien se puede utilizar un solo valor en el shorthand.

Ejemplo 2:

flex:auto;
Que significa:
flex-grow:1;
flex-shrink:1; 
flex-basis:auto;


Ejemplo 3:

flex:1;
Que significa:
flex-grow:1;
flex-shrink:1; 
flex-basis:0;


Ejemplo 4:

flex:none;
Que significa:
flex-grow:0;
flex-shrink:0; 
flex-basis:auto;


---

# align-self

Permite alinear los elementos en el Cross-Axis. Pero a diferencia del align-items este se coloca en los elementos hijos individualmente.

`align-self: auto`  
Toma el valor de `align-items` del contenedor padre.

`align-self: flex-start`  
Alinea el elemento al inicio del eje transversal.

`align-self: flex-end`  
Alinea el elemento al final del eje transversal.

`align-self: center`  
Centra el elemento en el eje transversal.

`align-self: stretch`  
Estira el elemento para llenar el eje transversal.

`align-self: baseline`  
Alinea el elemento con la línea base de su contenido.


*No existe una propiedad para alinear elementos sueltos pero en el eje principal, es decir no existe un justify-self. Para estos casos se puede utilizar un margin-left:auto un margin-right:auto*

