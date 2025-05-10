# Hacemos el header con nombre hero

**En este proyecto creamos un menu hamburguesa**

```html

<header class="hero">

    <nav class="nav ">

      <div class="nav__container container">

        <figure class="nav__figure">
          <img src="./images/logo.svg" class="nav__logo">
        </figure>

        <div class="nav__links" id="open">
          <a href="#" class="nav__link">How we work</a>
          <a href="#" class="nav__link">Blog</a>
          <a href="#" class="nav__link">Account</a>
          <a href="#" class="nav__link nav__link--cta">View plans</a>
        </div>

        <a href="#open" class="nav__hamburguer">
          <img src="./images/icon-hamburger.svg" class="nav__icon">
        </a>


      </div>

    </nav>

    <section class="hero__main container">

      <div class="hero__texts">

        <h1 class="title"> Humanizing your insurance.</h1>

        <p class="hero__paragraph">Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.</p>

        <a href="#" class="cta"> View plans</a>

      </div>

    </section>

  </header>

  ```



```css

.container {
    max-width: 1200px;
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
    padding: var(--padding-container);
}

.hero {
    background-color: var(--dark-violet);
    color: #fff;
    --padding-container: 0;
}

.nav {
    background-color: #fff;
}

.nav__container {
    /*Este es quien contiene el logo los enlaces y el menu hamburguesa*/
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}



.nav__links {
    display:none;

}

.nav__icon,
.nav__logo {
    display: block;
}

.hero__main {
    width: 100%;
}

/*Coloca la imagen como un pseudoelemento de hero__main antes de los textos*/
.hero__main::before {
    content: "";
    display: block;
    width: 100%;
    height: 370px;
    background-image: url('../images/image-intro-mobile.jpg');
    background-size: cover;
    background-position: center;
}



```