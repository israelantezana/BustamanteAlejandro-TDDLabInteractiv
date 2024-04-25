import datosFormulariosSonValidos from "./moduloProyectos";

describe("formularioProyectos", () => {
  it("Deberia retornar false si no se lleno ningun campo", () => {
    expect(datosFormulariosSonValidos("","")).toEqual(false);
  });
  it("Deberia retornar false si no se lleno el campo de titulo", () => {
    expect(datosFormulariosSonValidos("","descripcion1")).toEqual(false);
  });
  it("Deberia retornar false si no se lleno el campo de descripcion", () => {
    expect(datosFormulariosSonValidos("titulo1","")).toEqual(false);
  });
});
