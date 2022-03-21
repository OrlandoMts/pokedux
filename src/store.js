import { createStore, compose, applyMiddleware } from "redux";
import { pokemonReducer } from "./redux/pokemonReducer";
import { logActions, reportError } from "./middlewares";
import thunk from "redux-thunk";

// const composeAlternativo = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const composedEnhancers = composeAlternativo(applyMiddleware(thunk, logActions, reportError))


// const composedEnhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
//     applyMiddleware(logActions))


export const store = createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());