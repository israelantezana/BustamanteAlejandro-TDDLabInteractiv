import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos,eliminarProyecto} from "./moduloIndex.js";

const botonAgregarProyecto = document.querySelector("#boton-agregar-proyecto");
const botonBuscarProyecto = document.querySelector("#boton-buscar-proyecto");
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
document.body.appendChild(proyectosContainer);

botonAgregarProyecto.addEventListener("click", function () {
  window.location.href = "proyectos.html";
});
