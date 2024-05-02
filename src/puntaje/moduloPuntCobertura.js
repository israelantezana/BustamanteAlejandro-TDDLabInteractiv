import Puntaje from "../Puntaje";


function puntajeLogaritmico(puntaje) {
    const MULTIPLIER = 100;
    const LOG_REDUCTION = 1;
    return (Math.log10(puntaje) - LOG_REDUCTION) * MULTIPLIER;
}
function puntajePorCobertura(porcetajeCubierto) {
    let puntaje = new Puntaje(0, 0, porcetajeCubierto);
    
    if (puntaje.getPuntajeCobertura() === 0) {
        return 0;
    }
    return Math.trunc(puntajeLogaritmico(puntaje.getPuntajeCobertura()));
}

export default puntajePorCobertura;