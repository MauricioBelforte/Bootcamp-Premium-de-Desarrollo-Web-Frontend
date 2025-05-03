# flex-wrap

Propiedad que define el comportamiento de los flex-items cuando su tamaño sumado sobrepasa el tamaño del Main-Axis.

Por defecto viene definido **flex-wrap: nowrap**.
Que significa que si los elementos hijos sobrepasan el tamaño del flex container, estos elementos se van a encoger.

Si lo definimos en **flex:wrap:wrap**; le indicamos que si los elementos ya no entran en el flex container se crea una nueva linea dependiendo de la direccion del eje principal.

Tambien tenemos la pripiedad **flex-wrap:wrap-reverse** que se va a generar una nueva linea en el Cross-Axis.

---

# flex-flow

Shorthand de las propiedades flex-direction y flex-wrap.

Ejemplos:
flex-flow: column wrap
flex-flow: row nowrap