# Seguimos trabajando en los mismos archivos de la clase 46


## Propiedad grid-template-colums:

`Se coloca en el contenedor padre, es decir donde colocamos display:grid.`
Cada columna se crea colocando una unidad de medida separada por un espacio.


Ej:
Creamos 3 columnas, independientemente de la cantidad de elementos (grid items) que definimos en html.

grid-template-colums:60px 4cm 20%;


*Esto funciona asi ya que por defecto las filas las crea con grid-auto-flow:row*

## Propiedad grid-template-rows:

`Se coloca en el contenedor padre, es decir donde colocamos display:grid.`
Al igual que la anterior, acepta cualquier unidad de medida para crear columnas.

Ej:
Creamos 4 filas, intependientemente de la cantidad de elementos (grid items) que definimos en el html. Se completan los que estan y el resto queda vacio en blanco.

grid-template-rows: 25% 25% 30% 10%;


### Ejemplo completo:

```html

   <div class="grid">

        <div class="item item-1">#1</div>
        <div class="item item-2">#2</div>
        <div class="item item-3">#3</div>
        <div class="item item-4">#4</div>
        <div class="item item-5">#5</div>
        <div class="item item-6">#6</div>


    </div>
    
```


```css

    .grid{ 
        display: grid; 
        grid-template-columns: 25% 25% 25% 25%; 
        grid-template-rows: 25% 25% 25% 25%; 
        width: 90%; 
        max-width: 600px; 
        margin: 80px auto; 
        overflow: hidden; 
        outline: 3px solid; 
        height: 500px;
    }

```

![Ejemplo Template Grid](<imagenes/Ejemplo Template Grid.png>)