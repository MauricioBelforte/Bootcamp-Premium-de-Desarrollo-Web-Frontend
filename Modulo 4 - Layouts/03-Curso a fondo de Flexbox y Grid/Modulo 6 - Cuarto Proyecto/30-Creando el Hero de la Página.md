# Creamos el header hero

```html
  <header class="hero">

    <section class="hero__container container">
      
      <figure class="hero__picture">
        <img src="./images/logo.svg" class="hero__img">
      </figure>

      <h1 class="hero__title">A history of everything you copy</h1>
      <p class="hero__paragraph">Clipboard allows you to track and organize everything you
        copy. Instantly access your clipboard on all your devices.</p>

      <div class="buttons">
        <a href="#" class="buttons__cta">Download for iOS</a>
        <a href="#" class="buttons__cta buttons__cta--blue">Download for Mac</a>
      </div>

    </section>

  </header>

```

```css
  
.hero {
    --padding-container: 120px 0 80px;
    background-image: url('../images/bg-header-mobile.png');
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
}

.hero__img {
    display: block;
    margin: 0 auto;
    margin-bottom: 4.5em; /*Se coloca este margin despues del otro porque sino el cero auto lo pisa*/
}

.hero__title {
    color: var(--dark-grayish-blue);
    margin-bottom: 1rem;
}

.hero__paragraph {
    color: var(--grayish-blue);
    line-height: 1.5;
}



.buttons {
    margin-top: 2.3em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    text-align: center;
}

.buttons__cta {
    background-color: var(--strong-cyan);
    color: #fff;
    text-decoration: none;
    border-radius: 2em;
    font-weight: 600;
    padding: 1em 0;
    box-shadow: 0 0 10px -5px var(--strong-cyan);
}

.buttons__cta--blue {
    box-shadow: 0 0 10px -5px var(--light-blue);
    background-color: var(--light-blue);
}


```