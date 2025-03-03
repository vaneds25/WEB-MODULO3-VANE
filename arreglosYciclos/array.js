// Ejercicio Práctico sobre Arrays

// 1. Crear un Array: Crea un array llamado "colores" con al menos cuatro colores diferentes.
let colores = ['rojo', 'verde', 'azul', 'amarillo'];

// 2. Imprimir el Segundo Color: Imprime el segundo color del array.
console.log("El segundo color es:", colores[1]);

// 3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
colores[2] = 'naranja';
console.log("Array después de modificar el tercer color:", colores);

// 4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
colores.push('violeta');
console.log("Array después de añadir un nuevo color:", colores);

// 5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
colores.shift();
console.log("Array después de eliminar el primer color:", colores);

// 6. Mostrar la Longitud del Array: Muestra cuántos elementos tiene el array.
console.log("Número total de colores en el array:", colores.length);

// 7. Iterar sobre el Array: Usa un bucle para imprimir cada color en una línea distinta.
console.log("Lista de colores:");
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}

// 8. Ordenar el Array: Ordena el array en orden alfabetico.
colores.sort();
console.log("Array ordenado alfabeticamente:", colores);        

// 9. Invertir el Array: Invierte el orden de los elementos en el array.    
colores.reverse();
console.log("Array invertido:", colores);       
