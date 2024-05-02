import { CalcularPuntosPorPruebas ,CalcularPuntosPorLineas, puntajePorCobertura} from "./moduloPuntaje.js";

describe("Calcular Puntos", () => {
  it("Debería obtener 50 puntos si las pruebas son 1", () => {
    expect(CalcularPuntosPorPruebas(1)).toBe(50);
  });
  it("Debería obtener 25 puntos si las pruebas son entre 2 y 3", () => {
    expect(CalcularPuntosPorPruebas(3)).toBe(25);
  });
  it("Debería obtener 0 puntos si las pruebas son mas de 3 o 0", () => {
    expect(CalcularPuntosPorPruebas(0)).toBe(0);
  });
  it("Debería obtener 3 puntos si las lineas de codigo son entre 5 y 10", () => {
    expect(CalcularPuntosPorLineas(6)).toBe(75);
  });
  it("Debería obtener 1 puntos si las lineas de codigo son entre 1 y 4 tambien entre 11 y 20", () => {
    expect(CalcularPuntosPorLineas(15)).toBe(25);
    expect(CalcularPuntosPorLineas(1)).toBe(25);
  });
  it("Debería obtener 0 puntos si las lineas de codigo son mayores a 20", () => {
    expect(CalcularPuntosPorLineas(21)).toBe(0);
  });
});


describe("calcularPuntajePorCobertura", () => {
  it("Debería otorgar un puntaje de 0 cuando la cobertura de codigo fue del 0%", () => {
    expect(puntajePorCobertura(0)).toEqual(0);
  });
  it("Debería otorgar un puntaje de 100 cuando la cobertura de codigo fue del 100%", () => {
    expect(puntajePorCobertura(100)).toEqual(100);
  });
  it("Debería otorgar un puntaje proporcional al logaritmo en base 10. Caso cobertura al 40%", () => {
    expect(puntajePorCobertura(40)).toEqual(60);
  });
  it("Debería otorgar un puntaje proporcional al logaritmo en base 10. Caso cobertura al 75%", () => {
    expect(puntajePorCobertura(75)).toEqual(87);
  });
});