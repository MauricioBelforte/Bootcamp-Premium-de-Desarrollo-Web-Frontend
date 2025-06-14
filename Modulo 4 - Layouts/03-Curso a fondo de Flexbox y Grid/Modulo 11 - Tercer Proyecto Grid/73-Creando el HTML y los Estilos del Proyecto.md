# Creamos el mobile first

*text-decoration: line-through; Sirve para tachar el precio*


```css

.main{
    max-width: 800px;
    min-height: 760px;
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: grid;
    align-content: center;

 
}



.main__bg{
    border-radius: 10px 10px 0 0;
    min-height: 250px;
    height: 100%;
    background-image: url('../images/image-product-mobile.jpg');
    background-size: cover;
    background-position: center;
}

.main__texts{
    background-color: var(--white);
    padding: 1.5em 2em;
    border-radius: 0 0 10px 10px;
}

.main__product{
    text-transform: uppercase;
    letter-spacing: 6px;
    color: var(--dark-grayish-blue);
}

.main__title{
    font-family: var(--font-headings);
    font-size: 2rem;
    margin: .8rem 0 1.2rem;
    color: var(--very-dark-blue);
}

.main__paragraph{
    line-height: 1.5;
    margin-bottom: 1.8em;
    color: var(--dark-grayish-blue);
}

.main__price{
    display: flex; 
    align-items: center;
    gap: 1em;
    font-size: 1.8rem;
    color: var(--dark-cyan);
    font-family: var(--font-headings);
    letter-spacing: 2px;
}

.main__sold{
    color: var(--dark-grayish-blue);
    font-size: initial;
    font-family: 'Montserrat', sans-serif;
    text-decoration: line-through;
}

.main__cta{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    justify-content: center;
    gap: 1em;

    margin-top: 1.5em;
    padding: 1em 0;
    text-decoration: none;
    color: #fff;
    border-radius: 8px;
    background-color: var(--dark-cyan);
}

.main__cta::before{
    content: url('../images/icon-cart.svg');
}

```

