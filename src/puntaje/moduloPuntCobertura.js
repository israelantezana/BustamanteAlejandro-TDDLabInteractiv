import Puntaje from "../Puntaje";

function puntajePorCobertura(porcetajeCubierto) {
    let puntaje = new Puntaje();
    if (porcetajeCubierto == 0) {
        return puntaje.getPuntajeCobertura(1);
    }
    else {
        return 100;
    }
}

export default puntajePorCobertura;