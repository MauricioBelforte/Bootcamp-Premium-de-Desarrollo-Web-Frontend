# fit-content()

Funcion que permite crear valores dinamicos para los tracks.
Es una combinacion entre max-content y min-content.

Se utiliza en la propiedad grid-template-columns:, grid-template-rows: , grid-auto-rows: , grid-auto-columns: .

Actua como max-content es decir se ensancha hasta el limite que le pongamos dentro del parentesis. A partir de ahi actua como min-content.

Ej1: 

```css

.grid {
    grid-template-columns: fit-content(300px);
}
```


![Se comporta como el max-content](imagenes/fit-content()-1.png)


Pero ademas se comporta como min-content ya que si la palabra del html es mas larga que el ancho del argumento, se adapta a la palabra.

Ej2: 

```css

.grid {
    grid-template-columns: fit-content(200px);
}
```

![Se adapta a la palabra mas grande del html](imagenes/fit-content()-2.png)


# minmax()

Esta funcion tambien se usa para definir tamaño de tracks. Ya sea creados de forma explicita o implicita.

Lleva 2 valores. El primero define el tamaño minimo del track y el segundo valor define el tamaño maximo del track.
Se puede usar cualquier unidad de medida fr % px etc.

Se utiliza en la propiedad grid-template-columns:, grid-template-rows: , grid-auto-rows: , grid-auto-columns: .

Ej1: 

```css

.grid {
    grid-template-columns: minmax(min-content,1fr);
}
```

![minmax(min-content,1fr)](imagenes/minmax()-1.png)


Ej2: 

```css

.grid {
    grid-template-columns: minmax(50px,300px);
}
```

![minmax(50px,300px) En la parte alta](imagenes/minmax()-2.png)


Ej3: 

```css

.grid {
    grid-template-columns: repeat(4,minmax(50px,300px));
}
```


![Combinando con repeat()](<imagenes/minmax() con repeat.png>)
