export const getPokemon = async () => {
  try {
    const res = await fetch('https://pokeapi.com/api/v2/pokemon/?limit=150')
    const data = await res.json()
    return Promise.all(
      data.map(async pokemon => {
        const result = await fetchPokemon(pokemon)
        return result
      })
    )
  } catch (err) {
    return console.log('error fetching pokemon: ', err)
  }
  // .then(allPokemon =>
  //   allPokemon.results.forEach(pokemon => fetchPokemonData(pokemon))
  // )
  // .catch(error => error)
}

async function fetchPokemon(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    )
    return await response.json()
  } catch (e) {
    throw new Error(`fetching ${pokemon.name}'s details went wrong`)
  }
}

// async function fetchPokemonData(pokemon) {
//   let url = pokemon.url
//   return await fetch(url)
//     .then(res => res.json())
//     .catch(error => error)
// }
