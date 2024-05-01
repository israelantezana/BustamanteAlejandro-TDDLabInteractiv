import Puntaje from "../Puntaje";

function puntajePorCobertura(porcetajeCubierto) {
    let puntaje = new Puntaje();
    return puntaje.getPuntajeCobertura(1);
}

export default puntajePorCobertura;