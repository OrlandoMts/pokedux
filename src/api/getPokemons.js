const API = process.env.POKE_API || 'https://pokeapi.co/api/v2/'
//eran 151
const getPokemons = (limit = 20) => {
    const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)

    return getPokeApi
}

export default getPokemons;