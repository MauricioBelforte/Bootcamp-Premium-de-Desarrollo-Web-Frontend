# Hacemos el CSS

```css
.newsletter {
    background-color: var(--desaturated-blue);
    color: #fff;
    text-align: center;
}

.newsletter__title {
    font-family: var(--font2);
}

.newsletter__paragraph {
    line-height: 1.5;
    margin-top: 1.2em;
}

.newsletter__form {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 2em;
}

.newsletter__input {
    padding: 1em .5em;
    font: inherit;
    font-family: var(--font2);
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 4px rgb(0, 0, 0, .3);
}

.newsletter__submit {
    color: #fff;
    background-color: var(--bright-blue);
    padding: 1em .5em;
    font: inherit;
    font-family: var(--font2);
    border-radius: 3px;
    border: none;
}



.footer {
    background-color: var(--very-dark-blue);
    color: #fff;
}

.footer__container {
    display: flex;
    flex-direction: column;
    gap: 3em;
}

.footer__logo {
    display: block;
}

.footer__icon {
    vertical-align: middle;
    margin-right: .5em;
}

.footer__info {
    font-size: 1.2rem;
}

.footer__nav {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.footer__link {
    text-decoration: none;
    color: #fff;
    font-family: var(--font2);
}

.footer__link:hover {
    text-decoration: underline; /*Este sirve para cuando pasemos el mouse o toquemos en el celu aparezca la linea debajo*/
}

.footer__social {
    display: flex;
    width: max-content;
    margin: 0 auto;
    gap: 1.5em;
}

.footer__media {
    border: 1px solid #fff;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-decoration: none;
    display: flex;
}

.footer__img {
    width: 20px;
    height: 20px;
    margin: auto;
}

```