import { crearMetrica } from "./modulometrica.js";
import Metrica from "../Metrica.js"; 

describe("crearMetrica", () => {
  it("Debería crear una nueva instancia de Metrica con los valores dados (no refactor)", () => {
    const metrica = crearMetrica(10, 100, 80);
    expect(metrica).toBeInstanceOf(Metrica);
    expect(metrica.pruebasAñadidas).toBe(10);
    expect(metrica.lineasDeCodigo).toBe(100);
    expect(metrica.cobertura).toBe(80);

  });
});