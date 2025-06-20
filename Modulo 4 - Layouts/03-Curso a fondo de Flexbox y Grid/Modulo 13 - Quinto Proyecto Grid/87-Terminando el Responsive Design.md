

```css
@media (min-width:768px) {


    /* gallery */

    .gallery {
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2,auto);
        justify-content: space-between;
    }

    .gallery__cta {
        grid-column: 2/3;
        grid-row: 1/2;
    }

    .gallery__container {
        grid-column: 1/-1;
        grid-row: 2/3;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }


    .gallery__picture::after {
        width: 50%;
    }


    /* footer */

    .footer__container {
        grid-template-columns: repeat(2, max-content);
        grid-template-areas: 
        "logo social"
        "links copy";
        row-gap: 3em;
        justify-content: space-between;
        align-items: center;
       grid-auto-rows: max-content;
    }

    .footer__logo{
        grid-area: logo;
        justify-self: start;
    }

    .footer__links {
        margin:0;
        grid-area: links;
        grid-auto-flow: column;
        gap: 1.2em;
    }

    

    .footer__nav {
        grid-area: social;
        justify-self: end;
    }

    .footer__copy {
        margin: 0;
        grid-area: copy;
        align-self: center;
    }

}
```
