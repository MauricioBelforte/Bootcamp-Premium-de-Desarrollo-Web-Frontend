# Flujo del navegador

Por ejemplo si colocamos varios elementos h2:
- Se colocan uno debajo del otro.
- Cada uno ocupa su espacio
- Si desplazo un elemento , se desplaza el que le sigue debajo.

# Position
Nos permite cambiar el flujo de como se comportan los elementos.

Por defecto todos los elementos vienen con **position:static**.
Cualquier position distinta a static desbloquea 4 propiedades de desplazamiento.
top:
right:
bottom:
left:



# Resumen

## Relative
position:relative;
Se mueve pero sigue reservando su espacio.

## Absolute
position:absolute;
Se mueve pero no reserva mas su espacio.
Como no existe usa la posicion original del padre.

## Fixed
position:fixed;
Se mueve por todo el viewport y no reserva mas su espacio.


## Usos

- Si usamos un elemento con position:absolute. Al padre le tenemos que poner position:relative, aunque no lo movamos.





---

# Detallado

## Relative
position:relative; 
- Lo saca del flujo. 
- Desbloquea top: ,right: , bottom: ,left:
- Se mueve desde su posicion actual.
- **Sigue ocupado "en blanco" su espacio original**
- No modifica la posicion de los hermanos, los puede pisar. Se puede usar z-index para ponerlo por debajo del hermano.

## Absolute
position:absolute; 
- Lo saca del flujo.
-Desbloquea top: ,right: , bottom: ,left:
- Se mueve desde la posicion original del padre mas cercano, que tenga position distinta de static. Si no existe ese ancestro se posiciona en base al viewport.
- **No ocupa mas "en blanco" su lugar original**
- Si modifica la posicion de los hermanos, suben los de abajo ya que el deja de existir. Los puede pisar. Se puede usar z-index para ponerlo por debajo del hermano.

## Fixed
position:fixed;
- Lo saca del flujo.
- Desbloquea top: ,right: , bottom: ,left:
- Se mueve solo en el viewport.
- **No ocupa mas "en blanco" su lugar original**
- Si modifica la posicion de los hermanos, suben los de abajo ya que el deja de existir.

*El fixed se puede llegar a romper si a su padre contenedor le ponemos un transform:*