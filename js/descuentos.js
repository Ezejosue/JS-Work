function calcularPrecioDescuento(precio, descuento) {
  const porcentajeprecio = 100 - parseFloat(descuento);
  const precioDescuento = (parseFloat(precio) * porcentajeprecio) / 100;
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

const coupons = [
  {
    name: "Basic",
    discount: 15,
  },
  {
    name: "Medium",
    discount: 30,
  },
  {
    name: "Premium",
    discount: 25,
  },
];

function oncalcularPrecioDescuentoC() {
  const input = document.getElementById("precio");
  const precio = input.value;
  const cupon = document.getElementById("cupon");
  const cuponValor = cupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === cuponValor;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + cuponValor + "no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioDescuento(precio, descuento);
    const resultP = document.getElementById("pResultado");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
