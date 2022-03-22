import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, SEARCH_POKEMON } from "./type";
import { getPokemons, getPokemonsWithDetails} from "../api/getPokemons";

export const setPokemon = payload => ({
    type: SET_POKEMONS,
    payload,
})

export const setError = payload => ({
    type: SET_ERROR,
    payload
})

export const clearError = payload => ({
    type: CLEAR_ERROR,
    payload,
})

export const searchPokemon = payload => ({
    type: SEARCH_POKEMON,
    payload,
})

export const fetchPokemonsWithDetails = payload => async dispatch => {
    try {
        const res = await getPokemons();
        const data = await res.json();
        const pokemonList = data.results;

        const pokemonDetail = await getPokemonsWithDetails(pokemonList);
        
        dispatch(setPokemon(pokemonDetail));
      } catch (error) {
        console.log("FETCH ERROR: ", error);
      }
}

export const filterPokemon = (payload, input) => dispatch => {
    let sp = payload.filter(pokemon => {
        const pokemonText = pokemon.name.toLowerCase();
        const searchText = input.toLowerCase();

        return pokemonText.includes(searchText)
    })

    dispatch(searchPokemon(sp));
}
