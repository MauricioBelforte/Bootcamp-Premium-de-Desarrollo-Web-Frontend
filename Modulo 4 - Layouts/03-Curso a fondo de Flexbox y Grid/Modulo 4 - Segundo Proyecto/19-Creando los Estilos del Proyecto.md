# Como detalle utiliza la nomenclatura BEM

Que utiliza los guiones bajos para hijos de algún contenedor y los guiones medios para un modificador de un contenedor o hijo existente.

```css
.card__cta {
    display: block;
    background-color: var(--bright-blue);
    color: #fff;
    text-decoration: none;
    margin-top: 2em;
    border-radius: 0.5em;
    padding: 1em;
    font-weight: 700;
    box-shadow: 0 10px 10px -8px var(--bright-blue);
}

.card__cta--gray {
    margin-top: 0.7em;
    background-color: #fff;
    color: var(--desaturated-blue);
    box-shadow: none;
}
```

# Utiliza una imagen svg para darle más profesionalismo

![Imagen de fondo](<Proyecto 2/images/pattern-background-desktop.svg>)

```css
@media (min-width: 768px) {
    body {
        background-image: url('../images/pattern-background-desktop.svg');
        background-repeat: no-repeat;
    }
}
```