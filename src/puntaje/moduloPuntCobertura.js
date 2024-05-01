import Puntaje from "../Puntaje";
import { crearMetrica } from "../MetricaIndex/moduloMetrica";

function puntajePorCobertura(porcetajeCubierto) {
    let puntaje= new Puntaje(0, 0, porcetajeCubierto);
    return puntaje.getPuntajeCobertura();
}

export default puntajePorCobertura;