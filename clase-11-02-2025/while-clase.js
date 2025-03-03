// Ejemplo 1: Contador SIMPLE CON WHILE

let contador= 1;

while(contador <= 5) {
    console.log("El contador esta en el ciclo:", contador);
    contador++; // <- es equivalente a contador = contador + 1 o contador +=1
}

//Ejemplo 2: Contador INVERSO CON WHILE

let contador2 = 10;

while(contador2 >= 0) {
    console.log("El contador esta en el ciclo:", contador2);
    contador2--; // <- es equivalente a contador = contador - 1 o contador -=1
}

//Ejemplo 3: Solicitar confirmación hasta que el usuario acepte 

let confirmacion = true;

while(confirmacion) {
    //otras tareas dentro del ciclo
    confirmacion = confirm("¿Quieres realizar otra operación?"); // confirmación devuelve true or false
    console.log("El usuario ha confirmado:", confirmacion);
}