function datosFormulariosSonValidos(titulo, descripcion) {
  const STRINGVACIO = "";
  if (titulo == STRINGVACIO && descripcion == STRINGVACIO) {
    return false;
  } else if (titulo == "") {
    return false;
  }
}
export default datosFormulariosSonValidos;
