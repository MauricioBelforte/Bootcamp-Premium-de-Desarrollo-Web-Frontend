# Ejemplo 2 Card

# Propiedad overflow
En las clases

.elemento {
    /*overflow:hidden; Se esconde lo que sobresale*/
    overflow:scroll;/*Genera una barrita de scroll*/
}

# Propiedad resize
Permite agrandar un elemento con el mouse
resize:both

# width:max-content
Para que el ancho seal el del texto de adentro, o su contenido


---

# Display block o display inline

Los botones y los anchor a estan definidos con display inline.
Eso quiere decir que no ocupan todo el ancho, se pueden colocar uno al lado del otro. No toma las propiedades width ni height.

Si le cambiamos la propiedad de los botones a block.
Los botones se pondrian uno debajo del otro porque block ocupa el 100% del ancho.


## inline-block
Por eso le colocamos a los botones la propiedad inline-block.
Que permite colocar un boton al lado de otro. Y ademas nos permite darle un width y un height.

---

# Ejemplo 3

# Colapso de margenes.
Problema entre los margin.
Pasa entre el ultimo hijo y el primer hijo siguiente.

## Caso 1
Se fusionan los margenes verticales. Queda el mas grande.
Por ejemplo ponemos 2 h1 uno arriba y el otro abajo. El h1 de arriba con margin-bottom:60px y el h1 de abajo con margin-top:50px. 
Si usamos el inspector del navegador, el margen total entre los 2 es de 60px.

## Caso 2
Colocamos un h1 dentro de un contenedor.Al h1 le damos un margin-top  al comienzo de la pagina. El margin se lo pone al contenedor en vez de solo al h1. Se soluciona colocando un borde o un padding 

