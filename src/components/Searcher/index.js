import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Search } from 'semantic-ui-react';
import { filterPokemon } from '../../redux/actions';
import './styles.css';

export default function SearchBar() {

  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(filterPokemon(list, event.target.value));
  }

  return (
    <div className='Searcher wrapper'>
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <Search
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            placeholder='Encuentra a tu Pokemón favorito'
            onSearchChange={handleSearch}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
