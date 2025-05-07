# Hicimos el nav


```css
.nav {
    display: flex;
    align-items: center;
    gap: 1.1em;
    --padding-container: 40px 0;
}

.nav__logo {
    width: 110px;
}

.nav__img {
    width: 100%;
    display: block;
    /*Se coloca block para eliminar un pequeño margen en los elementos img*/
}

.nav__link:first-of-type {
    /*Para pegar el primer elemento con la clase .nav__link a la derecha, por ende se lleva el resto*/
    margin-left: auto;
}

.nav__link {
    text-decoration: none;
    color: var(--desaturated-blue);
    font-family: var(--font2);
}
```
