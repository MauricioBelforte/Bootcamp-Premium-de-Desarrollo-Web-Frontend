```css



.container {
    /* width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 80px 0;
    overflow: hidden; */
}

.hero {
   /*  min-height: 500px;
    background-image: url('../images/mobile/image-hero.jpg');
    background-position: center;
    background-size: cover; */
}

.nav {
    /*Aca definimos las variables close y hamburguer que deciden si esta visible close o hamburguer*/
    /*Si el target no esta presionado esta escondida la x y visible el hamburguesa*/
    /* --close: none;
    --hamburguer: block; */
    /*Aca definimos la variable transform para luego trasladar todo el nav para esconderlo completamente*/
    --transform: translate(-100%);

    /* display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "logo active";
    justify-content: space-between;
    padding: 45px 0 0; */
}

.nav:target {
    /*Aca defino si alguien toca el nav, activa este target y cambia las variables que usan el logo hamburguesa .nav__hamburguer y el logo de la x .nav__close*/
    /*Si presionamos activa la x y escunde el hamburguesa*/
    --close: block;
    --hamburguer: none;
    /*Aca definimos la variable transform para luego trasladar todo el nav a cero para que se vea completamente*/
    --transform: translate(0);
}

.nav__logo {
    z-index: 1;
}

.nav__hamburguer,
.nav__close {
    grid-area: active;
    place-self: center;
    cursor: pointer;
    z-index: 1;
}

.nav__hamburguer {
      /*Aca usamos la variable que esta en .nav o en .nav:target*/
      /*Al comienzo --hamburger:block esta visible*/
    display: var(--hamburguer);
}

.nav__close {
    /*Aca usamos la variable que esta en .nav o en .nav:target*/
    /*Al comienzo --close:none esta oculta*/
    display: var(--close);
}

.nav__img {
    display: block;
}

.nav__links {
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 500px;
    padding: 0;
    background-color: var(--black);

    display: grid;
    place-content: center start;
    gap: 2em;
    padding-left: 5%; */

    /*Aca trasladamos todo el nav dependiendo como esta definida la variable en .nav o en .nav:target*/
    transform: var(--transform);
    transition: transform .4s;
}

.nav__list {
    list-style: none;
}

.nav__link {
    color: #fff;
    text-decoration: none;
    font-size: 1.6rem;
    font-family: var(--font-variant);
    text-transform: uppercase;
}


.hero__text {
    padding: 120px 0;
}

.hero__title {
    max-width: 500px;
    color: var(--white);
    border: 2px solid;
    font-family: var(--font-variant);
    font-size: 3.5rem;
    padding: 2.3rem;
}


```
