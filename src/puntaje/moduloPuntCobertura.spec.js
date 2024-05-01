import puntajePorCobertura from "./moduloPuntCobertura";

describe("calcularPuntajePorCobertura", () => {
  it("Cuando se instancia un objeto Puntaje, todos los puntajes deberían estar en 0", () => {
    expect(puntajePorCobertura(0)).toEqual(0);
  });
});