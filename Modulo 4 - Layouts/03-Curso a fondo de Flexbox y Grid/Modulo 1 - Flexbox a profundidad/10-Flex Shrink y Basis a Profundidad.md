# flex-shrink

Es lo contrario a flex-grow, es una propiedad que determina el **factor de decrecimiento** de los flex-items en el Main-Axis, en los casos en los que hay espacio faltante.

Es el caso contrario, cuando hay espacio faltante y los flex items se achican. 
flex-shrink reparte el espacio faltante.
Por ejemplo tenemos un contenedor en 400px y definimos 3 hijos flex items en 200px cada uno. Faltan 200px que se tienen que conseguir achicando los 3.
Por defecto `flex-shrink:1` en los 3; es decir se achican proporcionalmente. 1+1+1=3
200px / 3 = 66.6px . Que se va a achicar cada uno. Quedando cada uno en 200px-66.6= 133.33px.

Si definimos uno solo de los elementos en flex-shrink:2 los 200px se van a repartir entre 4. 1+1+2=4
200px / 4= 50px. Donde el que estaba en 2 se le restan 2/4. 200px = 100px
y a los otros se les restan 1/4. 200px - 50px = 150px.


*Se puede quitar la flexibilidad definiendo los elementos en flex-shrink:0*


---

# flex-basis

Indica el tamaño inicial del elemento antes que se aplique el flex-grow o el flex-shrink. Por defecto flex-basis:auto o 1.

Lo que hace es definir el tamaño del elemento dependiendo del Main-axis. 
Por ejemplo si al elemento flex-item le damos un flex-basis:50px. Aunque hayamos definido un widht:100px pesa mas el 50.
Es decir resulta util si cambiamos el Main-axis con flex-direction:column  .


**Con flex-shrink:0 le quitamos la propiedad a los elementos flex de adaptarse al contenedor**