document.addEventListener("DOMContentLoaded", function () {
    // Selección de elementos del DOM
    const commentInput = document.getElementById("commentInput");
    const addCommentBtn = document.getElementById("addCommentBtn");
    const commentSection = document.getElementById("commentSection");

    // Evento para agregar comentario
    addCommentBtn.addEventListener("click", function () {
        const commentText = commentInput.value.trim(); // Obtener el texto y eliminar espacios vacíos

        if (commentText === "") {
            alert("Por favor, escribe un comentario.");
            return;
        }

        // Crear un nuevo elemento de comentario
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        // Obtener la fecha y hora actual
        const now = new Date();
        const timeString = now.toLocaleString(); 

        // Agregar contenido al comentario
        commentDiv.innerHTML = `
            <p>${commentText}</p>
            <small>Publicado el: ${timeString}</small>
            <button class="delete-btn">Eliminar</button>
        `;

        // Agregar evento al botón de eliminar
        const deleteBtn = commentDiv.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            commentDiv.remove();
        });

        // Agregar comentario a la sección de comentarios
        commentSection.appendChild(commentDiv);

        // Limpiar el campo de entrada
        commentInput.value = "";
    });
});
