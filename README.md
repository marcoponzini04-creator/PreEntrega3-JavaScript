
# Simulador de venta de entradas

Proyecto desarrollado para las Pre-Entregas 3 y 4 del curso de JavaScript de Coderhouse.

## Descripción

Simulador de venta de entradas para un evento que permite seleccionar entradas de tipo General, Preferencial o VIP, calcular el total de la compra y mostrar un resumen final.

Además, incorpora un sistema de gestión de asistentes que permite registrar nuevos participantes, consultar si están registrados, conocer su posición en la lista, modificar nombres y eliminar registros.

## Funcionalidades

- Venta de entradas General, Preferencial y VIP.
- Cálculo del total de la compra.
- Registro de asistentes mediante arrays.
- Manipulación de listas con `push()`, `unshift()` y `pop()`.
- Búsqueda de asistentes mediante `includes()` e `indexOf()`.
- Modificación de registros utilizando `splice()`.
- Recorrido de asistentes mediante `for...of`.
- Validación de datos ingresados por el usuario.
- Resumen final de la compra.

## Tecnologías y conceptos utilizados

JavaScript, HTML, variables, arrays, funciones, parámetros, `return`, condicionales y ciclos.

## Cómo ejecutarlo

1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador.
3. Interactuar con el simulador mediante las ventanas emergentes (`prompt` y `alert`).
4. Abrir la consola del navegador con `F12` para visualizar los resultados.

## Pre-Entrega 5 - Instanciando Objetos

En esta entrega se incorporó programación orientada a objetos al simulador de venta de entradas.

### Funcionalidades agregadas

- Creación de una clase Entrada utilizando class.
- Uso de constructor y this para definir las propiedades tipo, precio, sector y stock.
- Instanciación de tres objetos mediante new: General, Preferencial y VIP.
- Implementación del método vender() para descontar entradas del stock.
- Verificación de disponibilidad antes de realizar una compra.
- Integración de los objetos con el menú de compras, las funciones, los ciclos y los arrays existentes.
- Visualización de los objetos y del stock actualizado mediante console.log().

### Tecnologías utilizadas

- HTML5
- JavaScript
- Programación orientada a objetos
- Arrays, funciones, condicionales y ciclos

## Pre-Entrega 6 - Funciones de Orden Superior

En esta entrega se incorporaron funciones de orden superior al simulador de venta de entradas, permitiendo consultar y transformar la información almacenada en un array de objetos.

### Funcionalidades agregadas

- Creación de un array de objetos a partir de las instancias de la clase Entrada.
- Implementación de find() para buscar una entrada según su tipo.
- Implementación de filter() para consultar las entradas con stock disponible.
- Implementación de map() para generar una lista de tipos de entrada y precios.
- Incorporación de nuevas opciones al menú interactivo.
- Integración de los métodos con las clases, funciones, arrays y ciclos de las entregas anteriores.
- Visualización de los resultados mediante console.log().

### Nuevas opciones del menú

- Opción 5: Buscar una entrada.
- Opción 6: Ver entradas disponibles.
- Opción 7: Ver lista de precios.

### Conceptos aplicados

- Funciones de orden superior.
- Funciones flecha.
- Métodos find(), filter() y map().
- Arrays de objetos.
- Programación orientada a objetos.