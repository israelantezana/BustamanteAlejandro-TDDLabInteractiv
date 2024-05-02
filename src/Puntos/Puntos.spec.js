import { CalcularPuntosPorPruebas} from "./Puntos.js";


describe("Calcular Puntos", () => {
  it("Debería obtener 2 puntos si las pruebas son 1", () => {
    expect(CalcularPuntosPorPruebas(1)).toBe(2);
  });
});