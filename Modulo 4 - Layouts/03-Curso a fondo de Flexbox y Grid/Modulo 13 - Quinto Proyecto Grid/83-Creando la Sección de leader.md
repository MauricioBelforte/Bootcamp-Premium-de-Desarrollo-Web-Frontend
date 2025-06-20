

```html

 <section class="leader container">

      <picture class="leader__picture">
        <!-- Aca lo que hacemos en la etiqueta source es configurar que cargue otra imagen si pasamos los 768px, es gracias a la etiqueta picture. con srcset no se muestra-->
        <source srcset="./images/desktop/image-interactive.jpg" class="leader__img" media="(min-width:768px)">

        <img src="./images/mobile/image-interactive.jpg" class="leader__img">

      </picture>

      <div class="leader__texts">

        <h2 class="subtitle">The leader in interactive VR</h2>
        <p class="leader__paragraph">Founded in 2011, Loopstudios has been producing world-class virtual reality
          projects for some of the best companies around the globe. Our award-winning
          creations have transformed businesses through digital experiences that bind
          to their brand.</p>

      </div>

    </section>

```



```css


.leader {
    display: grid;
    gap: 2.5em;
}

.leader__img {
    width: 100%;
}

.leader__texts {
    text-align: center;
}

.subtitle {
    font-family: var(--font-variant);
    font-size: 2.5rem;
    text-transform: uppercase;
    color: var(--black);
}

.leader__paragraph {
    color: var(--dark-gray);
    line-height: 1.5;
    margin-top: 1.5em;
}

```

