import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import { createColorName } from '../../utils/utils'
const PokeCard = React.memo(props => {
  const pokemon = useSelector(state => state.pokemon.pokemon[props.name])
  return (
    <div className='card'>
      <h6 className='number'>{pokemon.id}</h6>
      <img
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        id={pokemon.id}
      />
      <div className='types'>
        {pokemon.types.map(type => (
          <div
            key={type.type.name}
            className='type'
            style={{
              background: `${createColorName(type.type.name)}`
            }}>
            {type.type.name}
          </div>
        ))}
      </div>
      <h2>{pokemon.name}</h2>
    </div>
  )
})

export default PokeCard
