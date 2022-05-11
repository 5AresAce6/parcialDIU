document.addEventListener("DOMContentLoaded", function(event) {

    var divComentarios = document.getElementById("comentarios");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayComentarios") == null) {
        array = [];
        localStorage.setItem("arrayComentarios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayComentarios"));
    }

    // Poblando el div que muestra los saludos
    var listaComentarios = JSON.parse(localStorage.getItem("arrayComentarios"));
    var divComentarios = document.getElementById("comentarios");
    listaComentarios.forEach(element => {
        divComentarios.innerHTML = divComentarios.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Saludos
function registrarComentario() {
    var texto = document.getElementById("texto_comentar");
    var nombre = document.getElementById("nombre");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayComentarios") == null) {
        array = [];
        localStorage.setItem("arrayComentarios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayComentarios"));
    }

    // Agregando un nuevo saludo al array
    array.push({ "Comentario": texto.value, "nombre": nombre.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayComentarios", JSON.stringify(array));

    // Recuperando el array de saludos del localStorage
    // para volverlo a mostrar
    var listadoSaludos = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los saludos
    var divComentarios = document.getElementById("saludos");

    // Recorriendo el array de saludos que viene del localStorage
    listadoSaludos.forEach(element => {
        // Se añade cada saludo al div como un card
        divComentarios.innerHTML = divComentarios.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["saludo"] + '</p></div></div>';
    });
    return false;
}