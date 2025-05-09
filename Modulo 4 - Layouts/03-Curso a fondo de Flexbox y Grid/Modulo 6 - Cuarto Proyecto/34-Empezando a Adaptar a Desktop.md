# Creamos el media queries para desktop

Copiamos todo el hero para saber lo que hicimos

```css

@media (min-width:768px) {

    .hero {
        --padding-container: 120px 0 90px;
        background-image: url('../images/bg-header-desktop.png');
    }

    .hero__title {
        font-size: 2.5rem;
    }

    .buttons {
        margin-top: 3em;
        flex-direction: row;
        justify-content: center;
    }

    .buttons__cta {
        padding: 1em 3em;
    }

    .buttons__cta--blue {
        box-shadow: 0 0 10px -5px var(--light-blue);
        background-color: var(--light-blue);
    }

    /* track */

    .title {
        font-size: 2.5rem;
    }


    .track {
        --padding-container: 80px 0 0;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .track__texts {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 1.5em;
    }

    .track__picture {
        position: relative;
        width: 50%;
        overflow: hidden;
        height: 700px;
    }


    .track__img {
        width: 125%;
        max-width: 650px;

        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }

    .track__articles {
        width: 42%;
        gap: 3em;
        margin: 0 auto;
        text-align: left;
        align-self: center;
    }

    .track__offer {
        color: var(--dark-grayish-blue);
        font-size: 1.5rem;
    }

    .track__copy {
        margin-top: .7em;
        line-height: 1.5;
        color: var(--grayish-blue);
    }


    

}

```