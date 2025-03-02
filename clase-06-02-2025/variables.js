/*
    DIFERENCIAS ENTRE VAR, LET Y CONST EN JAVASCRIPT

    -var: se puede reasignar y redeclarar en cualquier parte del código. 
    -let:  Se puede reasignar, pero NO se puede redeclarar en el mismo ámbito. 
    -const: No se puede reasignar ni redeclarar en el mismo ámbito. No se modifica. 

*/


//VAR - Se puede redeclarar y reasignar en cualquier parte del código
var nombre = "Juan"; // Declaramos una variable var 
nombre = "Valery"; // Reasignamos el valor del nombre
var nombre = "Luis"; //Redeclarar la variable sin problema
console.log("Mi nombre es:", nombre);

// LET 
let apellido = "Villanueva" // Declarando una variable con let 
apellido = "Corona" // Reasignando el valor del apellido
// ERROR no se puede redeclarar en el mismo ámbito 
// let apellido = "Parra"  
console.log("Mi apellido es:", apellido);

// CONST
const gravedad = "9.81 M/s2" // Declarando una variable con const
// ERROR no se puede reasignar ni redeclarar en el mismo ámbito
// gravedad = "10.1 m/s2"
// const gravedad = 9.80;
console.log("La gravedad es:", gravedad);