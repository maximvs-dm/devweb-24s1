function handleClick(evento, id) {
  console.log(evento);
  console.log(id);
  fetchPokemon("pikachu");
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

  const envelope = document.getElementById("pokemon");
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
      handleClick(e, "1 - eventlistener")
    );
    btnBuscar.onclick = (e) => handleClick(e, "2 - atributo onclick");
  }
}

main();
