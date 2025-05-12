# BEM Block Element Modifier

Bloque Elementos Modificadores
Es una metodologia para nombrar clases en HTML, es decir una convencion, una nomenclatura.

## Bloque
No requiere de otros para existir.
Por ejemplo:
header,menu,galeria,footer,container.

Las clases se nombran tal cual el nombre:
header,menu,galeria,footer,container.

Ej HTML:
<section class="menu"></section>


## Elementos
Son los que estan dentro de un bloque, son los que necesitan el bloque para existir.

Ejemplos: una imagen , un enlace

Las clases se nombran con el nombre del bloque mas el del elemento unidos por 2 guiones bajos __

header__title,menu__item,galeria__img,footer__img

Ej HTML:
<section class="gallery">
    <img src" class="gallery__img">
</section>


## Modificador
Se usan para representar una caracteristica en el elemento o el bloque.
Se nombran con el nombre del elemento o bloque seguido por dos guienes medios -- y al final la caracteristica que queremos inventar.

Ejemplo: "boton--active" "header--rojo"

Ej HTML:
<button class="btn">Dame click</button>
<button class="btn btn--active">Dame click</button>
