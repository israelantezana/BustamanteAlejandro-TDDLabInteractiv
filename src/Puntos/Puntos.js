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

export {CalcularPuntosPorPruebas};