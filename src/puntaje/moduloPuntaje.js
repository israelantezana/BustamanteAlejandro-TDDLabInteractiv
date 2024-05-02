import { crearMetrica } from "../MetricaIndex/moduloMetrica";

function CalcularPuntosPorPruebas(pruebasAñadidas) {
  let puntos = 0;
  if (pruebasAñadidas === 1) {
     puntos = 2;
  }
  if (pruebasAñadidas > 1 && pruebasAñadidas <= 3) {
    puntos = 1;
  }
  if (pruebasAñadidas > 3 || pruebasAñadidas === 0) {
    puntos = 0;
  }
  return puntos
}

function CalcularPuntosPorLineas(LineasAñadidas) {
  let puntos = 0;
  if (LineasAñadidas >= 5  && LineasAñadidas <= 10) {
     puntos = 3;
  }
  if (LineasAñadidas <= 4 || (LineasAñadidas >= 11 && LineasAñadidas <= 20) ) {
    puntos = 1;
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

export {CalcularPuntosPorPruebas, CalcularPuntosPorLineas, puntajePorCobertura};