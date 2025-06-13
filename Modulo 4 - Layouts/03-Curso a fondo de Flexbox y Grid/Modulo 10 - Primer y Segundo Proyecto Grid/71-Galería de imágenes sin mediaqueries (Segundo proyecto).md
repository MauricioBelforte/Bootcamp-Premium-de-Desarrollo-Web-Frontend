# Creamos una galeria de imagenes

Sacamos las imagenes de [unplash.com](https://unsplash.com/es) que las imagenes no tienen derecho de autor


Usamos el repeat() con auto-fit para que cree columnas automaticamente. 
Con repet() crea varias, cuantas? lo define auto-fit, que le pasa la responsabilidad a la funcion minmax().
En este caso las columnas miden 300px como minimo, si ya pasamos los 600px crea otra columna.

```css

*{
    margin: 0;
    box-sizing: border-box;
}

.gallery{
    min-height: 100vh;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
    
    display: grid;
    gap: 1.5em;
    /*Con grid-auto-rows le decimos que las filas que se crean automaticamente midan 300px*/
    grid-auto-rows: 300px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /*Creamos columnas dinamicamente. El valor auto-fit crea columnas como sea posible*/
}


.gallery__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

```
