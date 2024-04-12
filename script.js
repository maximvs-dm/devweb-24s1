function handleBuscar(evento, id) {
  console.log(evento);
  console.log(id);
  fetchPokemon("pikachu");
}

function handleLimpar(evento, id) {
  console.log(id);
  container = document.getElementById("pokemon-container");

  for (let elemento of container.children) {
    console.log('limpando')
    elemento.remove();
  }
}

function fetchPokemon(nome) {
  url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

  fetch(url)
    .then((r) => r.json())
    .then(handleResponse);
}

function handleResponse(dados) {
  objeto = {
    nome: dados.name,
    altura: dados.height,
    peso: dados.weight,
    imagem: dados.sprites.front_default,
  };

  const card = createHtmlForPokemon(objeto);

  const envelope = document.getElementById("pokemon-container");
  envelope.appendChild(card);
}

function createHtmlForPokemon(objeto) {
  myDiv = document.createElement("div");

  myImg = document.createElement("img");
  myImg.alt = "Foto do Pokémon";
  myImg.src = objeto.imagem;

  myH1 = document.createElement("h1");
  myH1.innerText = objeto.nome.toUpperCase();

  myP1 = document.createElement("p");
  myP1.innerText = `Altura: ${objeto.altura}`;

  myP2 = document.createElement("p");
  myP2.innerText = `Peso: ${objeto.peso}`;

  myDiv.appendChild(myH1);
  myDiv.appendChild(myImg);
  myDiv.appendChild(myP1);
  myDiv.appendChild(myP2);

  return myDiv;
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
