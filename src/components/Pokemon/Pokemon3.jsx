import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokeCard from '../PokeCard/PokeCard'
import { sendPokemon3 } from '../../redux/asyncThunks'
import './styles.css'

const Pokemon = () => {
  const error = useSelector(state => state.pokemon.hasError)
  const pending = useSelector(state => !state.pokemon.isLoaded)
  const search = useSelector(state => state.search.search)
  const pokemon = useSelector(state => state.pokemon.pokemon)
  const filteredPokemon = pokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sendPokemon3())
  }, [dispatch])
  return (
    <div className='pokemon'>
      {pending ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Uh oh! Something went wrong.</h2>
      ) : (
        filteredPokemon.map(pokemon => {
          return (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              number={pokemon.order}
              name={pokemon.name}
              img={pokemon.sprites.front_default}
            />
          )
        })
      )}
    </div>
  )
}

export default Pokemon
