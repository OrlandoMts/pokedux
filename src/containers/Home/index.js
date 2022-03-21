import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import getPokemons from '../../api/getPokemons';
import { setPokemon } from '../../redux/actions';
import './styles.css';

function Home() {

  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const listPokemons = async () => {
    try {
      const res = await getPokemons();
      const data = await res.json();

      dispatch(setPokemon(data.results));
    } catch (error) {
      console.log('FETH ERROR: ', error)
    }
  }

  useEffect(()=>{
    listPokemons()
  },[])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  );
}

export default Home;
