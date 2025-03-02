/*

estructura if en javascript
-Permite ejecutar código solo si se cumple una condición 
- Puede usarse con operadores de comparación y lógicos

*/


let edad =10 
let tieneIne= false


// Condicional simple
if (edad >= 18 && tieneIne) {
    console.log("Tienes los requisitos para votar")
}

//Condicional con else
if (edad >= 18 && tieneIne) {
    console.log("Tienes los requisitos para votar")
}else{
    console.log("No tienes los requisitos para votar")
}

console.log("Fin del programa")


//Condicional con else if
if (edad < 13) {
    console.log("Eres un niño")
}else if (edad < 18){
    console.log("Eres un adolescente")
} else {
    console.log("Eres un adulto")
}

console.log("Fin del programa")


let tieneEntrada = false 

if (!tieneEntrada) {
    console.log("Debes cmomprar una entrada")
} else {
    console.log("Puedes entrar")
}

console.log("Fin del programa")