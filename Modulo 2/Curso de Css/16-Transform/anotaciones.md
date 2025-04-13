# Flujo del Navegador

 Como estan definidos los ejes en Css

![alt text](<Flujo del navegador (1).png>)


# Transform
Permite rotar, trasladar, sesgar


## translate

.element {
   transform:translateX(100px) /*Lo mueve a la derecha*/
   transform:translateX(-100px) /*Lo mueve a la izquierda*/
   
   transform:translateY(100px) /*Lo mueve hacia abajo*/
   transform:translateY(-100px) /*Lo mueve hacia arriba*/

}

Si colocamos % en vez de px, se refiere al tamaño que tiene


Si queremos trasladar algo en los 2 ejes, debemos colocarlas juntas asi 

.element {
      transform:translate(100px 100px) 
}


## rotate
Para rotarlo

transform: rotate(360deg);

/*deg son grados*/


## scale
Para agrandar o achicar los elementos

transform: scaleX(1.3)
transform: scaleY(1.3)
transform: scale(2) /*Varia en los dos ejes*/


## skew
Para deformarlo en grados

transform: skewX(20deg);
transform: skewY(40deg);

---

Ejemplo integrador:
**Hay que escribir todas las transformaciones juntas para que no se pisen**

transform: translate(100px,20px) scaleX(2) rotate(90deg) ;