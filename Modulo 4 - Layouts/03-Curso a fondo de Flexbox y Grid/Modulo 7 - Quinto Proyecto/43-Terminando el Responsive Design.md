# Seguimos con el CSS de desktop


```css


    .title {
        font-size: 2.7rem;
    }

    /* different */

    .different {
        text-align: left;
    }

    .title--different::before {
        /*Para mover el bordecito a la izquierda*/
        margin: 0;
    }

    .different__items {
        flex-direction: row;
        gap: 2em;
    }

    .different__item {
        /*Para que todos los hijos tengan la misma proporcion, es decir ocupen el mismo espacio*/
        flex: 1;
    }

    .different__icon {
        margin-left: 0;
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

    /* find */

    .find {
        --padding-container: 60px;
    }

    .find__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .find__container::before {
        background-image: url('../images/bg-pattern-how-we-work-desktop.svg');
    }

    .title--find {
        width: 60%;
    }

    /* footer */

    .footer__container::before {
        height: 31%;
        background-image: url('../images/bg-pattern-footer-desktop.svg');
    }

    .footer__brand {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
    }


    .footer__navigation {
        flex-direction: row;
        justify-content: space-between;
    }

    .footer__nav {
        width: 20%;
        align-items: flex-start;
    }


```
