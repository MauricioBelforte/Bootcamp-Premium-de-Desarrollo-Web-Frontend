# Vamos a amimar el menu hamburguesa

```html


        <a href="#open" class="nav__hamburguer">
          <img src="./images/icon-hamburger.svg" class="nav__icon">
        </a>

        <a href="#" class="nav__hamburguer nav__hamburguer--last">
          <img src="./images/icon-close.svg" class="nav__icon">
        </a>

```



```css

.nav__links {
    position: absolute;
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
    background-color: #000;
    gap: 3em;
    clip-path: circle(0% at top left);

    transition: .4s clip-path;
}

.nav__links:target {
    clip-path: circle(150% at top left);
}

.nav__links:target~.nav__hamburguer--last {
    /*Selecciono al hermano cuando se hace click y lo muestro*/
    display: block;
}


.nav__hamburguer--last {
    /*Aca estaba escondido el hermano que seria la X del menu hamburguesa. Se posiciona encima del menu hamburguesa pero se oculta*/
    display: none;
    position: absolute;
    right: 5%;
    top: 24px;
}


@media (min-width:768px) {
    /*Esto se agrega en el media queries para corregir problemas del menu hamburguesa en la version escritorio*/
    .nav__links:target {
        clip-path: unset;
    }

    .nav__links:target~.nav__hamburguer--last {
        display: none;
    }

    .nav__links {
        display: flex;
        gap: 3em;


        position: unset;
        flex-direction: row;
        padding-top: 0;
        background-color: #fff;
        clip-path: unset;
        transition: unset;
    }

}

```
