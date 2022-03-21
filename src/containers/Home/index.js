import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import getPokemons from '../../api/getPokemons';
import './styles.css';

function Home() {

  const listPokemons = async () => {
    try {
      const res = await getPokemons();
      const data = await res.json();
      console.log(data);
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
      <PokemonList />
    </div>
  );
}

export default Home;
