import Proyecto from "../Proyecto.js";

function crearProyecto(titulo, descripcion) {
  if (titulo == null) {
    return null;
  } else if (descripcion == null) {
    return null;
  } else {
    let nuevoProyecto = new Proyecto(titulo, descripcion);
    return nuevoProyecto;
  }
}

function agregarProyectoAProyectos(proyecto, proyectos) {
  if (proyecto == null) {
    return "No se puede agregar a proyectos algo no existente";
  }
  else {
    proyectos.push(proyecto)
    return proyectos[proyectos.length - 1];
}

}

export { crearProyecto, agregarProyectoAProyectos };
