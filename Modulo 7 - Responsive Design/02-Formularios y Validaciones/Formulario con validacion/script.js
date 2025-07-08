const myForm = document.querySelector("form");
const error = document.createElement("text");
error.innerText = "Verificar campos vacios";


function verifyForm() {
    // Trae todos los elementos inputs que quiero validar
    const items = document.querySelectorAll("input");

    items.forEach((item) => {
        // Verifica si el campo esta vacio
        if (item.value === "") {
            // Agrega un mensaje de error si los campos estan vacios ya que ve uno por uno
            item.classList.add("error"); // Aca le pongo el borde rojo (mirar la clase .error) a cada uno de los imputs que los llame item
            myForm.appendChild(error); // Aca le estoy agregando al form un nodo con un texto llamado error, que dice Verificar campos vacios
        } else {
            return true;
        }
    });

}

/* En JavaScript, cuando una función no tiene un return explícito, automáticamente devuelve undefined. 
En este caso si el input esta vacio entra al if (item.value === "") y crea el mensaje de error.
 Y como undefined es un valor falsy (es decir falso), la negación !verifyForm() lo interpreta como true, lo cual activa el event.preventDefault() y frena el envío del formulario.
 */

myForm.addEventListener("submit", function (event) {
    // Este dispara todo se queda escuchando el submit
    if (!verifyForm()) {
        // Si entra y se detiene el envio del formulario, es porque verifyForm() es falso por lo que !verifyForm() es verdadero, para poder entrar al if. 
        // Eso significa que arriba la funcion verifyForm() no entro al else ya que verifyForm() es falso y se cargo el mensaje de error.
        event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
    }
    // Si no entra al if se envia el formulario correctamente
});




