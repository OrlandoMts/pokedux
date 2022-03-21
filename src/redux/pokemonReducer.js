import { SET_POKEMONS } from './type'

const initialState = {
    list: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                list: action.payload, //Este payload corresponde al de la const setPokemons del archivo actions.js
            }
        default:
            return {...state};
    }
}