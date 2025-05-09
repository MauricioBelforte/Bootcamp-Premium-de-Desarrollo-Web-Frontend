# Realizamos la parte del media queries del Clipboard brands y footer


```css

    /* clipboard */

    .clipboard {
        --padding-container: 20px 0 80px;
    }

    .clipboard__img {
        max-width: 700px;
    }

    .clipboard__offer {
        flex-direction: row;
        gap: 2em;
        justify-content: space-between;
        align-items: baseline;
    }

    .clipboard__item {
        flex: 1;
        /* grow:1 shrink:1 basis:0 */
        /*Para repartir el espacio equitativamente el flex en 1 significa esos 3*/
    }

    /* brands */

    .brands {
        flex-direction: row;
        justify-content: space-between;
        gap: 2em;
    }

    .brands__item {
        min-width: 100px;
        max-width: 130px;
        flex: 1;
    }


    .footer__container {
       display: flex;
       gap: 2em;
       align-items: center;
    }

    .footer__img {
       width: 70px;
    }

    .footer__links {
        margin: 0;
       
        flex-direction: row;
        gap: 1em;
        align-items: center;
        flex-wrap: wrap;
    }

    .footer__link {
        width: 28%;
    }

   
    .footer__social {
        margin-left: auto;
    }

    ```