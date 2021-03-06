//* THIS IS THE CORRECT ONE

const coupons = [
  {
    name: "secret_coupon",
    discount: 15,
  },
  {
    name: "AlanSeyfir",
    discount: 30,
  },
  {
    name: "absol",
    discount: 25,
  },
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeDelPrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

  return precioConDescuento;
}

function buttonDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
