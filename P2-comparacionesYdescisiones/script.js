// Declarar una variable nota con un valor entre 0 y 100
let nota = 85; // Sección en donde se puede cambiar el valor para probar diferentes resultados

// Evaluar la nota y asignar un mensaje personalizado
if (nota >= 90) {
    console.log("Nota: " + nota + " - Excelente");
} else if (nota >= 75) {
    console.log("Nota: " + nota + " - Bien");
} else if (nota >= 60) {
    console.log("Nota: " + nota + " - Suficiente");
} else {
    console.log("Nota: " + nota + " - No aprobado");
}

// Prueba con diferentes valores
testNotas([45, 60, 75, 90, 100, 0]);

function testNotas(notas) {
    notas.forEach(nota => {
        if (nota >= 90) {
            console.log(`Nota: ${nota} - Excelente`);
        } else if (nota >= 75) {
            console.log(`Nota: ${nota} - Bien`);
        } else if (nota >= 60) {
            console.log(`Nota: ${nota} - Suficiente`);
        } else {
            console.log(`Nota: ${nota} - No aprobado`);
        }
    });
}

console.log("Fin del programa de la práctica 2")