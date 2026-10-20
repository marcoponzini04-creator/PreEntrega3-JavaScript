const nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);
if (nombre === null || nombre === "") {
    alert("Debes ingresas un nombre para continuar.");
} else {

const precioGeneral = 10000;
const precioPreferencial = 15000;
const precioVIP = 25000;
function obtenerPrecio(opcion) {
    if (opcion === "1") {
        return precioGeneral;

    } else if (opcion === "2") {
        return precioPreferencial;
    }
      else if (opcion === "3") {
        return precioVIP;

    }
}
const obtenerTipoEntrada = function(opcion) {
    if (opcion === "1") {
        return "Entrada General";
    } else if (opcion === "2") {
        return "Entrada Preferencial";
    } else if (opcion === "3") {
        return "Entrada VIP";
    }
};
const calcularTotal = (totalActual, precio) => totalActual + precio;
let opcion = "";
let total = 0;
let cantidadEntradas = 0;

while (opcion !== "4") {
    opcion = prompt(
    "Elegi una opcion:\n1 - Entrada General: $10.000\n2 - Entrada Preferencial: $15.000\n3 - Entrada VIP: $25.000\n4 - Salir"
)

console.log(opcion);

if (opcion === "1" || opcion === "2" || opcion === "3") {
    console.log("Elegiste " + obtenerTipoEntrada(opcion));
    total = calcularTotal(total, obtenerPrecio(opcion));
    cantidadEntradas = cantidadEntradas + 1;
    console.log("Total acumulado: $" + total);

} else if (opcion === "4" || opcion === null) {
    console.log("Saliendo...");
    opcion = "4";
    if (cantidadEntradas > 0) {

        console.log("Gracias por tu compra, " + nombre);
        alert("Gracias por tu compra, " + nombre +
            "\nCantidad de entradas: " + cantidadEntradas +
            "\nTotal de la compra: $" + total);
    console.log("Cantidad de entradas compradas: " + cantidadEntradas);
    console.log("Total de la compra: $" + total);

    } else {
        console.log("No realizaste ninguna compra.");
        alert("No realizaste ninguna compra.");
    }
    
} else {
    console.log("Opcion invalida");
 }
}
}