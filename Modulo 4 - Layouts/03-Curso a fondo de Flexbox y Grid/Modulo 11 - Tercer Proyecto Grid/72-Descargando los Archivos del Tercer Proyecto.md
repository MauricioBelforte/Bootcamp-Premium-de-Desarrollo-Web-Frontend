# Creamos los archivos HTML Y CSS 

**Realizamos Mobile First**

Buscamos otro proyecto en [Web de frontendmentor](https://www.frontendmentor.io/)

**En los archivos README.md README-template.md y style-guide.md nos indica lo que tenemos que hacer para el proyexto. Tambien en la carpeta design podemos ver el diseño directamente.**


```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <title>Frontend Mentor | Product preview card component</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css">
</head>

<body>

  <main class="main">

    <div class="main__bg"></div>

    <section class="main__texts">

      <p class="main__product">Preview</p>
      <h1 class="main__title"> Gabrielle Essence Eau De Parfum</h1>
      <p class="main__paragraph"> A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>

      <p class="main__price">
        $149.99
        <span class="main__sold">$169.99</span>
      </p>

      <a href="#" class="main__cta">Add to Cart</a>

    </section>

  </main>
  


</body>

</html>

``



```css 

:root{
    --dark-cyan: hsl(158, 36%, 37%);
    --cream: hsl(30, 38%, 92%);
    --very-dark-blue: hsl(212, 21%, 14%);
    --dark-grayish-blue: hsl(228, 12%, 48%);
    --white: hsl(0, 0%, 100%);


    --font-headings: 'Fraunces', serif;
}

*{
    margin: 0;
    box-sizing: border-box;
}


body{
    background-color: var(--cream);
    font-family: 'Montserrat', sans-serif;
}


```