/*
    TIPOS DE DATOS EN JAVASCRIPT: práctica
*/

// Tipo: Number (Número)
var alumnos = 42;
var numeromaligno = -666;
var goles = 0;
var temperatura = -19;

// Tipo: String (Texto)
var miedad = "Veinticinco"; // Con comillas dobles
var character = "a";
var edadCadena = "25";
var saludo = "Hola, mundo"; 

// Tipo: Boolean (Booleano)
var soymuyguapa = true; 
var veobiensinlentes = false; 
var tienePermiso = true;
var esNoche = false;

// Tipo: Symbol (Identificador único)
var identificador1 = Symbol("id");
var identificador2 = Symbol("id");

// Tipo: BigInt (Números muy grandes)
var numeroGrande = 347485734583490584390n;
var numeroGrande2 = 987654321098765432109n;

/*
    NULL, UNDEFINED y NaN en Javascript
*/

// Tipo: Null (Valor vacío INTENCIONALMENTE)
var vacio = null;

// Tipo: Undefined (Valor NO asignado)
var sinDefinir;

// Tipo: NaN (Not a Number - Cuando una operación matemática no tiene sentido)
var resultadoInvalido = "Hola" * 10;

/*
    USO DE console.log PARA IMPRIMIR VALORES Y TIPOS
*/

console.log("🔹 Valores de variables:");
console.log(alumnos, numeromaligno, goles, temperatura);
console.log(miedad, character, edadCadena, saludo);
console.log(soymuyguapa, veobiensinlentes, tienePermiso, esNoche);
console.log(identificador1, identificador2);
console.log(numeroGrande, numeroGrande2);
console.log(vacio, sinDefinir, resultadoInvalido);

console.log("\n🔹 Tipos de datos:");
console.log(typeof alumnos, typeof numeromaligno, typeof goles, typeof temperatura);
console.log(typeof miedad, typeof character, typeof edadCadena, typeof saludo);
console.log(typeof soymuyguapa, typeof veobiensinlentes, typeof tienePermiso, typeof esNoche);
console.log(typeof identificador1, typeof identificador2);
console.log(typeof numeroGrande);
console.log(typeof vacio); // object (caso especial en JS)
console.log(typeof sinDefinir);
console.log(typeof resultadoInvalido); // number (aunque sea NaN)
console.log(typeof Symbol("id"));
console.log(typeof 12345678901234567890n);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof NaN);
console.log(typeof Infinity);
