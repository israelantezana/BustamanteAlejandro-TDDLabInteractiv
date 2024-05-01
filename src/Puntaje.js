import puntajePorCobertura from "./puntaje/moduloPuntCobertura";

export default class Puntaje {
    constructor() {
        this.puntajePruebas = [0];
        this.puntajeLineasCodigo = [0];
        this.puntajeCobertura = [0];
    }

    getPuntajeCobertura(numeroCommit) {
        return this.puntajeCobertura[0];
    }
}