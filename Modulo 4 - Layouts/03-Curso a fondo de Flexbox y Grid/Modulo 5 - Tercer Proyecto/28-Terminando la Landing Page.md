# Terminamos el media queries para newsletter y footer

```css
    /* newsletter */

    .newsletter__container {
        display: flex;
        justify-content: space-between;
        text-align: left;
    }

    .newsletter__texts {
        width: 48%;
        max-width: 450px;
    }

    .newsletter__title {
        font-size: 1.7rem;
    }


    .newsletter__form {
        width: 45%;
        margin: 0;
        max-width: 500px;
        flex-wrap: wrap;

    }

    .newsletter__input {
        width: 100%;
    }

    .newsletter__submit {
        width: max-content;
        padding: 1em 2em;
    }

    .footer__container {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    .footer__picture {
        width: 100%;
    }

    .footer__contact {
        width: 25%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }


    .footer__social {
        margin: 0 ;
    }

```