const API = process.env.POKE_API || 'https://pokeapi.co/api/v2/'

const getPokemons = (limit = 151) => {
    const getPokeApi = fetch(`${API}pokemon?limit=${limit}`)

    return getPokeApi
}

export default getPokemons;