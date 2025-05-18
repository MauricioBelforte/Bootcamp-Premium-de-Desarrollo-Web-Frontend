# Lineas Negativas en Grid

Por ejemplo si tenemos 5 lineas en columnas tenemos -5 lineas en columnas. Siempre el mismo numero. Se puede observar en cada imagen que venimos trabajando.


![Lineas negativas](<imagenes/Lineas negativas.png>)

Se ubican en sentido contrario.
El 1 va con el -13, y el 13 con el -1.


## Ejemplo de utilidad

Si queremos que un item ocupe desde la linea que queremos hasta el final.

Hasta ahora, utilizamos en el contenedor padre...

grid-template-columns: repeat(5,1fr)

Pero si cambiamos el 5 por un 7 ya vamos a tener mas columnas y nuestro item si lo definimos...

grid-column: 1/5 ya no va a llegar al final.

![No llega al final](<imagenes/Ej lineas negativas 1.png>)


Entonces para eso estan los numero negativos.

`Si queremos referenciar siempre a la ultima cambiamos ese -5 por un -1 en el grid-item`

grid-column: 1 / -1;

![Siempre llega al final](<imagenes/Ej lineas negativas 2.png>)



*Asi tambien podemos referencia a las otras lineas negativas, la anteultima, la penultima*


## Combinando con span

grid-column: 1 / -1;
Aca le decimos que llegue al final en columnas desde la primer linea de columnas.

grid-row: span 2 / -2;
Aca le estamos diciendo que ocupe 2 tracks en filas desde la penultima linea.



# Conclusion para que sirven las lineas negativas

Por mas que cambiemos la cantidad de columnas o filas en las propiedades grid-template-column: o grid-template-rows: , usando los negativos no dependemos de saber cuantas filas o columnas van a existir. Le decimos que llegue directamente hasta la ultima con -1 o hasta la penultima con -2 por ejemplo.