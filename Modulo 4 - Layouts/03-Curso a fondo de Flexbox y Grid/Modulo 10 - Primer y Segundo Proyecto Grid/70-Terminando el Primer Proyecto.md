# Creamos la la plantilla de la version desktop

```css


.card__item{
    width: 90%;
    max-width: 350px;
    padding: 1.5em 1.7em;
    border-radius: 6px;
    box-shadow: 0 4px 20px -6px hsl(212, 86%, 64%, .5);
    border-top: 4px solid var(--cyan);

    grid-area: card1;
}

.card__item:nth-child(2){
    grid-area: card2;
    border-top: 4px solid var(--red);
}
.card__item:nth-child(3){
    grid-area: card3;
    border-top: 4px solid var(--orange);
}
.card__item:nth-child(4){
    grid-area: card4;
    border-top: 4px solid var(--blue);
}

.card__name{
    font-size: 1.5rem;
    margin-bottom: 16px;
}

.card__copy{
    color: var(--very-dark-blue);
    font-weight: 200;
    padding-bottom: 40px;
}

.card__picture{
    width: max-content;
    margin-left: auto;
}

.card__img{
    display: block;
}

@media (min-width:768px) {
    .card__container{
        grid-template-columns: repeat(3,1fr);
        grid-template-areas: 
        ".      card1       ."
        "card2  card1   card3"
        "card2  card4   card3"
        ".      card4        ."
        ;
        gap: 2em ;
    }
}


```
