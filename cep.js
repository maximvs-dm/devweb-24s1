const cepInput = document.getElementById("cep");
if (cepInput !== null) {
  cepInput.addEventListener("keyup", handleCepChange);
  cepInput.addEventListener("keydown", handleCepDelete);
}

const fieldIds = {
  rua: "rua",
  bairro: "bairro",
  cidade: "cidade",
  estado: "estado",
};

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

function fillInAddressField(id, value, readonly = true) {
  element = document.getElementById(id);
  element.value = value;
  element.readOnly = readonly;
}

function fillInAddress(data) {
  fillInAddressField(fieldIds.rua, data.logradouro);
  fillInAddressField(fieldIds.bairro, data.bairro);
  fillInAddressField(fieldIds.cidade, data.localidade);
  fillInAddressField(fieldIds.estado, data.uf);
}

async function handleCepChange(event) {
  const keyCode = event.keyCode;
  if (keyCode < 96 || keyCode > 105) return;

  const target = event.target;
  value = target.value;

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
function clearAddressFields() {
  fillInAddressField(fieldIds.rua, "", false);
  fillInAddressField(fieldIds.bairro, "", false);
  fillInAddressField(fieldIds.cidade, "", false);
  fillInAddressField(fieldIds.estado, "", false);
}

function handleCepDelete(event) {
  console.log({ code: event.keyCode, key: event.key });
  if ([8, 46].includes(event.keyCode)) {
    clearAddressFields();
  }
}
