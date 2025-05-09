# Creamos el html del newsletter y del footer

```html
  <section class="newsletter">
      <div class="newsletter__container container">

        <div class="newsletter__texts">
          <h2 class="newsletter__title"> Get early access today</h2>
          <p class="newsletter__paragraph">It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.</p>
        </div>

        <form class="newsletter__form">
          <input type="email" class="newsletter__input" placeholder="email@example.com">

          <input type="submit" value="Get Started For Free" class="newsletter__submit">
        </form>

      </div>
    </section>



    
  <footer class="footer">
    <section class="footer__container container">


      <figure class="footer__picture">
        <img src="./images/logo-white.svg" class="footer__logo">
      </figure>

      <div class="footer__contact">

        <p class="footer__info">
          <img src="./images/icon-phone.svg" class="footer__icon">
          Phone: +1-543-123-4567
        </p>

        <p class="footer__info">
          <img src="./images/icon-email.svg" class="footer__icon">
          example@fylo.com
        </p>

      </div>

      <nav class="footer__nav">
        <a href="#" class="footer__link">About Us</a>
        <a href="#" class="footer__link">Jobs</a>
        <a href="#" class="footer__link">Press</a>
        <a href="#" class="footer__link">Blog</a>
      </nav>

      <nav class="footer__nav">
        <a href="#" class="footer__link">Contact Us</a>
        <a href="#" class="footer__link">Terms</a>
        <a href="#" class="footer__link">Privacy</a>
      </nav>

      <div class="footer__social">

        <a href="#" class="footer__media">
          <img src="./images/fb.svg" class="footer__img">
        </a>

        <a href="#" class="footer__media">
          <img src="./images/twitter.svg" class="footer__img">
        </a>

        <a href="#" class="footer__media">
          <img src="./images/instagram.svg" class="footer__img">
        </a>

      </div>

    </section>
  </footer>

```