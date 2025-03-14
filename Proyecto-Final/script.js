document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener el valor del comentario
    let commentText = document.getElementById("commentInput").value.trim();
    if (commentText === "") return;

    // Crear el elemento de comentario
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    // Obtener la fecha y hora actual
    let date = new Date();
    let formattedDate = date.toLocaleString();

    // Insertar contenido en el div
    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <small>${formattedDate}</small>
        <button class="delete">X</button>
    `;

    // Agregar el comentario a la sección
    document.getElementById("commentSection").appendChild(commentDiv);

    // Limpiar el campo de texto
    document.getElementById("commentInput").value = "";

    // Agregar evento para eliminar comentarios
    commentDiv.querySelector(".delete").addEventListener("click", function() {
        commentDiv.remove();
    });
});
