import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './styles.css'

const Pokemon = ({ pokemon }) => {
  return (
    <div className='pokemon'>
      {pokemon.map(robot => {
        return (
          <PokeCard
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        )
      })}
    </div>
  )
}

export default Pokemon
