# Creamos el HTML

```html


<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <title>PROYECTO #1</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>

  <main class="card">

    <h1 class="card__title">Reliable, efficient delivery</h1>
    <h2 class="card__title card__title--bold">Powered by Technology</h2>
    <p class="card__paragraph">Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful
    </p>

    <section class="card__container">

      <article class="card__item">

        <h2 class="card__name">Supervisor</h2>
        <p class="card__copy">Monitors activity to identify project roadblocks</p>

        <figure class="card__picture">
          <img src="./images/icon-supervisor.svg" class="card__img">
        </figure>

      </article>

      <article class="card__item">

        <h2 class="card__name">Team Builder</h2>
        <p class="card__copy">Scans our talent network to create the optimal team for your project</p>

        <figure class="card__picture">
          <img src="./images/icon-team-builder.svg" class="card__img">
        </figure>

      </article>

      <article class="card__item">

        <h2 class="card__name">Karma</h2>
        <p class="card__copy">Regularly evaluates our talent to ensure quality</p>

        <figure class="card__picture">
          <img src="./images/icon-karma.svg" class="card__img">
        </figure>

      </article>

      <article class="card__item">

        <h2 class="card__name"> Calculator</h2>
        <p class="card__copy">Uses data from past projects to provide better delivery estimates</p>

        <figure class="card__picture">
          <img src="./images/icon-calculator.svg" class="card__img">
        </figure>

      </article>

    </section>


  </main>

</body>

</html>


```



# Definimos el CSS del mobile first

```css


body{
    font-family: 'Poppins', sans-serif;
    background-color: var(--very-light-gray);
}

.card{
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
    overflow: hidden;
    text-align: center;
}

.card__title{
    font-size: 1.7rem;
    font-weight: 200;
    line-height: 1.5;
    color: var(--very-dark-blue);
}

.card__title--bold{
    font-weight: 600;
}

.card__paragraph{
    line-height: 1.5;
    color: var(--grayish-blue);
    margin-top: 1.5em;
}

.card__container{
    padding-top: 80px;
    text-align: left;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,1fr);
    grid-template-areas: 
    "card1"
    "card2"
    "card3"
    "card4";

    justify-items: center;
    gap: 2.5em ;
}

.card__item{
    width: 90%;
    max-width: 350px;
    padding: 1.5em 1.7em;
    border-radius: 6px;
    box-shadow: 0 4px 20px -6px hsl(212, 86%, 64%, .5);
    border-top: 4px solid var(--cyan);

    grid-area: card1;
}

``

