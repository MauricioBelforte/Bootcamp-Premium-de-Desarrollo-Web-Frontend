Para poder alinear elementos en el eje secundario, es decir el Cross-Axis, podemos utilizar la propiedad `align-items`. Tiene que haber espacio disponible.

# align-items

Por defecto en flexbox se define `align-items: stretch`.
Es decir que estira los elementos por todo el Cross-Axis, eso quiere decir que si no le damos altura ocupa todo el contenedor en el eje secundario.


`align-items: flex-start;` // Manda los elementos al comienzo del Cross-Axis.
`align-items: flex-end;` // Manda los elementos al final del Cross-Axis.
`align-items: center;` // Centra los elementos en el Cross-Axis.
`align-items: baseline;` // Hace que los elementos se alineen en refefencia a la linea base del texto en el Cross-Axis.


---

# align-content

Cuando definimos flex-wrap:wrap. Y cuando se ha desbordado.
Se habilita esta propiedad para modificar el espacio intermedio entre elementos. 
Por defecto en flexbox se define `align-content: stretch`.

Tenemos las mismas propiedades que en justify-content

`align-content: flex-start;` // Empaqueta los elementos y los manda al comienzo del Cross-Axis.
`align-content: flex-end;` // Empaqueta los elementos y los manda al final del Cross-Axis.
`align-content: space-around;` // Distribuye el espacio sobrante entre los elementos y los bordes del contenedor de manera uniforme, dejando espacio alrededor de cada fila.
`align-content: space-evenly;` // Distribuye el espacio sobrante de manera uniforme entre las filas y los bordes del contenedor, asegurando que el espacio entre filas y bordes sea igual.
`align-content: space-between;` // Distribuye el espacio sobrante de manera uniforme entre las filas, dejando los bordes del contenedor sin espacio adicional.

