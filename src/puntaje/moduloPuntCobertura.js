import { crearMetrica } from "../MetricaIndex/moduloMetrica";


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

export default puntajePorCobertura;