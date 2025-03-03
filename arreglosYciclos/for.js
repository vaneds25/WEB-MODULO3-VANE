// Ejemplo 1: Imprimir los números del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Ejemplo 2: Sumar los números del 1 al 10
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Suma del 1 al 10:", suma); // Imprime: 55

// Ejercicio 1: Contador inverso del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Ejercicio 2: Sumar solo los números pares del 1 al 20
let sumaPares = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Verifica si es par
        sumaPares += i;
    }
}
console.log("Suma de los números pares del 1 al 20:", sumaPares);
