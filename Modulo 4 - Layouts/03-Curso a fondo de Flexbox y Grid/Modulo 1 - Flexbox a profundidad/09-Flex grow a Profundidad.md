# flex-grow

Es una propiedad de los flex items que define el **factor de crecimiento** de estos items.
La propiedad flex-grow se encarga de distribuir el espacio sobrante en el Main-Axis.
Por defecto esta desactivado `flex-grow:0`.


Cuando usamos flex, por ejemplo **el contenedor** tiene 400px y definimos 3 hijos **flex items** en 100px cada uno, sobran 100px que quedan en blanco.
Entonces la propiedad flex-grow nos ayuda a decir la proporcion que tendra cada hijo flex item con respecto a otro hijo flex item. Es la proporcion de crecimiento de los flex items.
Por defecto flex-grow:0; es decir ninguno se lleva el espacio en blanco.
Pero si en cada elemento colocamos un flex-grow:1 se reparten esos 100px entre los 3. Quedando cada elemento en 133.33px.

En el caso de definir 2 hijos con flex-grow:1, y el otro flex item en flex-grow:2; Mirando en fracciones tenemos 1+1+2=4. Entonces el que esta en 2 se lleva 2/4 

# Detalles:

*Debe haber espacio disponible, ya que si usamos por ejemplo un justify-content:center; este no tendra efecto ya que el flex-grow se lleva ese espacio disponible*

*Si tenemos items unos mas grandes que otros por defecto, es decir no le definimos ancho ni alto, se adaptan al contenido y ahi el flex grow no define el tamaño total de cada elemento.* *Para este caso se puede agregar la propiedad `flex-basis:0` para que todos los elementos queden del mismo tamaño*

