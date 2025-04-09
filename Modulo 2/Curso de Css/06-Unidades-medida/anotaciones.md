# Medidas `rem` y `em` en CSS

*Mejor usar rem*

Las unidades `rem` y `em` son medidas relativas utilizadas en CSS para definir tamaños de fuente y otros estilos.

## `rem` (Root EM)

La medida `rem` es relativa al **tamaño de la etiqueta `html`** en CSS. En realidad, es relativa al `font-size` de la raíz del documento.

Por ejemplo, si se define el tamaño de fuente en el elemento `html` así:

```
html {
    font-size: 16px;
}
```

Entonces, si aplicamos `2rem` en una clase:

```
.unaClase {
    font-size: 2rem; /* Serían 32px */
}
```

El valor de `2rem` será **2 veces el tamaño de la fuente en `html`**, es decir, 32px.

## `em` (Element EM)

La medida `em` es similar, pero **no es relativa a la raíz del documento**, sino al **tamaño de fuente del elemento padre**.

Por ejemplo, si el navegador configura un tamaño de fuente base para accesibilidad y en un elemento definimos:

```
.contenedor {
    font-size: 20px;
}

.hijo {
    font-size: 1.5em; /* Serían 30px, porque toma el tamaño del contenedor */
}
```

Aquí, `1.5em` equivale a **1.5 veces el tamaño de `font-size` del elemento padre**, en este caso, `contenedor`, que tiene 20px. Por lo tanto, `hijo` tendrá **30px** de tamaño de fuente.

### Diferencias clave

✅ `rem` es relativo al tamaño de `html`, más consistente en toda la página.  
✅ `em` es relativo al tamaño del padre, útil para estructuras más flexibles.  
✅ `rem` es más predecible en diseño responsivo.  
✅ `em` puede afectar elementos anidados, generando tamaños acumulativos.

Ambas unidades son muy utilizadas en diseño web para adaptabilidad y accesibilidad.


---


# Unidades `vw` y `vh` en CSS

Las unidades `vw` y `vh` son medidas relativas al **viewport**, es decir, al área visible del navegador.

## `vw` (Viewport Width)

`vw` representa un porcentaje del **ancho total del viewport**.  
Por ejemplo, `100vw` significa **100% del ancho de la ventana del navegador**.

⚠️ **Precaución:**  
Usar `width: 100vw` puede causar un pequeño problema, ya que **incluye el scroll vertical** en la medida, haciendo que el ancho se extienda más de lo esperado.  
En su lugar, es mejor usar `width: 100%`, que se ajusta correctamente sin incluir el scroll.

Ejemplo:

```
.container {
    width: 100vw; /* Puede generar un desbordamiento si hay scroll vertical */
}

.alternativa {
    width: 100%; /* Se ajusta mejor en contenedores */
}
```

## `vh` (Viewport Height)

`vh` representa un porcentaje del **alto total del viewport**.  
Por ejemplo, `100vh` significa **100% del alto de la ventana del navegador**.

✅ **Ventaja:**  
A diferencia de `vw`, la unidad `vh` **no se ve afectada por el scroll**, lo que permite definir alturas fijas de manera más predecible.

Ejemplo:

```
.full-screen {
    height: 100vh; /* Se ajusta al alto total sin incluir scroll */
}
```

### Diferencia con `%`

El porcentaje `%` funciona de manera relativa al **elemento padre**, mientras que `vw` y `vh` dependen exclusivamente del tamaño de la ventana del navegador.


 ---


 Con respecto a los %

 Tener cuidado porque siempre que definimos en un hijo % , depende del tamaño del padre. Pero si es hijo de body por defecto el haight de body es auto por lo que el porcentaje en el hijo no funciona. Por lo que hay que definirle el height al padre