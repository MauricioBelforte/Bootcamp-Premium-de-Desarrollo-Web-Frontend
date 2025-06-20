```html

    <section class="gallery container">

      <h2 class="subtitle subtitle--gallery"> Our creations
      </h2>

      <a href="#" class="gallery__cta"> See all</a>

      <div class="gallery__container">

        <picture class="gallery__picture" data-message="Deep earth">

            <!-- Aca lo que hacemos en la etiqueta source es configurar que cargue otra imagen si pasamos los 768px, es gracias a la etiqueta picture. con srcset no se muestra-->
          <source srcset="./images/desktop/image-deep-earth.jpg" class="gallery__img" media="(min-width:768px)">

          <img src="./images/mobile/image-deep-earth.jpg" class="gallery__img">

        </picture>

        <picture class="gallery__picture" data-message=" Night arcade">

          <source srcset="./images/desktop/image-night-arcade.jpg" class="gallery__img" media="(min-width:768px)">

          <img src="./images/mobile/image-night-arcade.jpg" class="gallery__img">

        </picture>

        <picture class="gallery__picture" data-message=" Soccer team VR">

          <source srcset="./images/desktop/image-soccer-team.jpg" class="gallery__img" media="(min-width:768px)">

          <img src="./images/mobile/image-soccer-team.jpg" class="gallery__img">

        </picture>

        <picture class="gallery__picture" data-message="The grid">

          <source srcset="./images/desktop/image-grid.jpg" class="gallery__img" media="(min-width:768px)">

          <img src="./images/mobile/image-grid.jpg" class="gallery__img">

        </picture>

        
      <picture class="gallery__picture" data-message="From up aboveVR">

        <source srcset="./images/desktop/image-from-above.jpg" class="gallery__img" media="(min-width: 768px)">

        <img src="./images/mobile/image-from-above.jpg" class="gallery__img" > 

      </picture>

      <picture class="gallery__picture" data-message="Pocket borealis">

        <source srcset="./images/desktop/image-pocket-borealis.jpg" class="gallery__img" media="(min-width: 768px)">

        <img src="./images/mobile/image-pocket-borealis.jpg" class="gallery__img" > 

      </picture>

      <picture class="gallery__picture" data-message="The curiosity">

        <source srcset="./images/desktop/image-curiosity.jpg" class="gallery__img" media="(min-width: 768px)">

        <img src="./images/mobile/image-curiosity.jpg" class="gallery__img" > 

      </picture>

      <picture class="gallery__picture" data-message="Make it fisheye">

        <source srcset="./images/desktop/image-fisheye.jpg" class="gallery__img" media="(min-width: 768px)">

        <img src="./images/mobile/image-fisheye.jpg" class="gallery__img" > 

      </picture>

      </div>

    </section>
```



```css

.gallery {
    display: grid;
    
}


.gallery__picture {
    display: grid;
    grid-template-areas: "show";
}

.gallery__picture::before {
    /*Este es el overlay negro transparente para que se vean mejor las letras*/
    /*El pseudoelemento ::before se convierte en un grid-item del grid container .gallery__picture  */
    content: "";
    z-index: 10;
    grid-area: show;
    background-image:
        linear-gradient(to top,
            rgba(0, 0, 0, 0.517) 30%,
            rgba(0, 0, 0, 0.256));
}

.gallery__picture::after {
    /*Creamos un pseudoelemento posterior para el texto que va encima del overlay*/
    /*Con attr le estamos diciendo que el contenido lo tome del data-message que esta en el html, hay que agregarle las comillas para que funcione*/
    content: attr(data-message) "";
    z-index: 10;
    grid-area: show;
    place-self: end start;
    text-transform: uppercase;
    color: #fff;
    font-family: var(--font-variant);
    font-size: 1.8rem;
    width: 30%;
    padding: 1rem;
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: show;
}


```

