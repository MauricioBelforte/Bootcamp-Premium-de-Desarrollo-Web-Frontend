
# Hacemos el Hero

```css
.hero {
    position: relative;
    --padding-container: 90px 0 170px;
}

.hero__img {
    width: 100%;
    display: block;
    max-width: 400px;
    margin: 0 auto;
}

.hero__info {
    text-align: center;
    color: var(--very-dark-blue);
}

.hero__input--cta {
    background-color: var(--bright-blue);
    color: #fff;
    border: none;
    font-weight: 700;
    margin-top: 1.2em;
}
```

![La imagen del pseudoelemento](<Proyecto 3/images/bg-curve-desktop.svg>)

```css
.hero::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100px;
    background-image: url('../images/bg-curve-mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    left: 0;
    bottom: 0;
}
```
