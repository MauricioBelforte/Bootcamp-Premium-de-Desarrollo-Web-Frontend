# box-shadow

Genera una copia exacta del elemento que tenemos. 

box-shadow: ejex ejey difuminado tamaño color;


box-shadow: 10px 20px;

El primer parametro indica que se mueve a la derecha.
El segundo parametro lo mueve hacia abajo.
Si el valor es negativo se mueve en sentido contrario.

Podemos agregar un tercer parametro que es el blur , que representa el difuminado.

box-shadow: 10px 20px 10px;

Podemos agregar un cuarto valor que es el esparcimiento, es decir el tamaño de la sombra. 

box-shadow: 10px 20px 10px 20px;

Y por ultimo el color 

box-shadow: 10px 20px 10px 20px blue;

---

# border-radius

Para redondear un elemento

Podemos hacer varios 

/* border-top-left-radius: 50px;
 border-top-right-radius: 100px;
 border-bottom-right-radius: 10px;
 border-bottom-left-radius: 30px; */


O usando el shorthand

border-radius: 50px 100px  ; desde el borde superior izquierdo hasta el borde inferior izquierdo, siguiendo las agujas del reloj.
