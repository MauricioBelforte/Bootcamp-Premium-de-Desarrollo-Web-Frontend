# Creamos la seccion Clipboard

```html

    <section class="clipboard container">

      <h2 class="title">Access Clipboard anywhere
      </h2>
      <p class="paragraph"> Whether you’re on the go, or at your computer, you can access all your Clipboard
        snippets in a few simple clicks.</p>

      <figure class="clipboard__picture">
        <img src="./images/image-devices.png" class="clipboard__img">
      </figure>

      <h2 class="title">Supercharge your workflow
      </h2>
      <p class="paragraph"> We’ve got the tools to boost your productivity.</p>

      <div class="clipboard__offer">

        <article class="clipboard__item">
          <img src="./images/icon-blacklist.svg" class="clipboard__icon">
          <h3 class="clipboard__title"> Create blacklists</h3>
          <p class="clipboard__paragraph">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </article>

        <article class="clipboard__item">
          <img src="./images/icon-text.svg" class="clipboard__icon">
          <h3 class="clipboard__title">Plain text snippets</h3>
          <p class="clipboard__paragraph"> Remove unwanted formatting from copied text for a consistent look.</p>
        </article>

        <article class="clipboard__item">
          <img src="./images/icon-blacklist.svg" class="clipboard__icon">
          <h3 class="clipboard__title"> Sneak preview</h3>
          <p class="clipboard__paragraph">Quick preview of all snippets on your Clipboard for easy access.</p>
        </article>

      </div>

    </section>


```

```css

/* clipboard */

.clipboard {
    text-align: center;
}

.clipboard__picture {
    margin: 3em 0 6em;
}

.clipboard__img {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.clipboard__offer {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    gap: 3.5em;
}

.clipboard__icon {
    display: block;
    width: 45px;
    margin: 0 auto;
    margin-bottom: 1.5em;
}

.clipboard__title {
    font-size: 1.5rem;
    color: var(--dark-grayish-blue);
}

.clipboard__paragraph {
    color: var(--grayish-blue);
    line-height: 1.5;
    margin-top: 1em;
}

```