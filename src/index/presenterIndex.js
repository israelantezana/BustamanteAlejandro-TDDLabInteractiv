import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos,eliminarProyecto, BuscarProyecto} from "./moduloIndex.js";


const titulo1 = document.querySelector("#titulo1");
const Buscarform = document.querySelector("#Buscar-form");
const div=document.querySelector("#resultado1-div")

const botonAgregarProyecto = document.querySelector("#boton-agregar-proyecto");
let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
const parametros = new URLSearchParams(window.location.search);
const titulo = parametros.get("Titulo");

const descripcion = parametros.get("Descripcion");

const nuevaURL = window.location.pathname;
window.history.replaceState({}, document.title, nuevaURL);
let nuevoProyecto = crearProyecto(titulo, descripcion);
agregarProyectoAProyectos(nuevoProyecto, proyectos);
localStorage.setItem("proyectos", JSON.stringify(proyectos));
mostrarProyectos(proyectos);
BuscarProyecto(proyectos, titulobuscado);
const proyectosContainer = document.createElement("div");

proyectos.forEach((proyecto) => {
  const proyectoElement = document.createElement("div");
  proyectoElement.innerHTML = `<h2>${proyecto.titulo}</h2><p>${proyecto.descripcion}</p>`;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  
  deleteButton.addEventListener("click", () => {
    eliminarProyecto(proyecto,proyectos)
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    proyectoElement.remove();
    
  });
  proyectoElement.appendChild(deleteButton);
  proyectosContainer.appendChild(proyectoElement);
});

Buscarform.addEventListener("submit", (event) => {
  event.preventDefault();
  const contenidoTitulo = titulo1.value;
  div.innerHTML = BuscarProyecto(proyectos, titulobuscado);
});


document.body.appendChild(proyectosContainer);

botonAgregarProyecto.addEventListener("click", function () {
  window.location.href = "proyectos.html";
});
