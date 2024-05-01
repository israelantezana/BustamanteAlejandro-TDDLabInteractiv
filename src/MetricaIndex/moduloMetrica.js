import Metrica from "../Metrica.js";

function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
    const cero = 0;
    if (pruebasAñadidas === null || pruebasAñadidas === undefined) {
      pruebasAñadidas = cero; 
    }
    if (lineasDeCodigo === null || lineasDeCodigo === undefined) {
      lineasDeCodigo = cero; 
    }
    if (cobertura === null || cobertura === undefined) {
      cobertura = cero; 
    } 
    return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
  }
  
export { crearMetrica };