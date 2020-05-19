import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import './styles.css'

const Pokemon = ({ pokemon }) => {
	return (
		<div className='pokemon'>
			{pokemon.map(pokemon => {
				return <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} />
			})}
		</div>
	)
}

export default Pokemon
