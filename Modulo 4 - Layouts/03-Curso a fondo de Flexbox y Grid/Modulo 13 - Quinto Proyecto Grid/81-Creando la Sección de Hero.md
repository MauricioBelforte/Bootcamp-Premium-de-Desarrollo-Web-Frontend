# Creamos el HTML

```html

 <header class="hero">

    <nav class="nav container" id="nav">

      <img src="./images/logo.svg" class="nav__logo">

      <ul class="nav__links">
        <li class="nav__list">
          <a href="#" class="nav__link">About</a>
        </li>
        <li class="nav__list">
          <a href="#" class="nav__link">Careers</a>
        </li>
        <li class="nav__list">
          <a href="#" class="nav__link">Events</a>
        </li>
        <li class="nav__list">
          <a href="#" class="nav__link">Products</a>
        </li>
        <li class="nav__list">
          <a href="#" class="nav__link">Support</a>
        </li>
      </ul>

      <a href="#" class="nav__close">
        <img src="./images/icon-close.svg" class="nav__img">
      </a>
      

      <!-- Aca referenciamos al id de nav cuando toquemos el menu hamburguesa -->
      <a href="#nav" class="nav__hamburguer">
        <img src="./images/icon-hamburger.svg" class="nav__img">
      </a>

    </nav>

    <div class="hero__text container">
      <h1 class="hero__title">Immersive experiences that deliver</h1>
    </div>

  </header>

  ```


```css


.container {
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 80px 0;
    overflow: hidden;
}

.hero {
    min-height: 500px;
    background-image: url('../images/mobile/image-hero.jpg');
    background-position: center;
    background-size: cover;
}

.nav {
    /*Aca definimos las variables close y hamburguer que deciden si esta visible close o hamburguer al comienzo*/
    --close: none;
    --hamburguer: block;


    display: grid;
    grid-template-columns: max-content max-content;
    /*Aca creo 2 areas la priera el logo la segunda dinamica que va a ser del menu hamburguesa o el de cerrar*/
    grid-template-areas: "logo active";
    justify-content: space-between;
    padding: 45px 0 0;
}


.nav__logo {
  /*Aca le ponemos 1 para que se vea junto a los .nav__links */
    z-index: 1;
}

.nav__hamburguer,
.nav__close {
  /*Aca le estamos diciendo que los 2 elementos .nav__hamburguer y .nav__close ocupan la misma area active, estan superpuestos */
    grid-area: active;
    place-self: center;
    cursor: pointer;
    z-index: 1;
     /*Aca le ponemos 1 para que se vea junto a los .nav__links */
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
    position: absolute;
    /*Aca hacemos que ocupe el 100% del viewport */
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
    padding-left: 5%;

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


```
