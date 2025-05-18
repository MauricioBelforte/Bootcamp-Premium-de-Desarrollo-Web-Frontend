# Repaso

Algoritmo de ubicacion de CSS Grid.

Primero se ubican los elementos que se posicionan con propiedades, como grid-column: ; grid-row; ; grid-area: ;.

Los elementos que tienen una linea span sin una linea definida ya sea de inicio o de final, pueden cambiar su posicion de la grid de acuerdo al flujo .

Despues se ubican de acuerdo al orden del html.
Si el flujo es en filas grid-auto-flow:row; las filas se ubican una debajo de la otra. 
(Sin definir grid-template-columns: ni grid-template-rows:)


![Solo definiendo grid-auto-flow:row](imagenes/SOLO-grid-auto-flow-row.png)

Si el flujo es en columnas grid-auto-flow:column; las columnas se ubican una a la derecha de la otra. 
(Sin definir grid-template-columns: ni grid-template-rows:)

![Solo definiendo grid-auto-flow:column](imagenes/SOLO-grid-auto-flow-column.png)


