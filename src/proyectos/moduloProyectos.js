function datosFormulariosSonValidos(titulo, descripcion) {
  const STRINGVACIO = "";
  if (titulo == STRINGVACIO && descripcion == STRINGVACIO) {
    return false;
  } else if (titulo == STRINGVACIO) {
    return false;
  } else if (descripcion == STRINGVACIO) {
    return false;
  }
}
export default datosFormulariosSonValidos;
