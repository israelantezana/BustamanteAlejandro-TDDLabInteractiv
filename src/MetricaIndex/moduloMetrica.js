import Metrica from "../Metrica.js";

function crearMetrica(pruebasAñadidas, lineasDeCodigo, cobertura) {
    const cero = 0;
    if (pruebasAñadidas === null || pruebasAñadidas === undefined || pruebasAñadidas < cero) {
      pruebasAñadidas = cero; 
    }
    if (lineasDeCodigo === null || lineasDeCodigo === undefined || lineasDeCodigo < cero) {
      lineasDeCodigo = cero; 
    }
    if (cobertura === null || cobertura === undefined || cobertura < cero) {
      cobertura = cero; 
    } 
    if (pruebasAñadidas > 100 || lineasDeCodigo > 100 || cobertura > 100) {
        console.log("Ponga un valor real porfavor");
        return null;
      }

    return new Metrica(pruebasAñadidas, lineasDeCodigo, cobertura);
  }
  
export { crearMetrica };