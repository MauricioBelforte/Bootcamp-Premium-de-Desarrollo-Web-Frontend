# Creamos la seccion different


```html

  <main class="main">

    <section class="different container">
      <h2 class="title title--different">We’re different</h2>


      <div class="different__items">

        <article class="different__item">

          <img src="./images/icon-snappy-process.svg" class="different__icon">
          <h3 class="different__title"> Snappy Process</h3>
          <p class="different__paragraph">Our application process can be completed in minutes, not hours. Don’t get
            stuck filling in tedious forms.</p>

        </article>

        <article class="different__item">

          <img src="./images/icon-affordable-prices.svg" class="different__icon">
          <h3 class="different__title"> Affordable Prices</h3>
          <p class="different__paragraph"> We don’t want you worrying about high monthly costs. Our prices may be low,
          but we still offer the best coverage possible.</p>

        </article>

        <article class="different__item">

          <img src="./images/icon-people-first.svg" class="different__icon">
          <h3 class="different__title">People First</h3>
          <p class="different__paragraph">Our plans aren’t full of conditions and clauses to prevent payouts. We make
            sure you’re covered when you need it.</p>

        </article>

      </div>

    </section>

    <section class="find">
      <div class="find__container container">
        <h2 class="title title--find">Find out more about how we work</h2>
        <a href="#" class="cta"> How we work</a>
      </div>
    </section>

  </main>


  ```




  ```css

  
/* different */

.different {
    text-align: center;
}

.title--different {
    position: relative;/*Posicionamos relativamente el padre para poder colocar absolute en el hijo*/
    padding-top: 30px;
}

.title--different::before {
    /*Este pseudoelemento es para crear el borde superior de esta seccion*/
    content: "";
    position: absolute; /*Tuvimos que colocar relative al padre*/
    top: -5px;
    right: 0;
    left: 0;
    display: block;
    margin: 0 auto;
    background-color: var(--dark-grayish-violet);
    width: 120px;
    height: 1px;
}

.different__items {
    margin-top: 3.5em;
    display: flex;
    flex-direction: column;
    gap: 3em;
}

.different__icon {
    display: block;
    margin: 0 auto;
    margin-bottom: 2em;
}

.different__title {
    font-family: var(--font1);
    font-size: 1.5rem;
    letter-spacing: 3px;
}

.different__paragraph {
    margin-top: 1em;
    line-height: 1.5;
    color: var(--dark-grayish-violet);
}

```

