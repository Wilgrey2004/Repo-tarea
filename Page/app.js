const formulario = document.getElementById("formulario");

const texto = document.getElementById("SaludoM");

const CambiarTextoEnSaludar = (input) => {
  texto.innerText = input;
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("Palabra").value;
  if (input) {
    console.log(texto);
    CambiarTextoEnSaludar(input);
  }
});
