# Creamos la parte debajo del hero que se llama productive

```html
<article class="productive__testimony">
    <img src="./images/icon-quotes.svg" class="productive__quote" alt="Quotes Icon">

    <p class="productive__review">
        Fylo has improved our team productivity by an order of magnitude. Since 
        making the switch our team has become a well-oiled collaboration machine.
    </p>

    <div class="productive__card">
        <img src="./images/avatar-testimonial.jpg" class="productive__person" alt="Kyle Burton's Avatar">

        <div class="productive__info">
            <h4 class="productive__name">Kyle Burton</h4>
            <p class="productive__job">Founder & CEO, Huddle</p>
        </div>
    </div>
</article>
```

```css
/* productive */

.productive {
    background-color: var(--light-grayish-blue);
    padding: 30px 0 90px;
}

.productive__testimony {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.productive__quote {
    width: 40px;
    margin-bottom: 20px;
}

.productive__review {
    font-size: 1rem;
    color: var(--desaturated-blue);
    line-height: 1.6;
    margin-bottom: 30px;
}

.productive__card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.productive__person {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.productive__info {
    text-align: left;
}

.productive__name {
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--very-dark-blue);
}

.productive__job {
    font-size: 0.9rem;
    color: var(--grayish-blue);
}
```
