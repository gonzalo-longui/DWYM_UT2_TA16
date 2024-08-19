const parrafo = document.getElementById("parrafoMostrarOcultar");
const boton = document.getElementById("botonMostrarOcultar");

boton.addEventListener("click", () => {
  if (parrafo.style.display === "none") {
    parrafo.style.display = "inline-block";
    boton.innerHTML = "Ocultar";
  } else {
    parrafo.style.display = "none";
    boton.innerHTML = "Mostrar";
  }
})