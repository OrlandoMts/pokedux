import React, { useEffect } from 'react';
import { connect, Connect } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import getPokemons from '../../api/getPokemons';
import { setPokemon } from '../../redux/actions';
import './styles.css';

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  setPokemon: value => dispatch(setPokemon(value))
})

function Home({list,setPokemon}) {

  const listPokemons = async () => {
    try {
      const res = await getPokemons();
      const data = await res.json();

      setPokemon(data.results);
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);
