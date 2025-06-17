# Creamos el diseño para desktop



```css



@media (min-width:768px) {
    .container{
        width: 85%;
        padding: 70px 0;
    }

    .main{

        /* Creamos 7 columnas para la parte desktop*/
        grid-template-columns:repeat(7,1fr); 
        grid-template-areas: 
        "main main main main shop shop shop"
        "main main main main shop shop shop"
        "main main main main shop shop shop"
        "image1 image1 about about about image2 image2"
        "image1 image1 about about about image2 image2"
        ;
        /* "main"
        "shop"
        "image1"
        "about"
        "image2"
        ; */
    }

    .main__hero{
        background-image: url('../images/desktop-image-hero-1.jpg');
    }

    .main__controls{
        /*Aca tuvimos que cambiar el area de los controles*/
        grid-area: shop;
        justify-self: start;
    }

    .main__hamburguer{
        display: none;
    }

    .main__logo{
        margin: 0;
        min-width: 70px;
    }

    .main__links{
        padding: 0;
        display: grid;
        grid-auto-flow: column;
        gap: 1em;
        margin-left: 10%;
    }

    .main__list{
        list-style: none;
    }
    

    .main__link{
        color: var(--white);
        text-decoration: none;
    }
}


```
