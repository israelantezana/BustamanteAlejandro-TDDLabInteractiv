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
  } else {
    proyectos.push(proyecto);
    return proyectos[proyectos.length - 1];
  }
}

function mostrarProyectos(proyectos) {
  if (proyectos.length === 0) {
    return "No tiene ningun proyecto creado";
  } else {
    let proyectosString = "";
    for (let i = 0; i < proyectos.length; i++) {
      proyectosString =
        proyectosString +
        "Titulo:" +
        proyectos[i].titulo +
        "Descripcion:" +
        proyectos[i].descripcion;
      if (i < proyectos.length - 1) {
        proyectosString = proyectosString + ",";
      }
    }
    return proyectosString;
  }
}

function eliminarProyecto(proyecto, proyectos) {
  const indiceProyectoAEliminar = proyectos.indexOf(proyecto);
  const NOEXISTE = -1;
  if (indiceProyectoAEliminar == NOEXISTE) {
    return "No se puede eliminar un proyecto que no existe en proyectos";
  } else {
    proyectos.splice(indiceProyectoAEliminar, 1);
    return "Se elimino su proyecto con exito";
  }
}

function buscarPorNombre(nombre, proyectos){
    const STRINGVACIO=""
    let iteradorDeProyectos;
    if (nombre==STRINGVACIO)
    {
      return "Porfavor ingrese un nombre para la busqueda"
    }
    for (iteradorDeProyectos=0; iteradorDeProyectos<proyectos.length;iteradorDeProyectos++)
    {
      if (proyectos[iteradorDeProyectos].titulo==nombre)
      {
        return proyectos[iteradorDeProyectos]
      }
    }
}

export { crearProyecto, agregarProyectoAProyectos, mostrarProyectos, eliminarProyecto ,buscarPorNombre};
