

**LOS MEDIA QUERIES VAN SIEMPRE AL FINAL DEL CSS. SINO NO SE APLICAN POR ESPECIFICIDAD**

---

**El max-width siempre se ordena de media queries mayor a media queries menor**



/* @media (max-width: 800px){

    ///  Aca se ejecuta siempre y cuando el ancho no supere los 800px
    /// Del maximo para abajo
    /// Como maximo 800px
    .element{
        background-color: crimson;   
    }

}
*/

/*
@media (max-width: 500px){

   /// Aca se ejecuta siempre y cuando el ancho no supere los 500px
   /// Del maximo para abajo 
   /// Como maximo 500px
   .element{
        background-color: blueviolet;   
    }

} 

*/


--- 

**El min-width siempre se ordena de media queries menor a media queries mayor**


@media (min-width:600px) {

    /* Aca se aplica si el ancho no baja de 600px
    Se aplica por encima de 600px
    Del minimo para arriba
    /// Como minimo 600px
*/
    .element {
        background-color: crimson;
    }

}

@media (min-width:900px) {

    /* Aca se aplica si el ancho no baja de 900px.
    Se aplica por encima de 900px.
    Del minimo para arriba
    /// Como minimo 900px
    */
    .element {
        background-color: #000;
    }

}

