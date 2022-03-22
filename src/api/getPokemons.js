const API = process.env.POKE_API || 'https://pokeapi.co/api/v2/'
//eran 151
export const getPokemons = (limit = 130) => {
    const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)

    return getPokeApi
}
export const getPokemonsWithDetails = async pokemons => {
    const pokemonResponse = await Promise.all(
        pokemons.map(async pokemon => {
            let pokemonRes = await fetch(pokemon.url)
            return pokemonRes.json()
    }))

    return pokemonResponse;
}
