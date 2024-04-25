import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos} from "./moduloIndex.js"

describe("crearProyecto", () => {
  it("Si se quiere crear un proyecto sin titulo deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto(null,"descrip")).toEqual(null)
  });
  it("Si se quiere crear un proyecto sin descripcion deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto("titulo",null)).toEqual(null)
  });
});