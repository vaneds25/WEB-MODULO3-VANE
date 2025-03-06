
// Ejercicio Objeto Auto
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    mostrarInfo: function() {
        console.log(`Auto: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
};

auto.mostrarInfo();

// Ejercicio Objeto Celular
const celular = {
    marca: "Samsung",
    modelo: "Galaxy S21",
    almacenamiento: "128GB",
    mostrarInfo: function() {
        console.log(`Celular: ${this.marca} ${this.modelo}, Almacenamiento: ${this.almacenamiento}`);
    }
};

celular.mostrarInfo();


/*


Uso -	Contexto -	Ejemplo
${} - en template literals- Interpolación de variables en cadenas -	`Hola, ${nombre}`
$() -en jQuery -	Selección de elementos del DOM-	$("#id")
$ -en RegExp- Indica el final de la cadena -	/mundo$/
$ - en nombres de variables/propiedades	Se puede usar como parte de un nombre - const precio$ = 100;


*/