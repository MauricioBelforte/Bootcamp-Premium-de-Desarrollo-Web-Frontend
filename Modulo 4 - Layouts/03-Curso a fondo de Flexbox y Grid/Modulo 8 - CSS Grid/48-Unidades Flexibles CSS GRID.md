# Funcion repeat()

`Se coloca en el contenedor padre, es decir donde colocamos grid-template-columns: o grid-template-rows:`

Si queremos escribir por ejemplo 20 columnas iguales. Seria tedioso colocar:

grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%.......

La funcion repeat(a,b) e puede utilizar en grid-template-columns y grid-template-rows.
El primer argumento a define la cantidad de valores que queremos crear y el segundo b el tamaño de cada elemento.

grid-template-columns: repeat(3,20%);
grid-template-rows: repeat(6,25%);

## Ejemplos con algunas variantes

- Ej1:
grid-template-columns: repeat(3,20%) 40%;
/*Esto crea 3 columnas del 20% y una cuarta columna de 40%*/

grid-template-rows: repeat(6,25%);


- Ej2:
grid-template-columns: repeat(2,40% 10%);
/*Esto lo que hace es 40% 10% 40% 10%*/
grid-template-rows: repeat(6,25%);


- Ej3:
grid-template-columns: repeat(3,15% 10%);
/*Esto lo que hace es 15% 10% 15% 10% 15% 10%*/
grid-template-rows: repeat(6,25%);

- Ej4: Se pueden poner mas de dos medidas despues de la coma.
grid-template-columns: repeat(3,15% 10% 5%);
/*Esto lo que hace es 15% 10% 5% 15% 10% 5% 15% 10% 5%*/
grid-template-rows: repeat(6,25%);


## Unidad fr

Que sirve para dividir el espacio disponible en fracciones.

Por ejemplo si queremos dividir el espacio en 3 columnas iguales, hasta ahora hariamos:

grid-template-columns: repeat(3,33.33%);

Sin embargo quedaria un pequeño espacio sin utilizar. Para esto es que nos serviria la unidad fr, ya que evitariamos tener que dividir el elemento por nuestra cuenta.

Se utiliza de la siguiente manera:

grid-template-columns: repeat(3,1fr);

Que seria lo mismo que hacer:

grid-template-columns: 1fr 1fr 1fr;

Cada elemento va a tomar una fraccion de esas 3 fracciones.


### Ejemplo practico 1

Queremos crear un grid con 4 columnas, que la primer columna ocupe la mitad y la otra mitad tenga 3 columnas.

Hasta el momento hariamos:

grid-template-columns: 50% repeat(3,16%);

Con fr podriamos hacer:

grid-template-columns: 50% 1fr 1fr 1fr;

**fr toma el espacio disponible que dajan los demas traks**

### Ejemplo practico 2

grid-template-columns: 100px 2fr 1fr 1fr;

En este ejemplo creamos 4 columnas donde la primera ocupa 100px, y el resto se divide en 3 partes. La segunda columna se lleva 2 partes la 3 columna se lleva una parte y la 4 columna tambien una parte.
