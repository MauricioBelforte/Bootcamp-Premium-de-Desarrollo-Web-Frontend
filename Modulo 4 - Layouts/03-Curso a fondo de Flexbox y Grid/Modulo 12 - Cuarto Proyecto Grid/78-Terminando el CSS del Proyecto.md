

```css

.main__shop{
    grid-area: shop;
}

.main__content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main__title{
    color: var(--black);
    font-size: 2rem;
}

.main__paragraph{
    line-height: 1.5;
    margin: 1em 0 2em;
    color: var(--dark-gray);
}

.main__paragraph--about{
    margin: 1em 0 0 0;
}

.main__cta{
    text-decoration: none;
    color: var(--very-dark-gray);
    text-transform: uppercase;
    letter-spacing: 4px;
}

.main__arrow{
    margin-left: 20px;
}

.main__bg{
    grid-area: image1;
    min-height: 250px;
    height: 100%;
    background-image: url('../images/image-about-dark.jpg');
    background-size: cover;
    background-position: center;
}

.main__about{
    grid-area: about;
}

.main__bg--second{
    grid-area: image2;
    background-image: url('../images/image-about-light.jpg');
}



```
