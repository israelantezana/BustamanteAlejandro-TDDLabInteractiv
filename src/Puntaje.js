import puntajePorCobertura from "./puntaje/moduloPuntCobertura";

export default class Puntaje {
    constructor() {
        this.cantidadPruebas = [0];
        this.cantidadLineasCodigo = [0];
        this.cantidadCobertura = [0];
    }

    getPuntajeCobertura(numeroCommit) {
        return this.cantidadCobertura[0];
    }
}