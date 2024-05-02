import Metrica from "../Metrica.js";

function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
    const cero = 0;
    if (pruebasAñadidas === null || pruebasAñadidas === undefined || pruebasAñadidas < cero) {
      pruebasAñadidas = cero; 
    }
    if (lineasDeCodigo === null || lineasDeCodigo === undefined || lineasDeCodigo < cero) {
      lineasDeCodigo = cero; 
    }
   

    return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
  }
  
export { crearMetrica };