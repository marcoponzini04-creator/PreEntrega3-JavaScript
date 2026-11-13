const nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);
if (nombre === null || nombre === "") {
    alert("Debes ingresar un nombre para continuar.");
} else {

    const precioGeneral = 10000;
    const precioPreferencial = 15000;
    const precioVIP = 25000;
    // Clase para representar las entradas del evento
    class Entrada {
        constructor(tipo, precio, sector, stock) {
            this.tipo = tipo;
            this.precio = precio;
            this.sector = sector;
            this.stock = stock;
        }
        vender() {
            if (this.stock > 0) {
                this.stock = this.stock - 1;
                console.log("Entrada vendida: " + this.tipo);
                console.log("Stock restante: " + this.stock);
            } else {
                console.log("No hay entradas disponibles.");
            }
        }
    }
    // Creamos nuestra primera entrada
    const entradaGeneral = new Entrada("General", 10000, "Campo", 100);
    const entradaPreferencial = new Entrada("Preferencial", 15000, "Platea", 50);
    const entradaVIP = new Entrada("VIP", 25000, "Palco", 20);
    console.log(entradaGeneral);
    console.log(entradaPreferencial);
    console.log(entradaVIP);
    // Array de objetos con las entradas del evento
    const entradas = [entradaGeneral, entradaPreferencial, entradaVIP];

    console.log(entradas);

    const asistentes = ["Juan", "María", "Pedro", "Ana", "Luis"];
    console.log(asistentes);
    console.log(asistentes[2]);
    // Se registra una nueva asistente al evento
    asistentes.push("Sofía");
    console.log(asistentes);
    // Se agrega una asistente con acceso prioritatio
    asistentes.unshift("Camila");
    console.log(asistentes);
    // Se cancela la inscripción del último asistente
    const asistenteEliminado = asistentes.pop();
    console.log("Se ha eliminado el asistente: " + asistenteEliminado);
    console.log(asistentes);
    // Se corrige el nombre de un asistente registrado
    asistentes.splice(3, 1, "Tomás");
    console.log("Lista actualizada: ", asistentes);
    const asistenteBuscado = prompt("¿Qué asistente querés buscar?");
    if (asistentes.includes(asistenteBuscado)) {
        console.log("El asistente esta registrado");
        console.log("Posición en la lista: " + asistentes.indexOf(asistenteBuscado));
    } else {
        console.log("El asistente no esta registrado");
    }

    function mostrarAsistentes(lista) {
        console.log("--- LISTA DE ASISTENTES ---");

        for (const asistente of lista) {
            console.log("Asistente: " + asistente);
        }
    }
    mostrarAsistentes(asistentes);
    // Obtiene el objeto Entrada según la opción elegida
    function obtenerEntrada(opcion) {
        if (opcion === "1") return entradaGeneral;
        else if (opcion === "2") return entradaPreferencial;
        else if (opcion === "3") return entradaVIP;
    }
    function obtenerPrecio(opcion) {
        if (opcion === "1") {
            return precioGeneral;

        } else if (opcion === "2") {
            return precioPreferencial;

        } else if (opcion === "3") {
            return precioVIP;

        }
    }
    const obtenerTipoEntrada = function (opcion) {
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
            "Elegí una opción:\n" +
            "1 - Comprar entrada General: $10.000\n" +
            "2 - Comprar entrada Preferencial: $15.000\n" +
            "3 - Comprar entrada VIP: $25.000\n" +
            "4 - Salir\n" +
            "5 - Buscar una entrada\n" +
            "6 - Ver entradas disponibles\n" +
            "7 - Ver lista de precios"
        );

        console.log(opcion);

        if (opcion === "1" || opcion === "2" || opcion === "3") {
            console.log("Elegiste " + obtenerTipoEntrada(opcion));
            const entradaSeleccionada = obtenerEntrada(opcion);
            console.log("Stock disponible: " + entradaSeleccionada.stock);
            // Verificamos si hay entradas disponibles
            if (entradaSeleccionada.stock === 0) {
                alert("Lo sentimos, no quedan entradas de este tipo.");
                continue;
            }
            const nuevoAsistente = prompt("¿Cuál es el nombre del asistente?");
            if (nuevoAsistente !== null && nuevoAsistente.trim() !== "") {
                entradaSeleccionada.vender();
                asistentes.push(nuevoAsistente.trim());
                total = calcularTotal(total, obtenerPrecio(opcion));
                cantidadEntradas = cantidadEntradas + 1;
                console.log("Total acumulado: $" + total);
                console.log("Asistente registrado: " + nuevoAsistente.trim());
                console.log("¿Está registrado? " + asistentes.includes(nuevoAsistente.trim()));
                mostrarAsistentes(asistentes);
            } else {
                console.log("No se registró ningún asistente.");
            }


        } else if (opcion === "5") {
            // Buscamos una entrada según el tipo ingresado
            const tipoBuscado = prompt("¿Qué entrada querés buscar? General, Preferencial o VIP");

            if (tipoBuscado !== null) {
                const resultado = entradas.find(

                    entrada => entrada.tipo.toLowerCase() === tipoBuscado.trim().toLowerCase()
                );

                if (resultado) {
                    console.log("Entrada encontrada:", resultado);
                } else {
                    console.log("No se encontró esa entrada.");
                }
            }
        } else if (opcion === "6") {
            // Mostramos las entradas que tienen stock disponible
            const disponibles = entradas.filter(entrada => entrada.stock > 0);

            console.log("Entradas disponibles:", disponibles);

        } else if (opcion === "7") {
            // Creamos una lista de precios con map()
            const preciosEntradas = entradas.map(
                entrada => entrada.tipo + ": $" + entrada.precio
            );

            console.log("Lista de precios:", preciosEntradas);

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