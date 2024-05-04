import { mostrarMetricasProyecto } from "./moduloMetrica.js";

document.addEventListener("DOMContentLoaded", () => {
    // Obtener el contenedor de métricas
    const metricasContainer = document.getElementById("metricas-container");

    // Obtener el título y el objeto de proyecto de la URL
    const parametros = new URLSearchParams(window.location.search);
    const tituloProyecto = parametros.get("Titulo");
    const proyectoCodificado = parametros.get("Proyecto");

    // Decodificar el objeto de proyecto
    const proyecto = JSON.parse(decodeURIComponent(proyectoCodificado));

    // Mostrar el título del proyecto
    const tituloProyectoElement = document.createElement("h2");
    tituloProyectoElement.textContent = `Título del Proyecto: ${tituloProyecto}`;
    metricasContainer.appendChild(tituloProyectoElement);

    // Mostrar las métricas del proyecto utilizando la función mostrarMetricasProyecto
    mostrarMetricasProyecto(proyecto);
    
    // Agregar evento de clic al botón de regresar
    const botonRegresar = document.querySelector("#boton-regresar");
    botonRegresar.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
