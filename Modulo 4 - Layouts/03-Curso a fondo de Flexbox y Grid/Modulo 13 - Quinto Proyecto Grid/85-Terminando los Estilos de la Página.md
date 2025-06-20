


```css 

.gallery {
    display: grid;
    row-gap: 3em;
}

.gallery__cta {
    /*Esta es la la llamada a la accion del boton  See all*/
    place-self: center;
    order: 1;
    color: var(--black);
    border: 2px solid;
    font-size: 1.2rem;
    padding: .6em 3.8em;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.gallery__container {
    margin-top: 1em;
    display: grid;
    gap: 2em;
}


/*Esto ya lo hicimos en la clase anterior*/
/*
.gallery__picture {
    display: grid;
    grid-template-areas: "show";
}

 .gallery__picture::before {
    content: "";
    z-index: 10;
    grid-area: show;
    background-image:
        linear-gradient(to top,
            rgba(0, 0, 0, 0.517) 30%,
            rgba(0, 0, 0, 0.256));
}

.gallery__picture::after {
    content: attr(data-message) "";
    z-index: 10;
    grid-area: show;
    place-self: end start;
    text-transform: uppercase;
    color: #fff;
    font-family: var(--font-variant);
    font-size: 1.8rem;
    width: 30%;
    padding: 1rem;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: show;
}
 */



```


```html

  <footer class="footer">
    <section class="footer__container container">

      <img src="./images/logo.svg" class="footer__logo">

      <ul class="footer__links">
        <li class="footer__list">
          <a href="#" class="footer__link">About</a>
        </li>
        <li class="footer__list">
          <a href="#" class="footer__link">Careers</a>
        </li>
        <li class="footer__list">
          <a href="#" class="footer__link">Events</a>
        </li>
        <li class="footer__list">
          <a href="#" class="footer__link">Products</a>
        </li>
        <li class="footer__list">
          <a href="#" class="footer__link">Support</a>
        </li>
      </ul>

      <nav class="footer__nav">

        <a href="#" class="footer__social">
          <img src="./images/icon-facebook.svg" class="footer__icon">
        </a>
        <a href="#" class="footer__social">
          <img src="./images/icon-twitter.svg" class="footer__icon">
        </a>
        <a href="#" class="footer__social">
          <img src="./images/icon-pinterest.svg" class="footer__icon">
        </a>
        <a href="#" class="footer__social">
          <img src="./images/icon-instagram.svg" class="footer__icon">
        </a>

      </nav>

      <p class="footer__copy">© 2021 Loopstudios. All rights reserved.</p>


    </section>
  </footer>
 
```
 
 ```css

.footer {
    background-color: var(--black);
}

.footer__container {
    display: grid;
    grid-template-columns: max-content;
    justify-content: center;
    justify-items: center;
}

.footer__links {
    margin: 2.5em 0;
    display: grid;
    gap: 1.7em;
    padding: 0;
}

.footer__list {
    list-style: none;
}

.footer__link {
    color: #fff;
    text-decoration: none;
}

.footer__nav {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 2em;
}

.footer__copy {
    margin-top: 1.5em;
    color: var(--dark-gray);
}

 ```

