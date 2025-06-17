

```css


.container{
    width: 90%;
    margin: 0 auto;
    padding: 60px 0;
    overflow: hidden;
}

.main{
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    /*Creamos 5 filas con su maximo contenido y una columna de una fraccion*/
    grid-template: repeat(5, max-content) / 1fr;
    grid-template-areas: 
    "main"
    "shop"
    "image1"
    "about"
    "image2"
    ;
}

.main__hero{
    min-height: 500px;
    background-image: url('../images/mobile-image-hero-1.jpg');
    background-size: cover;
    background-position: center;
    grid-area: main;
}

.main__nav{
    display: flex;
    align-items: center;
}

.main__links{
    display: none;
}

.main__logo{
    margin: 0 auto;
}

.main__controls{
    grid-area: main;
    place-self: end;
    /* El place-selft es el shorthand de align-self: end;
    y justify-self:end; con esto posicionamos los controles abajo a la derecha sin necesidad de usar position absolute*/
    background-color: var(--black);
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.main__arrows{
    height: 40%;
}


```
