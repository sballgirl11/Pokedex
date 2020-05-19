import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './styles.css'

const Pokemon = ({ pokemon }) => {
  return (
    <div className='pokemon'>
      {pokemon.map((pokemon, i) => {
        return (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
          />
        )
      })}
    </div>
  )
}

export default Pokemon
