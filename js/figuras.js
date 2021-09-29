//Constantes
const PI = Math.PI;

// Código del cuadrado
console.group("Cuadrado");

//Funciones
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

function areaT(baseT, alturaT) {
  return (baseT * alturaT) / 2;
}

function perimetroT(lado, lado2, baseT) {
  return parseInt(lado) + parseInt(lado2) + parseInt(baseT);
}
console.groupEnd();

//Código del circulo
console.group("Circulo");

function diametroC(radio) {
  return radio * 2;
}

function perimetroC(diametroC) {
  return diametroC * PI;
}
function areaC(radio) {
  return Math.pow(2, radio) * PI;
}

console.groupEnd();



//Funciones
function calcularPerimetroC() {
  const input = document.getElementById("ladoC");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaC() {
  const input = document.getElementById("ladoC");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function CalcularAreaT() {
  const input = document.getElementById("baseT");
  const value = input.value;
  const input2 = document.getElementById("AlturaT");
  const value2 = input2.value;
  const area = areaT(value, value2);
  alert("El area del triangulo es " + area + "cm");
}

function calcularPerimetroT() {
  const input = document.getElementById("baseT");
  const value = input.value;
  const input2 = document.getElementById("ladoT");
  const value2 = input2.value;
  const input3 = document.getElementById("ladoT1");
  const value3 = input3.value;

  const perimetro = perimetroT(value, value2, value3);
  alert("El perimetro del triangulo es " + perimetro + "cm");
}


function calcularAreaCir() {
  const input = document.getElementById("radio");
  const value = input.value;
  const area = areaC(value);
  alert(area);
}
function calcularPerimetroCir() {
  const input = document.getElementById("radio");
  const value = input.value;
  const diametro = diametroC(value);
  const perimetro = perimetroC(diametro);
  alert(perimetro);
}