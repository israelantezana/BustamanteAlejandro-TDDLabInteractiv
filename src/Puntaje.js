import puntajePorCobertura from "./puntaje/moduloPuntCobertura";

export default class Puntaje {
    constructor(pruebas, lineasCodigo, cobertura) {
        this.cantidadPruebas = pruebas;
        this.cantidadLineasCodigo = lineasCodigo;
        this.cantidadCobertura = cobertura;
    }

    getPuntajeCobertura() {
        return this.cantidadCobertura;
    }
}