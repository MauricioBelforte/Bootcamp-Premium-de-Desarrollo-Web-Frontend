# Anotaciones importantes sobre el dom y Javascript

## Para crear elementos y agregarlos a algun lugar

### En este caso comienzo en la parte mas elemental, creando un span

- 1-Creo el elemento:
```Javascript
    const textoSpan = document.createElement("span");
```

- 2-Le pongo una clase y texto:
```Javascript
    textoSpan.className = "texto-tarea";
    textoSpan.innerText = textoTarea;// En este caso el texto venia como parametro
```

- 3-Lo agrego a otro nodo:
```Javascript
    item.appendChild(textoSpan);
```


Ejemplo:

```Javascript
function agregarSpanTexto(textoTarea, item) {
    
    const textoSpan = document.createElement("span");
    textoSpan.className = "texto-tarea";
    textoSpan.innerText = textoTarea;


    // El método appendChild() agrega un nuevo nodo al final de la lista de hijos de un nodo padre especificado
    // En este caso, estamos agregando un span con texto al elemento de lista (li item) que acabamos de crear.
    // Esto significa que cada vez que se crea un nuevo elemento de lista, también se agrega un span con el texto de la tarea, a ese elemento.
    item.appendChild(textoSpan);
    // Aquí agregas el span con el texto de la tarea al item
}
```


*Luego cree 2 botones de la misma manera mirar el Anotador de tareas*


### En el mismo ejemplo, pero agregando el span y los 2 botones al elemento li llamado item

  - 1-Creo el elemento:
```Javascript
   const item = document.createElement("li");
```

- 2-Le pongo una clase y texto:
```Javascript
      // En este caso no le puse clase pero en vez de poner texto puse los 3 elementos, ya que cada funcion agregar adentro usa item.appendChild()
      agregarSpanTexto(textoTarea, item);
      agregarBotonEditar(item);
      agregarBotonEliminar(item);
```

- 3-Lo agrego a otro nodo:
```Javascript
    lista.appendChild(item);
```

Ejemplo:

```Javascript
  function agregarTarea(textoTarea) {
      // Crear un nuevo elemento de lista y agregarlo a la lista
      // El método createElement() crea un nuevo elemento HTML especificado por su nombre de etiqueta
      const item = document.createElement("li"); /*Se tiene que usar li , porque en createElement se usan etiquetas semanticas */


      agregarSpanTexto(textoTarea, item);

      agregarBotonEditar(item);

      agregarBotonEliminar(item);
      // Agregar el botón de eliminar al elemento de lista

      // El método appendChild() agrega un nuevo nodo al final de la lista de hijos de
      lista.appendChild(item);

  }
```

### Y por ultimo el que dispara todo es el escuchador addEventListener que llama a la funcion agregarTarea(tarea)

```Javascript
    const input = document.querySelector("#ingreso");
    const lista = document.querySelector(".lista");

    boton.addEventListener("click", function (event) {
        const tarea = input.value;
        agregarTarea(tarea);
        input.value = ""; // Limpiar el campo de entrada 

    }
    );
```

---
## Diferencia entre `className` y `classList` en JavaScript

La diferencia principal entre `className` y `classList` en JavaScript es cómo gestionan las clases de un elemento:

### `className`
- Es una **propiedad de texto** (string) que representa todas las clases del elemento.
- Si asignas un valor, reemplazas todas las clases existentes.
- Ejemplo:
  ```javascript
  elemento.className = "clase1 clase2";
  ```
- Puedes leer o escribir todas las clases como un solo string.

### `classList`
- Es un **objeto especial** que permite **agregar, quitar, alternar o verificar** clases individualmente, sin afectar las demás.
- Métodos útiles: `add()`, `remove()`, `toggle()`, `contains()`.
- Ejemplo:
  ```javascript
  elemento.classList.add("clase1");
  elemento.classList.remove("clase2");
  elemento.classList.toggle("clase3");
  ```
- Es más seguro y flexible para manipular clases dinámicamente.

---

**Resumen:**  
- Usa `className` para establecer o leer todas las clases de golpe.
- Usa `classList` para manipular clases individuales de forma sencilla y sin sobrescribir



---


# Formularios

## Validaciones
Primero tratar de usar todas las validaciones que brinda HTML, luego si falta alo crearlo en Javascript


