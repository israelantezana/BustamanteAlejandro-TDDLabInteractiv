import Metrica from "../Metrica.js";

  function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
      const cero = 0;
      const valorindefinido = undefined;
      const valornulo = null;
      const valorTope = 100;
      if (pruebasAñadidas === valornulo || pruebasAñadidas === valorindefinido || pruebasAñadidas < cero) {
        pruebasAñadidas = cero; 
      }
      if (lineasDeCodigo === valornulo || lineasDeCodigo === valorindefinido || lineasDeCodigo < cero) {
        lineasDeCodigo = cero; 
      }
      if (cobertura === valornulo || cobertura === valorindefinido || cobertura < cero) {
        cobertura = cero; 
      } 
      if (pruebasAñadidas > valorTope || lineasDeCodigo > valorTope || cobertura > valorTope) {
          console.log("Ponga un valor real porfavor");
          return null;
        }

      return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
    }

  function agregarMetricaAProyecto(metrica, proyecto) {
    if (!proyecto || !Array.isArray(proyecto.metricas)) {
        return "No se puede agregar una métrica a un proyecto no existente";
      } else {
      proyecto.metricas.push(metrica);
      return proyecto.metricas[proyecto.metricas.length - 1];
      }
    }

    function eliminarMetricaDeProyecto(metrica, proyecto) {
        if (!proyecto || !Array.isArray(proyecto.metricas)) {
          return "No se puede eliminar una métrica que no existe en el proyecto";
        } else {
          const indiceMetricaAEliminar = proyecto.metricas.indexOf(metrica);
          if (indiceMetricaAEliminar === -1) {
            return "No se puede eliminar una métrica que no existe en el proyecto";
          } else {
            proyecto.metricas.splice(indiceMetricaAEliminar, 1);
            return "Se eliminó la métrica del proyecto con éxito";
          }
        }
      }

      function modificarMetrica(metrica, nuevasPruebasAñadidas, nuevasLineasDeCodigo, nuevaCobertura) {
        return { ...metrica, pruebasAñadidas: nuevasPruebasAñadidas, lineasDeCodigo: nuevasLineasDeCodigo, cobertura: nuevaCobertura };
      }
      
/*
      function mostrarMetricas(proyecto, proyectoElement) {
        const metricasActuales = proyectoElement.querySelectorAll(".metrica");
        metricasActuales.forEach(metrica => metrica.remove());
        proyecto.metricas.forEach(metrica => {
          const nuevaMetricaElement = document.createElement("div");
          nuevaMetricaElement.textContent = `Pruebas añadidas: ${metrica.pruebasAñadidas}, Líneas de código: ${metrica.lineasDeCodigo}, Cobertura: ${metrica.cobertura}%`;
          nuevaMetricaElement.classList.add("metrica");
          proyectoElement.appendChild(nuevaMetricaElement);
        });
      }*/
      
export { crearMetrica, agregarMetricaAProyecto ,eliminarMetricaDeProyecto,modificarMetrica };