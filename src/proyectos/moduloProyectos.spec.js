import datosFormulariosSonValidos from "./moduloProyectos";

describe("formularioProyectos", () => {
  it("Deberia retornar false si no se lleno ningun campo", () => {
    expect(datosFormulariosSonValidos("","")).toEqual(false);
  });
});
