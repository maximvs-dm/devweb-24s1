const cepInput = document.getElementById("cep");
if (cepInput !== null) cepInput.addEventListener("keyup", handleCepChange);

function handleCepChange(event) {
  const target = event.target;
  valor = target.value;
  console.log(valor);
  if (valor.length === 8) {
    console.log("terminou de digitar o cep");
    target.readOnly = true;
  }
}
