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
  if (LineasAñadidas <= 4 || LineasAñadidas >= 11 ) {
    puntos = 1;
 }
  return puntos;
}

export {CalcularPuntosPorPruebas, CalcularPuntosPorLineas};