# Creamos la parte de la seccion Track

```html 

<section class="track container">

      <div class="track__texts">
        <h2 class="title">Keep track of your snippets</h2>
        <p class="paragraph">Clipboard instantly stores any item you copy in the cloud,
          meaning you can access your snippets immediately on all your
          devices. Our Mac and iOS apps will help you organize everything.</p>
      </div>

      <figure class="track__picture">
        <img src="./images/image-computer.png" class="track__img">
      </figure>

      <article class="track__articles">


        <div class="track__item">
          
          <h3 class="track__offer">Quick Search</h3>
          <p class="track__copy"> Easily search your snippets by content, category, web address, application, and more.</p>

        </div>

        <div class="track__item">
          
          <h3 class="track__offer">iCloud Sync</h3>
          <p class="track__copy"> Instantly saves and syncs snippets across all your devices.
          </p>

        </div>

        <div class="track__item">
          
          <h3 class="track__offer"> Complete History</h3>
          <p class="track__copy">Retrieve any snippets from the first moment you started using the app.</p>

        </div>


      </article>

    </section>


```

```css

/* track */

.track__texts {
    text-align: center;
}

.title {
    color: var(--dark-grayish-blue);
    font-size: 2rem;
}

.paragraph {
    line-height: 1.5;
    color: var(--grayish-blue);
    margin-top: 1.5em;
}

.track__img {
    width: 100%;
    display: block;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 3.5em;
}

.track__articles {
    display: flex;
    flex-direction: column;
    gap: 3.5em;
    margin-top: 2.5em;
    text-align: center;
}

.track__offer {
    color: var(--dark-grayish-blue);
    font-size: 1.5rem;
}

.track__copy {
    margin-top: .7em;
    line-height: 1.5;
    color: var(--grayish-blue);
}

```