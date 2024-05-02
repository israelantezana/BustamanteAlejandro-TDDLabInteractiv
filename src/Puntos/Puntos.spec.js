import { CalcularPuntosPorPruebas} from "./Puntos.js";


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
});