import Metrica from "../Metrica.js";

function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
    if (pruebasAñadidas === null || pruebasAñadidas === undefined) {
      pruebasAñadidas = 0; 
    }
    if (lineasDeCodigo === null || lineasDeCodigo === undefined) {
      lineasDeCodigo = 0; 
    }
    if (cobertura === null || cobertura === undefined) {
      cobertura = 0; 
    } 
    return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
  }
  
export { crearMetrica };