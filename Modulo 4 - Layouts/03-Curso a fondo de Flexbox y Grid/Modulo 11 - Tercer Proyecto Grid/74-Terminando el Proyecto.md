

`Agregamos el grid-template-colums en el main, una animacion y los media queries para la vista desktop`


```css

.main{
    max-width: 800px;
    min-height: 760px;
    height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    animation: fade .8s .6s both ease-in;
}

@keyframes fade {
    0%{
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}



@media (min-width:667px) {
    .main__bg{
        border-radius: 10px 0 0 10px;
    }

    .main__texts{
        border-radius: 0 10px 10px 0;
    }
}


```
