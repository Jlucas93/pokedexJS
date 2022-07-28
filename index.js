(function () {
  loadAndRenderPokemon();
})();

async function loadAndRenderPokemon() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const pokemonList = await axios.get(baseUrl)
    .then(({ data }) => data.results);

  renderPokemonList(pokemonList);
}

async function renderPokemonList(pokemonList) {
  const list = document.querySelector("ul");

  console.log(pokemonList);

  for (let pokemon of pokemonList) {
    const response = await axios.get(pokemon.url)
    renderPokemon(list, response.data)
  }
  /* 
    pokemonList.forEach(async (pokemon) => {
      const response = await axios.get(pokemon.url)
      renderPokemon(list, response.data)
    })
  } */
}

function renderPokemon(list, pokemon) {
  const card = document.createElement("li");
  console.log(pokemon)
  card.innerHTML = `
  <a href="https://pokeapi.co/api/v2/pokemon/${pokemon.id}">
    <img src="${pokemon.sprites.other['official-artwork'].front_default}">
    <p>${pokemon.name}</p>
    </a>
  `;

  list.appendChild(card);
}
