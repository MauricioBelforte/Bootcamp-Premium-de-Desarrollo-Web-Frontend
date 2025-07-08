# Objetivos de la clase

- Comprender la estructura y el propósito de los formularios en la web.
- Aprender a usar las etiquetas básicas de formularios HTML.
- Aprender a validar datos

---

# ¿Qué es un formulario?

Un formulario web es una manera de recolectar datos de los usuarios en la web. Se utiliza en una variedad de situaciones como registrarse en sitios, realizar búsquedas o ingresar información de pago, y se compone de diferentes etiquetas HTML con sus respectivos atributos.

# ¿Cómo pasar de un diseño a HTML y CSS?

1. Observa el diseño e identifica las diferentes estructuras que existen.
2. Piensa qué herramientas de HTML y CSS se corresponden con esas estructuras.
3. Implementa la solución.

# El mismo proceso se puede aplicar a JavaScript

1. Plantea el problema general a resolver.
2. Desmenúzalo en pequeños pasos o acciones (puedes escribirlos, hacer diagramas, lo que te sirva).
3. Una vez que tienes los pasos, piensa qué herramientas del lenguaje te permiten realizar esas acciones.
4. Si no conoces alguna, búscala (en Google, ChatGPT, la documentación de JavaScript, en los cursos, etc).

# Elementos HTML de los formularios

- `<form>`: el contenedor para todos los elementos del formulario.
- `<input>`: para ingresar datos. Puede cambiar de tipo dependiendo de lo que se necesite recoger (texto, contraseña, número, etc.).
- `<label>`: proporciona una etiqueta para un elemento `<input>`; mejora la accesibilidad y la interactividad.
- `<textarea>`: permite la entrada de texto de múltiples líneas.
- `<button>`: se usa para enviar los datos del formulario a un servidor.


# Validaciones

Las validaciones son verificaciones que se aplican a los datos ingresados por los usuarios antes de ser procesados o enviados a un servidor. El propósito de las validaciones es asegurar que la información proporcionada cumpla con ciertos criterios establecidos, garantizando así la integridad, la precisión y la utilidad de los datos.

## Validaciones nativas de HTML

- **required**: Obliga a llenar el campo antes de enviar el formulario.
- **pattern**: Compara el contenido del input contra un patrón de texto, se utiliza en conjunto con expresiones regulares.
- **min** y **max**: Establecen el valor mínimo y máximo para campos numéricos o de fecha.
- **maxlength**: Limita la cantidad de caracteres que se pueden ingresar en un campo de texto.
- **type**: Especifica el tipo de datos que se espera (email, teléfono, número, etc.), proporcionando una validación automática para esos formatos.

**Tipos de input:**  
[https://www.w3schools.com/html/html_form_input_types.asp](https://www.w3schools.com/html/html_form_input_types.asp)



### Sugerencias y explicaciones para un formulario bien elaborado

- **`name` en los inputs:** Es necesario para que los datos se envíen correctamente al servidor.
  
- **`required`:** Hace que el campo sea obligatorio y previene el envío si está vacío.
  
- **`autocomplete`:** Mejora la experiencia del usuario sugiriendo datos previamente usados.
  
- **`placeholder`:** Da una pista sobre el contenido esperado en cada campo.
  
- **`minlength` en contraseña:** Asegura una longitud mínima para mayor seguridad.
  
- **`type="email"` y `type="password"`:** Aplican validaciones automáticas y mejoran la accesibilidad.
  
- **`label` asociado a cada input:** Mejora la accesibilidad y usabilidad, permitiendo que el usuario haga clic en el texto para enfocar el campo.
    - **¿Cómo se conectan?** El atributo `for` del `<label>` debe coincidir exactamente con el atributo `id` del `<input>`. Por ejemplo:
      ```html
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      ```
      Así, al hacer clic en el texto "Email:", el cursor se posiciona automáticamente en el campo de email.

- **`action` en el formulario:**  
  El atributo `action` de la etiqueta `<form>` indica la URL o archivo al que se enviarán los datos del formulario cuando el usuario lo envía.  

  Por ejemplo:  
  ```html
    <form action="enviar.js">
  ```
*Si no se especifica, el formulario se enviará a la misma página.*

- **Botón de tipo `submit`:** 
El botón con type="submit" envía el formulario. Al hacer clic en él, se ejecuta la acción definida en el atributo action del formulario.
Ejemplo:

 ```html
    <button type="submit">Enviar</button>
  ```

- **Validaciones adicionales:** Puedes agregar atributos como `maxlength`, `pattern` o validaciones personalizadas con JavaScript según tus necesidades.

Este conjunto de prácticas hace que tu formulario sea más accesible, seguro y fácil de usar para todos


## Ejemplo de formulario con campo contraseña y buenas prácticas

A continuación tienes un ejemplo de formulario HTML mejorado, incluyendo el campo de contraseña y siguiendo buenas prácticas de accesibilidad y validación:

```html
    <form action="enviar.js">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required autocomplete="name" placeholder="Tu nombre completo">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required autocomplete="email" placeholder="ejemplo@correo.com">

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required minlength="6" placeholder="Mínimo 6 caracteres">

        <button type="submit">Enviar</button>
    </form>
```

## Validaciones personalizadas con JavaScript

JavaScript permite realizar validaciones más complejas y dinámicas que no son posibles solo con HTML. Por ejemplo:

- Comparar el contenido de dos campos.
- Verificar que se cumplan ciertas condiciones en todo el formulario antes de enviar la información.
- Mostrar mensajes de error personalizados.
- Y más.

### ¿Cómo validamos con JavaScript? A través de eventos

- **addEventListener**: Se utiliza para manejar eventos en elementos del formulario, como clicks o cambios de entrada.
- **preventDefault**: Utilizado para detener el comportamiento predeterminado de los formularios en el navegador (por ejemplo, detener el envío del formulario hasta que se cumplan las validaciones).



## Tipos más usados de `input type` en formularios HTML

- `text`: Campo de texto libre. Se usa para ingresar cualquier dato, como nombres o direcciones.
- `email`: Valida que el formato ingresado sea un correo electrónico. Perfecto para formularios de contacto.
- `password`: Oculta el texto mientras se escribe. Se usa para contraseñas.
- `number`: Solo permite ingresar números. Se puede limitar con `min` y `max`.
- `tel`: Campo pensado para números de teléfono. No tiene validación estricta.
- `url`: Asegura que el contenido sea una dirección web válida.
- `search`: Similar a `text`, pero con estilo especial para búsquedas.
- `checkbox`: Casilla para marcar opciones. Puede activarse o desactivarse.
- `radio`: Botones para elegir una opción entre varias (solo una puede estar activa).
- `submit`: Botón para enviar el formulario.
- `reset`: Restaura el formulario a su estado original.
- `date`: Muestra un selector de calendario para elegir una fecha.
- `time`: Selector para ingresar una hora.
- `file`: Permite subir archivos.
- `hidden`: Campo invisible que sirve para enviar datos sin mostrarlos.
- `range`: Control tipo deslizador entre valores definidos.
- `color`: Abre un selector visual para elegir un color.



---



## Dudas y consultas

- [https://doomling.dev/](https://doomling.dev/)

## Recursos

- [https://codigofacilito.com/cursos/javascript-dom](https://codigofacilito.com/cursos/javascript-dom)
- [https://www.flaticon.com/icon-fonts-most-downloaded](https://www.flaticon.com/icon-fonts-most-downloaded)
- Código que vimos en clase: [https://github.com/doomling/cf-forms](https://github.com/doomling/cf-forms)

## Recursos compartidos en clase (iconos)

1. [https://roadmap.sh/frontend](https://roadmap.sh/frontend)
2. [https://www.flaticon.com/](https://www.flaticon.com/)
3. [https://github.com/material-icons/material-icons-png](https://github.com/material-icons/material-icons-png)
