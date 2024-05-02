import { crearMetrica, agregarMetricaAProyecto, datosMetricasSonValidos } from "./moduloMetricasForm.js"; 

const pruebasInput = document.querySelector("#pruebas");
const lineasInput = document.querySelector("#lineas");
const coberturaInput = document.querySelector("#cobertura");
const metricaForm = document.querySelector("#metrica-form");
const botonRegresar = document.querySelector("#boton-regresar2");
const div = document.querySelector("#resultado-div");

let proyectoActual = JSON.parse(localStorage.getItem("proyectoActual")) || { metricas: [] };

metricaForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto
    
    const pruebas = parseInt(pruebasInput.value);
    const lineas = parseInt(lineasInput.value);
    const cobertura = parseInt(coberturaInput.value);
    
    if (datosMetricasSonValidos(pruebas, lineas, cobertura)) { 
        // Crear un objeto de métrica con los valores del formulario
        const metrica = crearMetrica(pruebas, lineas, cobertura);
        if (metrica !== null) {
            div.innerHTML = "<p>Métrica creada correctamente.</p>";
            // Agregar la métrica al proyecto
            agregarMetricaAProyecto(metrica, proyectoActual);
            // Guardar el proyecto actual en el almacenamiento local
            localStorage.setItem("proyectoActual", JSON.stringify(proyectoActual));
            
            // Redirigir al index
            window.location.href = "index.html";
        } else {
            div.innerHTML = "<p>Por favor, ingrese valores válidos para las métricas.</p>";
        }
    } else {
        div.innerHTML = "<p>Por favor, ingrese valores válidos para las métricas.</p>";
    }
});

botonRegresar.addEventListener("click", function() {
    window.location.href = "index.html";
});
