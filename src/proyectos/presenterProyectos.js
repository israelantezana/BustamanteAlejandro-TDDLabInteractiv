import datosFormulariosSonValidos from "./moduloProyectos";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const proyectosForm = document.querySelector("#proyectos-form");
const botonRegresar = document.querySelector("#boton-regresar");
const botonBuscar = document.querySelector("#boton-buscar");
const div=document.querySelector("#resultado-div")
const div2=document.querySelector("#resultado-div2")


proyectosForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const contenidoTitulo = titulo.value;
  const contenidoDescripcion = descripcion.value;
  if(datosFormulariosSonValidos(contenidoTitulo, contenidoDescripcion)==true)
  {
    
    const url = `index.html?Titulo=${encodeURIComponent(contenidoTitulo)}&Descripcion=${encodeURIComponent(contenidoDescripcion)}`;

            
  window.location.href = url;
      
  }
  else{
    div.innerHTML = "<p>" + "Llene todos los campos" + "</p>";
  }
  
});

if(datosBuscarSonValidos(contenidoTitulo)==true)
{
  
  const url = `index.html?Titulo=${encodeURIComponent(contenidoTitulo)}}`;

          
window.location.href = url;
    
}
else{
  div2.innerHTML = "<p>" + "Proyecto no existe" + "</p>";
}

botonRegresar.addEventListener("click", function() {
  window.location.href = "index.html";
});
botonBuscar.addEventListener("click", function() {
  window.location.href = "buscar.html";
});
