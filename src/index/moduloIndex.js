import Proyecto from "../Proyecto.js";

function crearProyecto(titulo, descripcion) {
  if (titulo == null) {
    return null;
  } else if (descripcion == null) {
    return null;
  }
  else{
    let nuevoProyecto = new Proyecto(titulo, descripcion);
    return nuevoProyecto
}
}

export { crearProyecto };
