// Declaramos un arreglo con diferentes tipos de frutas
const frutas = ["manzana", "plátano", "manzana", "naranja", "plátano", "uva", "manzana", "naranja", "kiwi", "kiwi"];

// Objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// Usamos un ciclo for para contar las frutas

/*

 En cada iteración, verificamos si la fruta ya existe en el objeto:
   - Si existe, le sumamos 1 usando `++`.
   - Si no existe, la agregamos al objeto con un valor inicial de 1.

*/


for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya existe en el objeto, sumamos 1, si no, la inicializamos en 1
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

// Imprimimos el resultado para ver cuántas veces apareció cada fruta.
console.log("Conteo de frutas usando for:");
console.log(conteoFrutas);

/*

 FORMA DOS: Usando un ciclo while para contar las frutas

*/


const conteoFrutasWhile = {};
let j = 0;

while (j < frutas.length) {
    let fruta = frutas[j];

    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }

    j++;
}

// Imprimimos el resultado en consola
console.log("Conteo de frutas usando while:");
console.log(conteoFrutasWhile);
