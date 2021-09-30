function calcularPrecioDescuento(precio, descuento) {
  const porcentajeprecio = 100 - descuento;
  const precioDescuento = (precio * porcentajeprecio) / 100;
  return precioDescuento;
}

function oncalcularPrecioDescuento() {
  const input = document.getElementById("precio");
  const precio = input.value;
  const input2 = document.getElementById("descuento");
  const descuento = input2.value;

  const precioDescuento = calcularPrecioDescuento(precio, descuento);
  const pResultado = document.getElementById("pResultado");

  pResultado.innerText = "El precio con descuento es: $" + precioDescuento;
}
