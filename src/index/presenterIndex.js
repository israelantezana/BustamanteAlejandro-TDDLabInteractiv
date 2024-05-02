import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos,eliminarProyecto,buscarPorNombre} from "./moduloIndex.js";

const botonAgregarProyecto = document.querySelector("#boton-agregar-proyecto");
const botonBuscarProyecto = document.querySelector("#buscar-proyectos-form");
const busqueda = document.querySelector("#busqueda")

let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
let proyectosBuscados=[]
const parametros = new URLSearchParams(window.location.search);
const titulo = parametros.get("Titulo");
const descripcion = parametros.get("Descripcion");

const nuevaURL = window.location.pathname;
window.history.replaceState({}, document.title, nuevaURL);
let nuevoProyecto = crearProyecto(titulo, descripcion);
agregarProyectoAProyectos(nuevoProyecto, proyectos);
localStorage.setItem("proyectos", JSON.stringify(proyectos));
mostrarProyectos(proyectos);
if (proyectosBuscados.length===0){
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
}
else{
  const proyectosContainer = document.createElement("div");
  proyectosBuscados.forEach((proyecto) => {
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
}

botonAgregarProyecto.addEventListener("click", function () {
  window.location.href = "proyectos.html";
});

botonBuscarProyecto.addEventListener("click", function () {
  //proyectosBuscados.append(buscarPorNombre(busqueda.value))
  proyectosBuscados[proyectosBuscados.length-1]=buscarPorNombre(busqueda.value)
});