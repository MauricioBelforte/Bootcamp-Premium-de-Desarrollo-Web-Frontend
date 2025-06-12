# min-content y max-content

Son valores dinamicos para la creacion de tracks. 
Los vamos a usar para definir el tamaño de las filas y de las columnas.

Se pueden utilizar en las siguientes propiedades...

grid-template-colums:, grid-template-rows:, grid-auto-columns: ,grid-auto-rows:; 


`Es mas comun usarlo en grid-template-colums:, grid-auto-columns:;`

Anteriormente usabamos grid-template-columns: repeat(3,1fr) o grid-template-columns:1fr 2fr 3fr. Y con esto creabamos las filas y columnas del grid. Ahora con max-content y min-content es igual , **es como una unidad de medida**.

max-content va a crear columnas o filas con el maximo contenido posible.
min-content va a crear columnas o filas con el minimo contenido posible.


grid-template-colums: max-content min-content;
Crea 2 columnas. La primera ocupa el ancho maximo del contenido. La segunda ocupa el ancho minimo del contenido.

grid-template-rows: max-content min-content;
Crea 2 filas. La primera ocupa el alto maximo del contenido. La segunda ocupa el alto minimo del contenido. 


Ejemplo en columnas:
```css
.grid{
grid-template-colums: max-content min-content;
}
```

Crea 2 columnas. 
La primer columna se ensancha para que la columna ocupe el ancho maximo de su contenido, determinado por el texto del html.
La segunda columna se angosta para que la columna ocupe el anchi minimo de su contenido, determinado por el texto del html (por la palabra mas larga del html).


![max-content y min-content en grid-template-colums:](<imagenes/max-content y min-content.png>)