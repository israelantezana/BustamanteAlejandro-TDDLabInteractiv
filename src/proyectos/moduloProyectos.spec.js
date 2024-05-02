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
  it("Deberia retornar true si se llenaron todos los campos", () => {
    expect(datosFormulariosSonValidos("titulo","descripcion")).toEqual(true);
  });
  it("Deberia retornar true si encuentra el nombre", () => {
    expect(datosFormulariosSonValidos("titulo")).toEqual(true);
  });
});
