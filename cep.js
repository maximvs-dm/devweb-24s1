const cepInput = document.getElementById("cep");
if (cepInput !== null) cepInput.addEventListener("keyup", handleCepChange);

async function getCepData(cep) {
  try {
    response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    console.log("resposta do fetch", response);
    data = await response.json();
    console.log("dados da resposta", data);
    return data;
  } catch (erro) {
    console.log("trantando o erro", erro);
    return null;
  }
}

function fillInAddress(data) {
  console.log("preenchendo o endereço", data);
}

async function handleCepChange(event) {
  const target = event.target;
  value = target.value;
  console.log(value);

  if (value.length !== 8) return;

  const cepData = await getCepData(value);

  if (cepData === null) {
    alert("Digite um valor válido de CEP!");
    return;
  }

  if ("erro" in cepData) {
    alert("CEP não encontrado, digite o endereço manualmente.");
    return;
  }

  fillInAddress(cepData);
}
