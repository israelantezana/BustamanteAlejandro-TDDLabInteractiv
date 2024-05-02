import { crearProyecto, agregarProyectoAProyectos, mostrarProyectos, eliminarProyecto } from "./moduloIndex.js";
import { mostrarMetricasProyecto } from "../MetricaIndex/moduloMetrica.js";

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
const proyectosContainer = document.createElement("div");
proyectos.forEach((proyecto) => {
  const proyectoElement = document.createElement("div");
  proyectoElement.innerHTML = `<h2>${proyecto.titulo}</h2><p>${proyecto.descripcion}</p>`;
  
  // Botón "Eliminar" para cada proyecto
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => {
    eliminarProyecto(proyecto,proyectos)
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    proyectoElement.remove();
  });
  proyectoElement.appendChild(deleteButton);
  
  // Botón "Agregar Métrica" para cada proyecto
  const agregarMetricaButton = document.createElement("button");
  agregarMetricaButton.textContent = "Agregar Métrica";
  agregarMetricaButton.addEventListener("click", () => {
    const url = `metricas.html?Titulo=${encodeURIComponent(proyecto.titulo)}`;
    window.location.href = url;
  });
  proyectoElement.appendChild(agregarMetricaButton);
  
  // Botón "Mostrar Métricas" para cada proyecto
  const mostrarMetricasButton = document.createElement("button");
  mostrarMetricasButton.textContent = "Mostrar Métricas";
  mostrarMetricasButton.addEventListener("click", () => {
    // Mostrar las métricas del proyecto
    mostrarMetricasProyecto(proyecto);
  });
  proyectoElement.appendChild(mostrarMetricasButton);

  // Contenedor para las métricas del proyecto
  const metricasContainer = document.createElement("div");
  proyectoElement.appendChild(metricasContainer);
  
  proyectosContainer.appendChild(proyectoElement);
});
document.body.appendChild(proyectosContainer);

botonAgregarProyecto.addEventListener("click", function () {
  window.location.href = "proyectos.html";
});
