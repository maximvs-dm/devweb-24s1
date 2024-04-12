function alertError(e) {
  window.alert("Pokémon não encontrado!");
}

function getNameFromInput() {
  const input = document.getElementById("nome");
  const nome = input.value.toLowerCase();
  input.value = "";
  return nome;
}

function createHtmlForPokemon(objeto) {
  const myDiv = document.createElement("div");

  const myImg = document.createElement("img");
  myImg.alt = "Foto do Pokémon";
  myImg.src = objeto.imagem;

  const myH1 = document.createElement("h1");
  myH1.innerText = objeto.nome.toUpperCase();

  const myP1 = document.createElement("p");
  myP1.innerText = `Altura: ${objeto.altura}`;

  const myP2 = document.createElement("p");
  myP2.innerText = `Peso: ${objeto.peso}`;

  myDiv.appendChild(myH1);
  myDiv.appendChild(myImg);
  myDiv.appendChild(myP1);
  myDiv.appendChild(myP2);

  return myDiv;
}

function handleCardCreation(dados) {
  const objeto = {
    nome: dados.name,
    altura: dados.height,
    peso: dados.weight,
    imagem: dados.sprites.front_default,
  };

  const card = createHtmlForPokemon(objeto);

  const envelope = document.getElementById("pokemon-container");
  envelope.appendChild(card);
}

function fetchPokemon(nome, handleResponse, handleError) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

  fetch(url)
    .then((r) => r.json())
    .then(handleResponse)
    .catch(handleError);
}

function handleBuscar(evento, id) {
  evento.preventDefault();
  console.log(id);

  const nome = getNameFromInput();

  fetchPokemon(nome, handleCardCreation, alertError);
}

function handleLimpar(evento, id) {
  console.log(id);
  const container = document.getElementById("pokemon-container");

  console.log(container);
  container.innerHTML = "";
}

function main() {
  const btnBuscar = document.getElementById("btn-buscar");
  if (btnBuscar !== null) {
    btnBuscar.addEventListener("click", (e) =>
      handleBuscar(e, "1 - eventlistener")
    );
  }

  const btnLimpar = document.getElementById("btn-limpar");
  if (btnLimpar !== null) {
    btnLimpar.onclick = (e) => handleLimpar(e, "2 - atributo onclick");
  }
}

main();
