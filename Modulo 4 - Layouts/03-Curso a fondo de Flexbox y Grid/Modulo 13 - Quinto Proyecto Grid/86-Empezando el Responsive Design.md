

## Version desktop
Hay que quitar el menu hamburguesa y mostrar las imagenes de fondo. 
Copiamos las clases y las retocamos en el media queries.

```css

@media (min-width:768px) {

    .hero {
        background-image: url('../images/desktop/image-hero.jpg');
    }

    .nav {
        /*No queremos ver el logo del menu hamburguesa*/
        --hamburguer: none;
    }

    .nav:target {
        /*No queremos ver el logo de la x */
        --close: none;
        --hamburguer: none;
    }

    .nav__links {
        /*Usamos unset para volver a las propiedades originales. En este caso devuelve los links al flujo*/
        transform: unset;
        position: unset;
        min-height: unset;
        padding: 0;
        background-color: transparent;
        display: grid;
        grid-auto-flow: column;
        gap: 1em;
        place-content: center start;



    }


    .nav__link {
        font-size: 1rem;
        font-family: unset;
        text-transform: none;
    }


    /* leader */

    .leader {
        min-height: 350px;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0;
    }

    .leader__picture {
        grid-column: 1/5;
        grid-row: 1/5;
    }

    .leader__img {
        height: 100%;
        object-fit: cover;
    }

    .leader__texts {
        text-align: left;
        background-color: var(--white);
        grid-column: 4/8;
        grid-row: 3/6;
        padding: 2.5em;
    }

    .subtitle {
        font-size: 2.8rem;
    }

}

```
