# Hay dos maneras de declarar flexbox.

display: flexbox y display: inline-flex

# Diferencias entre `flex` e `inline-flex`

La diferencia principal entre `flex` e `inline-flex` en CSS radica en cómo afectan el comportamiento del contenedor en relación con otros elementos en la página.

## `display: flex;`
El elemento se convierte en un contenedor flexible con propiedades de bloque:
- Ocupa todo el ancho disponible dentro de su contenedor padre.
- Fuerza un salto de línea antes y después en el flujo del documento.

## `display: inline-flex;`
El elemento también se convierte en un contenedor flexible, pero con propiedades de elemento en línea:
- No ocupa todo el ancho disponible.
- Puede aparecer junto a otros elementos en la misma línea.

### Ejemplo en CSS
```css
.container-flex {
  display: flex;
  border: 2px solid red;
}

.container-inline-flex {
  display: inline-flex;
  border: 2px solid blue;
}
```

Si aplicas display: flex; a un div, lo verás como un bloque expansivo. Si usas display: inline-flex;, ese mismo div se comportará más como un span, adaptándose mejor al contenido sin romper la línea.
