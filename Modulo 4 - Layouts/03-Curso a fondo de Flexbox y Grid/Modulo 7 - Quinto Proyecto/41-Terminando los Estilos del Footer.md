# Hacemos el css del find y el footer

```css

/* find */

.find {
    padding: 80px 0;
    --padding-container: 60px 30px;
}

.find__container {
    position: relative;/*Para poder poner absolute al pseudolemento hijo*/
    z-index: 1;
    color: #fff;
    background-color: var(--dark-violet);
    text-align: center;
}

.find__container::before {
    /*Creamos de esta manera los adornos del fondo*/
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: url('../images/bg-pattern-how-we-work-mobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
}

/* footer */

.footer {
    background-color: var(--very-light-gray);
}

.footer__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;

    padding-bottom: 2.5em;
    margin-bottom: 2.5em;

    border-bottom: 1px solid var(--dark-grayish-violet);
}

.footer__logo {
    display: block;
}

.footer__media {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
}

.footer__navigation {
    display: flex;
    flex-direction: column;
    gap: 3em;
}

.footer__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
}

.footer__link {
    text-decoration: none;
    color: var(--dark-violet);
    font-weight: 700;
    text-transform: uppercase;
}

.footer__link--first {
    margin-bottom: 1em;
    color: var(--dark-grayish-violet);
}


```