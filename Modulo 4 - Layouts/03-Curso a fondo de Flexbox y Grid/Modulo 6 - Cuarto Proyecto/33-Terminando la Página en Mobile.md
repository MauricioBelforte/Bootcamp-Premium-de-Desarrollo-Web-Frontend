# Creamos las partes de brands, action y footer


```html 

    <section class="brands container">

      <img src="images/logo-google.png" class="brands__item">
      <img src="images/logo-ibm.png" class="brands__item">
      <img src="images/logo-microsoft.png" class="brands__item">
      <img src="images/logo-hp.png" class="brands__item">
      <img src="images/logo-vector-graphics.png" class="brands__item">

    </section>

    <section class="action container">

      <h2 class="title">Clipboard for iOS and Mac OS</h2>
      <p class="paragraph">Available for free on the App Store. Download for Mac or iOS, sync with iCloud
        and you’re ready to start adding to your clipboard.</p>

      <div class="buttons">
        <a href="#" class="buttons__cta">Download for iOS</a>
        <a href="#" class="buttons__cta buttons__cta--blue">Download for Mac</a>
      </div>

    </section>


  <footer class="footer">

    <section class="footer__container container">

      <figure class="footer__picture">
        <img src="./images/logo.svg" class="footer__img">
      </figure>

      <div class="footer__links">
        <a href="#" class="footer__link">FAQs</a>
        <a href="#" class="footer__link">Contact Us</a>
        <a href="#" class="footer__link">Privacy Policy</a>
        <a href="#" class="footer__link">Press Kit</a>
        <a href="#" class="footer__link">Install Guide</a>
      </div>

      <div class="footer__social">

        <a href="#" class="footer__media">
          <img src="./images/icon-facebook.svg" class="footer__icon">
        </a>

        <a href="#" class="footer__media">
          <img src="./images/icon-twitter.svg" class="footer__icon">
        </a>

        <a href="#" class="footer__media">
          <img src="./images/icon-instagram.svg" class="footer__icon">
        </a>

      </div>

    </section>

  </footer>



```


```css
    
/* brands */

.brands {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.5em;
}

.action {
    text-align: center;
}




/* footer */

.footer {
    background-color: #f2f2f2;
    text-align: center;
}

.footer__img {
    display: block;
    width: 100px;
    margin: 0 auto;
}

.footer__links {
    margin: 4em 0;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    align-items: center;
}

.footer__link {
    text-decoration: none;
    color: var(--dark-grayish-blue);
}

.footer__link:hover {
    text-decoration: underline;
}

.footer__social {
    display: flex;
    gap: 3em;
    justify-content: center;
}

.footer__media {
    text-decoration: none;
}

.footer__icon {
    display: block;
}

```