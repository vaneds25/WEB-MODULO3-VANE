/*

Operadores de Javascript

-Matemáticos: Para realizar cálculos matemáticos.

-Asignación: Para asignar valores a variables.

-Comparación: Para comparar valores.

-Lógicos: Para realizar cálculos lógicos.   

*/

//Operadores Matemáticos

let suma = 5 + 3
let resta = 10 - 2
let multiplicacion = 4 * 3
let modulo = 10 % 3 //residuo
let division = 10 / 3
let exponente = 2 ** 3

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("Modulo:", modulo);
console.log("División:", division);
console.log("Exponente:", exponente);

console.log(suma, resta, multiplicacion, modulo, division, exponente)

/*
Jerarquia de Operadores
1. () Paréntesis 
2. Exponentes **
3. Multiplicación * y División /
4. Suma + y Resta -

*/

//Ejemplo de Jerarquia 
let operacion1  = 2 + 3 * 4
let operacion2 = (2 + 3) * 4
let operacion3 = 2 + 3 * 4 / 2

console.log(operacion1, operacion2, operacion3)

//Operadores de comparación 

let mayor = 10 > 5 //true
let menor = 10 < 5 //false
let igual = 10 == 5 //false  es una compacación de VALOR 
let igual2= 5 == "5" //true débil
let estrictamenteigual = 5 === "5" //false estricto 
let diferente = 5 != "5" //true
let estrictamenteDiferente = 10 !== "10" //falso
let mayorIgual = 10 >= 5 //true
let menorIgual = 10 <= 5 //false

console.log(mayor, menor, igual, igual2, estrictamenteigual, diferente, estrictamenteDiferente, mayorIgual, menorIgual)