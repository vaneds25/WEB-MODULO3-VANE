// Operadores de Comparación

let a = 5;
let b = "5";

console.log("== (Igualdad débil):", a == b); // true
console.log("=== (Igualdad estricta):", a === b); // false

let x = 10;
let y = 8;

console.log("> (Mayor que):", x > y); // true
console.log("< (Menor que):", x < y); // false
console.log(">= (Mayor o igual que):", x >= 10); // true
console.log("<= (Menor o igual que):", x <= 5); // false

// Operadores de Diferencia
console.log("!= (Diferencia débil):", a != b); // false
console.log("!== (Diferencia estricta):", a !== b); // true

// Operadores Lógicos

let edad = 20;
let tieneLicencia = true;
console.log("&& (AND):", edad >= 18 && tieneLicencia); // true

let esMayorDeEdad = false;
let esEstudiante = true;
console.log("|| (OR):", esMayorDeEdad || esEstudiante); // true

let esFinDeSemana = true;
console.log("! (NOT):", !esFinDeSemana); // false

// Combinación de operadores
let tieneMembresia = false;
let estaAcompañadoPorAdulto = true;

console.log(
    "Combinación (&& y ||):",
    (edad >= 18 && tieneMembresia) || estaAcompañadoPorAdulto
); // true
