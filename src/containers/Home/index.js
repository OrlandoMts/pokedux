import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import { getPokemonsWithDetails } from "../../redux/actions";
import "./styles.css";

function Home() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  // const listPokemons = async () => {
  //   try {
  //     const res = await getPokemons();
  //     const data = await res.json();
  //     const pokemonList = data.results;

  //     let pokemonResponse = await Promise.all(
  //       pokemonList.map(async pokemon => {
  //         let pokemonRespons = await fetch(pokemon.url)
  //         return pokemonRespons.json()
  //       })
  //     );
  //     dispatch(setPokemon(pokemonResponse));
  //   } catch (error) {
  //     console.log("FETH ERROR: ", error);
  //   }
  // };

  useEffect(() => {
    // listPokemons();
    dispatch(getPokemonsWithDetails())
  },[]);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
