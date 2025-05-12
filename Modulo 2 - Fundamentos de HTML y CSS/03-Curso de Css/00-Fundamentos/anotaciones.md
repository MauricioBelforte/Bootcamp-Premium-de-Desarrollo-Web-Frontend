# ¿Qué es un shorthand en CSS?

Un **shorthand** en CSS es una forma abreviada de escribir propiedades que normalmente requieren múltiples líneas. En lugar de definir cada propiedad por separado, puedes combinarlas en una sola declaración, lo que hace que el código sea más compacto y fácil de leer.

## Ejemplo

En lugar de escribir:

```
margin-top: 10px;
margin-right: 15px;
margin-bottom: 20px;
margin-left: 25px;
```

Puedes usar un **shorthand**:

```
margin: 10px 15px 20px 25px;
```

## Otros shorthands útiles

Algunas otras propiedades que admiten shorthand incluyen:

- `padding`: permite definir el espacio interno de un elemento en una sola línea.
- `border`: combina propiedades como ancho, estilo y color del borde.
- `font`: reúne varias propiedades relacionadas con la fuente en un solo valor.
- `background`: permite definir color, imagen, posición y otros aspectos de fondo en una línea.



---


# Colapso de margenes

Dos margenes que se encuentran verticalmente se fusionan para formar un solo margen. Esto siempre sucede en el primer elemento y el ultimo elemento anterior. Se soluciona colocando un borde o un padding en el padre


---

**box-sizing: content-box;**  Es el valor por defecto,  el tamaño del padding y el borde se suman al width y height nuestro elemento. Es decir si colocamos width: 100px y padding: 50px, 150px es el ancho total de la caja.

**box-sizing: border-box;** Toma el valor total del elemento incluyendo el padding y del borde. Es decir si colocamos width: 100px y padding: 50px , 100px ese es el ancho total de la caja.


Para no tener que colocarselo a cada caja o div , se lo colocamos al selector universal

* {
    box-sizing: border-box;
  }

.caja {
    /* Si queremos cambiar la propiedad se lo hacemos a la caja*/
    box-sizing: content-box;
}



# User agent
Los estilos que tiene por defecto el navegador. Margenes, fuentes.
Si queremos cambiarlo podemos usar el selector universal. Quedando: 


* {
    box-sizing: border-box;
    margin:0;
  }


---

display: block;
Ocupa todo el ancho de la pantalla


display : inline;
Se coloca uno al lado del otro mientras halla espacio