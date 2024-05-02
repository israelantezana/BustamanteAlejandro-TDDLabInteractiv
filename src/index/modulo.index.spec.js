import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos,eliminarProyecto, buscarProyecto} from "./moduloIndex.js"
import Proyecto from "../Proyecto.js";

describe("crearProyecto", () => {
  it("Si se quiere crear un proyecto sin titulo deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto(null,"descrip")).toEqual(null)
  });
  it("Si se quiere crear un proyecto sin descripcion deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto("titulo",null)).toEqual(null)
  });
  it("Si se capturaron bien todos los datos para crear el proyecto, debería crear un nuevo objeto Proyecto", () => {
    const titulo = "Título del proyecto";
    const descripcion = "Descripción del proyecto";
    const proyecto = crearProyecto(titulo, descripcion);
    expect(proyecto).toBeInstanceOf(Proyecto);
    expect(proyecto.titulo).toBe(titulo);
    expect(proyecto.descripcion).toBe(descripcion);
  });
  it("Si el proyecto que se trata de agregar a los proyectos es null deberia ver el mensaje: No se puede agregar a proyectos algo no existente", () => {
    expect(agregarProyectoAProyectos(null)).toEqual("No se puede agregar a proyectos algo no existente")
  });
  it("Si el proyecto que se trata de agregar a los proyectos no es null deberia obtener la instancia a ese mismo Proyecto", () => {
    let proyectos=[]
    const titulo = "Título del proyecto";
    const descripcion = "Descripción del proyecto";
    const proyectoNuevo=agregarProyectoAProyectos(new Proyecto(titulo,descripcion),proyectos)
    expect(proyectoNuevo).toBeInstanceOf(Proyecto);
    expect(proyectoNuevo.titulo).toBe(titulo);
    expect(proyectoNuevo.descripcion).toBe(descripcion);
    
  });
  it("Se deberia mostrar el mensaje No tiene ningún proyecto creado si efectivamente no se tiene ninguno", () => {
    expect(mostrarProyectos([])).toEqual("No tiene ningun proyecto creado")
  });
  it("Deberiamos ver los nombres y descripciones de todos nuestros proyectos si efectivamente se tienen proyectos", () => {
    let nuevoProyecto1 = new Proyecto("t1", "d2");
    let nuevoProyecto2 = new Proyecto("t2", "d2");
    let nuevoProyecto3 = new Proyecto("t3", "d3");
    let proyectos=[]
    proyectos.push(nuevoProyecto1)
    proyectos.push(nuevoProyecto2)
    proyectos.push(nuevoProyecto3)
    expect(mostrarProyectos(proyectos)).toEqual("Titulo:t1Descripcion:d2,Titulo:t2Descripcion:d2,Titulo:t3Descripcion:d3")
  });
  it("Deberiamos ver el mensaje No se puede eliminar un proyecto que no existe en proyectos, si efectivamente el proyecto no esta en proyectos", () => {
    let nuevoProyecto1 = new Proyecto("t1", "d2");
    let nuevoProyecto2 = new Proyecto("t2", "d2");
    let nuevoProyecto3 = new Proyecto("t3", "d3");
    let nuevoProyecto4 = new Proyecto("t4", "d4");
    let proyectos=[]
    proyectos.push(nuevoProyecto1)
    proyectos.push(nuevoProyecto2)
    proyectos.push(nuevoProyecto3)
    expect(eliminarProyecto(nuevoProyecto4,proyectos)).toEqual("No se puede eliminar un proyecto que no existe en proyectos")
  });
  it("Deberiamos ver el mensaje Se elimino su proyecto con exito cuando el proyecto existia en proyectos", () => {
    let nuevoProyecto1 = new Proyecto("t1", "d2");
    let nuevoProyecto2 = new Proyecto("t2", "d2");
    let nuevoProyecto3 = new Proyecto("t3", "d3");
    let proyectos=[]
    proyectos.push(nuevoProyecto1)
    proyectos.push(nuevoProyecto2)
    proyectos.push(nuevoProyecto3)
    expect(eliminarProyecto(nuevoProyecto1,proyectos)).toEqual("Se elimino su proyecto con exito")
  });
  //Examen Ledezma
  
    it("Debería devolver el proyecto si se encuentra en la lista de proyectos", () => {
      const proyectos = [
        { titulo: "Proyecto 1", descripcion: "Descripción del Proyecto 1" },
        { titulo: "Proyecto 2", descripcion: "Descripción del Proyecto 2" },
        { titulo: "Proyecto 3", descripcion: "Descripción del Proyecto 3" }
      ];
      const tituloBuscado = "Proyecto 2";
      expect(buscarProyecto(tituloBuscado, proyectos)).toEqual({ titulo: "Proyecto 2", descripcion: "Descripción del Proyecto 2" });
    });
  
    it("Debería devolver null si el proyecto no se encuentra en la lista de proyectos", () => {
      const proyectos = [
        { titulo: "Proyecto 1", descripcion: "Descripción del Proyecto 1" },
        { titulo: "Proyecto 2", descripcion: "Descripción del Proyecto 2" },
        { titulo: "Proyecto 3", descripcion: "Descripción del Proyecto 3" }
      ];
      const tituloBuscado = "Proyecto 4";
      const proyectoEncontrado = buscarProyecto(tituloBuscado, proyectos);
      expect(proyectoEncontrado).toBeNull();
    });
  
    it("Debería devolver null si la lista de proyectos está vacía", () => {
      const proyectos = [];
      const tituloBuscado = "Proyecto 1";
      const proyectoEncontrado = buscarProyecto(tituloBuscado, proyectos);
      expect(proyectoEncontrado).toBeNull();
    });
});

