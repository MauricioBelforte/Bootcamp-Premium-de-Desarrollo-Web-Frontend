# Creo que el nombre de esta clase 27 tiene un error. Lo que hacemos es adaptar para desktop

**Copiamos todo y vemos que podemos cambiar, despues eliminamos el codigo repetido**

@media (min-width: 768px) {

    .hero {
        --padding-container: 90px 0 200px;
    }

    .hero::before {
        background-image: url('../images/bg-curve-desktop.svg');
    }

    .hero__main {
        display: flex;
        align-items: center;
        gap: 1.5em;
    }

    .hero__img {
        max-width: none;
    }

    .hero__info {
        order: -1;
        text-align: left;
    }

    .hero__title {
        font-size: 2.3rem;
        margin-top: 0;
    }

    .hero__contact {
        display: flex;
        gap: 1em;
    }

    .hero__input {
        min-width: 160px;
        flex-grow: 1;
    }

    .hero__input--cta {
        margin-top: 0;
        flex-grow: 0;
        width: 160px;
    }

    /* productive */

    .productive__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .productive__picture {
        width: 45%;
        order: 1;
    }

    .productive__img {
        max-width: none;
    }

    .productive__main {
        margin-top: 0;
        width: 52%;
    }

    .productive__title {
        font-size: 2.1rem;
        text-align: left;

    }

    .productive__cta {
        margin: 2em 0 3em;
    }


    .productive__testimony {

        max-width: 420px;
        margin: 2px;

    }



}