import { crearMetrica } from "../MetricaIndex/moduloMetrica";

function CalcularPuntosPorPruebas(pruebasAñadidas) {
  let puntos = 0;
  if (pruebasAñadidas === 1) {
     puntos = 50;
  }
  if (pruebasAñadidas > 1 && pruebasAñadidas <= 3) {
    puntos = 25;
  }
  if (pruebasAñadidas > 3 || pruebasAñadidas === 0) {
    puntos = 0;
  }
  return puntos
}

function CalcularPuntosPorLineas(LineasAñadidas) {
  let puntos = 0;
  if (LineasAñadidas >= 5  && LineasAñadidas <= 10) {
     puntos = 75;
  }
  if (LineasAñadidas <= 4 || (LineasAñadidas >= 11 && LineasAñadidas <= 20) ) {
    puntos = 25;
  }
  if (LineasAñadidas >= 21 ) {
    puntos = 0;
  }
  return puntos;
}

function puntajeLogaritmico(puntaje) {
    const MULTIPLIER = 100;
    const LOG_REDUCTION = 1;
    return (Math.log10(puntaje) - LOG_REDUCTION) * MULTIPLIER;
}
function puntajePorCobertura(porcetajeCubierto) {
    let metrica = crearMetrica(0, 0, porcetajeCubierto);
    if (metrica.cobertura === 0) {
        return 0;
    }
    return Math.trunc(puntajeLogaritmico(metrica.cobertura));
}

function generarRecomendacion(puntajeFinalPruebas, puntajeFinalLineas, puntajeFinalCobertura) {
  const PREFIJO_PUNTAJE_ALTO = "Obtuviste un puntaje muy alto en ";
  const PREFIJO_PUNTAJE_BAJO = "Obtuviste un puntaje bajo en ";
  const SUFIJO_PUNTAJE_ALTO = "¡Continúa trabajando así. ";
  const SUFIJO_PUNTAJE_BAJO = "Te hace falta trabajar mucho esta métrica. ";
  let recomendacion = "";
  if (puntajeFinalPruebas === 0 && puntajeFinalLineas === 0 && puntajeFinalCobertura < 10) {
    return "Tus puntajes son muy bajos. Debes mejorar en todas las métricas";
  }
  if (puntajeFinalPruebas === 50) {
    recomendacion += PREFIJO_PUNTAJE_ALTO;
    recomendacion += "la cantidad de pruebas. ";
    recomendacion += SUFIJO_PUNTAJE_ALTO;
  }
  else {
    recomendacion += PREFIJO_PUNTAJE_BAJO;
    recomendacion += "la cantidad de pruebas. ";
    recomendacion += SUFIJO_PUNTAJE_BAJO;
  }
  if (puntajeFinalLineas === 75) {
    recomendacion += PREFIJO_PUNTAJE_ALTO;
    recomendacion += "líneas de código. ";
    recomendacion += SUFIJO_PUNTAJE_ALTO;
  }
  else {
    recomendacion += PREFIJO_PUNTAJE_BAJO;
    recomendacion += "líneas de código. ";
    recomendacion += SUFIJO_PUNTAJE_BAJO;
  }
  if (puntajeFinalCobertura > 90) {
    recomendacion += PREFIJO_PUNTAJE_ALTO;
    recomendacion += "la cobertura de código. ";
    recomendacion += SUFIJO_PUNTAJE_ALTO;
  }
  else {
    recomendacion += PREFIJO_PUNTAJE_BAJO;
    recomendacion += "la cobertura de código. ";
    recomendacion += SUFIJO_PUNTAJE_BAJO;
  }
  return recomendacion;
}

export {CalcularPuntosPorPruebas, CalcularPuntosPorLineas, puntajePorCobertura, generarRecomendacion};