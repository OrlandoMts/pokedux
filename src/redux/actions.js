import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, FETCH_POKEMON_DETAIL } from "./type";
import getPokemons from "../api/getPokemons";

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

// NO lo uso...
export const fetchPokemonDetails = payload => ({
    type: FETCH_POKEMON_DETAIL,
    payload,
})

export const getPokemonsWithDetails = payload => async dispatch => {
    try {
        const res = await getPokemons();
        const data = await res.json();
        const pokemonList = data.results;
  
        let pokemonResponse = await Promise.all(
          pokemonList.map(async pokemon => {
            let pokemonRespons = await fetch(pokemon.url)
            return pokemonRespons.json()
          })
        );
        dispatch(setPokemon(pokemonResponse));
      } catch (error) {
        console.log("FETCH ERROR: ", error);
      }
};