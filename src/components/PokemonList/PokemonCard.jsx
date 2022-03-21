import React from 'react'
import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import "./styles.css"

const PokemonCard = ({ pokemon }) => {

  const { id, name, sprites, types } = pokemon
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Icon name='favorite' color={FAV_COLOR} />
        <Image centered src={sprites.front_default} alt="Pokemon image" />
        <p className='Pokemon-title'>{name}</p>
        {types.map((type, index) => (<Label color={MAIN_COLOR} key={`${id}-${type.type.name}-${index}`}>{type.type.name}</Label>))}
      </div>
    </Grid.Column>
  )
}

export default PokemonCard