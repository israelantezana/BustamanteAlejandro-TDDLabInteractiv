import Metrica from "../Metrica.js";

function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
  return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
}

export { crearMetrica };