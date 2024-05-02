import { mostrarMetricasProyecto } from "./moduloMetrica.js";

const botonVerMetricas = document.querySelector("#boton-ver-metricas");

botonVerMetricas.addEventListener("click", () => {
    const parametros = new URLSearchParams(window.location.search);
    const tituloProyecto = parametros.get("Titulo");

    const proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
    const proyecto = proyectos.find(proyecto => proyecto.titulo === tituloProyecto);

    if (proyecto) {
        mostrarMetricasProyecto(proyecto);
    } else {
        const errorDiv = document.querySelector("#error-div");
        errorDiv.textContent = "El proyecto no fue encontrado.";
    }
});
