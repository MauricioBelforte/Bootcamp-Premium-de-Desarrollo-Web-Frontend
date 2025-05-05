

Como curiosidad creo el pseudoelemento

```css
.hero::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 400px;
    background-image: url('../images/bg-mobile.svg');
    background-repeat: no-repeat;
    background-size: 100% 400px;
}
```

Creo ese pseudoelemento before para colocar la imagen de fondo ![bg-mobile](<Proyecto 1/images/bg-mobile.svg>) que para mi gusto mejoro mucho el fondo visualmente.


# Creamos la version de escritorio 

Modifico el before para la version de escritorio
![bg-desktop](<Proyecto 1/images/bg-desktop.svg>)

```css
@media (min-width:768px) {
    
    .hero::before{
        height: 100%;
        background-image: url('../images/bg-desktop.svg');
        background-size: 100% 100%;
    }

    .hero__container{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        --padding-container: 20px 0 60px;
    }

    .hero__picture{
        flex-basis: 45%;
    }

    .hero__img{
        max-width: unset; 
    }


    .hero__texts{
        flex-basis: 50%;
        text-align: left;
    }
    
    .hero__title{
        font-size: 2rem;
    }

    .hero__contact{
        margin-left: auto;
    }
}
```