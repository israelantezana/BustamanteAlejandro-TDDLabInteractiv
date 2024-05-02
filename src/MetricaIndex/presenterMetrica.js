import { crearMetrica, agregarMetricaAProyecto, eliminarMetricaDeProyecto, mostrarMetricasProyecto } from "./moduloMetrica.js";

const metricaForm = document.querySelector("#metrica-form");
const botonRegresar = document.querySelector("#boton-regresar2");
const div = document.querySelector("#resultado-div");
const proyectosContainer = document.querySelector("#proyectos-container");

let proyectoActual = JSON.parse(localStorage.getItem("proyectoActual")) || { metricas: [] };

metricaForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    const pruebas = parseInt(metricaForm.querySelector("#pruebas").value);
    const lineas = parseInt(metricaForm.querySelector("#lineas").value);
    const cobertura = parseInt(metricaForm.querySelector("#cobertura").value);

    const metrica = crearMetrica(pruebas, lineas, cobertura);
    if (metrica !== null) {
        div.innerHTML = "<p>Métrica creada correctamente.</p>";
        agregarMetricaAProyecto(metrica, proyectoActual);
        localStorage.setItem("proyectoActual", JSON.stringify(proyectoActual));
        mostrarMetricasProyecto(proyectoActual);
    } else {
        div.innerHTML = "<p>Por favor, ingrese valores válidos para las métricas.</p>";
    }
});

botonRegresar.addEventListener("click", function() {
    window.location.href = "index.html";
});

proyectosContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("eliminar-metrica")) {
        const metricaIndex = parseInt(target.dataset.index);
        const metricaAEliminar = proyectoActual.metricas[metricaIndex];
        const resultado = eliminarMetricaDeProyecto(metricaAEliminar, proyectoActual);
        if (resultado === "Se eliminó la métrica del proyecto con éxito") {
            localStorage.setItem("proyectoActual", JSON.stringify(proyectoActual));
            mostrarMetricasProyecto(proyectoActual);
        } else {
            div.innerHTML = `<p>${resultado}</p>`;
        }
    }
});
