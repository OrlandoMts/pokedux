import React from 'react'
import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard'

const PokemonList = () => {
    const pokemons = [1,2,3];

    return (
        <Grid className='PokemonList'>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon} />
            ))}
        </Grid>
    )
}

export default PokemonList