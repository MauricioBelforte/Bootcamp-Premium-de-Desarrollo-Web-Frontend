# Hacemos la parte de desktop

Copiamos todo el contenido para ver lo que hicimos en la version de mobile y despues borramos


```css


@media (min-width:768px) {


    .nav__links {
        display: flex;
        gap: 3em;



    }


    .nav__link {
        color: var(--dark-grayish-violet);
        padding: .8em 0;
    }

    .nav__link--cta {
        color: var(--dark-violet);
        padding: .8em 2em;
    }

    .nav__hamburguer {
        display: none;
    }

    .hero {
        /*Este gradiente es para generar un fondo mitad y mitad*/
        background-image: linear-gradient(to bottom, var(--dark-violet) 75%, #fff 25%);

    }

    .hero__main {
        --padding-container: 100px 0;
        width: 90%;
        display: flex;
        justify-content: space-between;
    }

    .hero__main::before {
        width: 48%;
        height: 530px;
        background-image: url('../images/image-intro-desktop.jpg');
        order: 1;
    }

    .hero__texts {
        width: 49%;
        margin: 0;
        padding: 20px 0 0;
        text-align: left;
        position: relative;
    }

    .hero__texts::before {
        /*Borde arriba del texto*/
        content: "";
        position: absolute;
        width: 120px;
        height: 3px;
        top: 0;
        left: 0;
        background-color: #fff;
    }

    .title {
        font-size: 2.7rem;
    }

    /* different */

    .different {
        text-align: left;
    }

    .title--different::before {
        margin: 0;
    }

    .different__items {
        flex-direction: row;
        gap: 2em;
    }

    .different__item {
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



}


```
