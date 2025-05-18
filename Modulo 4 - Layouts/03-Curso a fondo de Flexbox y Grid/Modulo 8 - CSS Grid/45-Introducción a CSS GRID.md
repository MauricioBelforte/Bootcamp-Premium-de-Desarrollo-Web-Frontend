# ¿Qué es CSS GRID? 

![Css Grid](<imagenes/Css Grid.png>)

CSS Grid Layout (Sistema de cuadrículas) es el sistema de diseño más poderoso disponible en CSS. Esto gracias a su sistema bidimensional, lo que significa que puede manejar tanto columnas como filas, a diferencia de flexbox, que es en gran medida un sistema unidimensional. 


## Grid container 

![Grid container](imagenes/GridContainer.png)

De la misma manera que en flexbox, para poder utilizar css grid, necesitamos un contenedor, a este contenedor se le denominará grid-container

![Grid Container](<imagenes/Grid Container.png>)


## Grid Item

![Grid Item](imagenes/GridItem.png)

Teniendo creado un grid-container. es muy importantes saber, que los hijos directos del grid-container se les conoce como Grid-items. 

![Grid Item](<imagenes/Grid Item.png>)


## Filas y Columnas 

![Filas y Columnas](imagenes/FilasYColumnas.png)

Debido a que CSS Grid, trabaja con un sistema bidimensional, se usarán filas y columnas, las filas (rows) son horizontales. las columnas (columns) verticales. Un ejemplo es una hoja de cálculo en Excel. 

![Filas y Columnas](<imagenes/Filas Y Columnas.png>)


## Grid Cell (Celda) 

![Grid Cell](imagenes/GridCelda.png)

Las celdas o también llamadas Grid-cells son la parte más pequeña de la Grid. Por defecto cada grid-item se va a posicionar en una celda de la grid. (La suma de la celdas es la Grid)


![Grid Cell](<imagenes/Grid Celda.png>)



## Grid Lines (Líneas) 

![Grid Lines](imagenes/GridLines.png)

Las cuadrículas están compuestas por líneas. líneas (column-grid-lines) y horizontales (row-grid-lines). 

Las lineas azules en filas las lineas rosas en columnas.

![Grid Lines](<imagenes/Grid Lines.png>) 


La linea azul representa a la fila , la rosa representa la columna, la suma forma la grid.

![Grid Lines](imagenes/GridLines2.png)

Las lineas se enumeran

![Lines Enumeradas](imagenes/GridLines3.png)

Podemos posicionar el elemento en base al numero de lineas

![Grid Lines posicionado](imagenes/GridLines4.png)


# Grid tracks 

![Grid Tracks](imagenes/GridTracks.png)

Se le conoce Grid track, al espacio entre dos grid lines adyacentes, también se les conoce como filas y columnas.

![Grid Tracks](<imagenes/Grid Tracks.png>)

# Grid area 

![Grid Area](imagenes/GridArea.png)

Es el espacio entre cuatro grid lines, un grid área puede estar formado por el número que sea de celdas, pero un grid área siempre debe ser rectangular o cuadrado.

![Grid Area](<imagenes/Grid Area.png>)


Referencia: 

https://css-tricks.com/snippets/css/complete-guide-grid/

