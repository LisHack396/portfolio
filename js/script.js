$(document).ready(inicializarEventos());

function inicializarEventos(){
    enlace = $(".nav-link");
    presionarEnlace(enlace);
}

function presionarEnlace(enlace){
    enlace.css("font-color", "blue");
}