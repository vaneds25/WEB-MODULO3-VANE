/*
Ejercicio práctico
*/

//Contador del 0 al 4 

let contador = 0;

while (contador < 5) {

    console.log(contador);

    contador++;

}


//Ciclo While que cuente del 10 al 1 y lo imprima en la consola

// Ciclo While que cuenta del 10 al 1 e imprime en la consola
let contador2 = 10;
while (contador2 >= 1) {
    console.log(contador2);
    contador2--;
}


// Ciclo para que imprima sólo los números pares 

//inicialización
contador3 = 10;
//Mientras contador3 sea mayor o igual a 1, el bloque de código dentro del while se ejecutará
while (contador3 >= 1) {
    // condición dentro del ciclo que verifica si es par 
    if (contador3 % 2 === 0) {   //devuelve el residuo de una división 
        console.log(contador3);
    }
    //decremento del contador3
    contador3--;
}

/*
Explicado más a detalle: 
    -10 % 2: 10 dividido entre 2 da 5 exacto, sin residuo → Resultado: 0
    -9 % 2: 9 dividido entre 2 da 4 y sobra 1 → Resultado: 1
    -8 % 2: 8 dividido entre 2 da 4 exacto, sin residuo → Resultado: 0
    -7 % 2: 7 dividido entre 2 da 3 y sobra 1 → Resultado: 1

    ¿Cómo se usa para verificar si un número es par o impar?
Número par: Su residuo al dividirlo entre 2 es 0 → n % 2 === 0
Número impar: Su residuo al dividirlo entre 2 es 1 → n % 2 !== 0

*/




console.log("Fin del programa ejercicio práctico")