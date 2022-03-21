import { SET_POKEMONS } from "./type";

export const setPokemon = payload => ({
    type: SET_POKEMONS,
    payload,
})