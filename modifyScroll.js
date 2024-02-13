// script.js (carpeta-js/script.js)
// Obtener el elemento
var advertismentElement = document.getElementById('advertistment');

if(advertismentElement){
  // Evento al pasar el ratón sobre el elemento
  advertismentElement.addEventListener('mouseover', mostrarScroll);
  // Evento al salir del ratón del elemento
  advertismentElement.addEventListener('mouseout', ocultarScroll);
}

// Funciones para alternar la visibilidad del scroll
function mostrarScroll() {
  advertismentElement.style.overflowY = 'auto'; // Mostrar scroll
}

function ocultarScroll() {
  advertismentElement.style.overflowY= 'hidden'; // Ocultar scroll
}

var contenidoElement = document.getElementById('contenido');

if(contenidoElement){
  // Evento al pasar el ratón sobre el elemento
  contenidoElement.addEventListener('mouseover', mostrarScrollContenido);
  // Evento al salir del ratón del elemento
  contenidoElement.addEventListener('mouseout', ocultarScrollContenido);
}

// Funciones para alternar la visibilidad del scroll
function mostrarScrollContenido() {
  contenidoElement.style.overflowY = 'scroll'; // Mostrar scroll
}

function ocultarScrollContenido() {
  contenidoElement.style.overflowY= 'hidden'; // Ocultar scroll
}










