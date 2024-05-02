function CalcularPuntosPorPruebas(pruebasAñadidas) {
  let puntos = 0;
  if (pruebasAñadidas === 1) {
     puntos = 2;
  }
  if (pruebasAñadidas > 1 && pruebasAñadidas <= 3) {
    puntos = 1;
  }
  return puntos
}

export {CalcularPuntosPorPruebas};