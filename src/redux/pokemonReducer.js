import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, SEARCH_POKEMON } from "./type";

const initialState = {
  list: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        list: action.payload, //Este payload corresponde al de la const setPokemons del archivo actions.js
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { ...state };
  }
};
