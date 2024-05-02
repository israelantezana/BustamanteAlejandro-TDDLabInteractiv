import { CalcularPuntosPorPruebas ,CalcularPuntosPorLineas} from "./Puntos.js";


describe("Calcular Puntos", () => {
  it("Debería obtener 2 puntos si las pruebas son 1", () => {
    expect(CalcularPuntosPorPruebas(1)).toBe(2);
  });
  it("Debería obtener 1 puntos si las pruebas son entre 2 y 3", () => {
    expect(CalcularPuntosPorPruebas(3)).toBe(1);
  });
  it("Debería obtener 0 puntos si las pruebas son mas de 3 o 0", () => {
    expect(CalcularPuntosPorPruebas(0)).toBe(0);
  });
  it("Debería obtener 3 puntos si las lineas de codigo son entre 5 y 10", () => {
    expect(CalcularPuntosPorLineas(6)).toBe(3);
  });
  it("Debería obtener 1 puntos si las lineas de codigo son entre 1 y 4 tambien entre 11 y 20", () => {
    expect(CalcularPuntosPorLineas(15)).toBe(1);
    expect(CalcularPuntosPorLineas(1)).toBe(1);
  });
});


