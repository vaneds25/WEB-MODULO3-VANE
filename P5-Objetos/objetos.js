class Libro {
    /**
     * Constructor de la clase Libro
     * @param {string} titulo - El título del libro
     * @param {string} autor - El autor del libro
     * @param {number} anio - El año de publicación del libro
     * @param {string} estado - Estado actual del libro ('disponible' o 'prestado')
     */
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo; // Guarda el título del libro en la propiedad de la clase
        this.autor = autor; // Guarda el nombre del autor en la propiedad de la clase
        this.anio = anio; // Guarda el año de publicación en la propiedad de la clase
        this.estado = estado; // Almacena el estado del libro, que puede ser 'disponible' o 'prestado'
        this.capitulos = []; // Inicializa una lista vacía para almacenar los capítulos del libro
    }

    /**
     * Método para mostrar en consola la información básica del libro
     */
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }

    /**
     * Método para agregar un capítulo a la lista de capítulos del libro
     * @param {string} capitulo - El título del capítulo a agregar
     */
    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo); // Agrega el capítulo recibido como parámetro a la lista de capítulos
        console.log(`Capítulo "${capitulo}" agregado.`);
    }

    /**
     * Método para eliminar un capítulo del libro si existe en la lista
     * @param {string} capitulo - El título del capítulo a eliminar
     */
    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo); // Busca el índice del capítulo en la lista
        if (index !== -1) {
            this.capitulos.splice(index, 1); // Si el capítulo existe, se elimina de la lista
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no existe.`); // Si no existe, muestra un mensaje en consola
        }
    }
}

/**
 * Ejemplo de uso de la clase Libro
 */
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible"); // Se crea un nuevo objeto libro
libro1.describirLibro(); // Se muestra la información del libro en consola
libro1.agregarCapitulo("Capítulo 1: El inicio"); // Se agrega un capítulo al libro
libro1.agregarCapitulo("Capítulo 2: La llegada de los gitanos"); // Se agrega otro capítulo al libro
libro1.eliminarCapitulo("Capítulo 1: El inicio"); // Se elimina un capítulo existente del libro
libro1.describirLibro(); // Se muestra nuevamente la información del libro