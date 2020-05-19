import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendPokemon } from '../redux/slices/pokeSlice'
import Layout from '../layout/Layout'
import SearchBox from '../components/SearchBox/SearchBox'
import Pokemon from '../components/Pokemon/Pokemon'
import './pageStyles.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.pokemon.hasError)
  const pending = useSelector(state => !state.pokemon.isLoaded)
  const search = useSelector(state => state.search.search)
  const pokemon = useSelector(state => state.pokemon.pokemon)
  const filteredPokemon = pokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })
  useEffect(() => {
    dispatch(sendPokemon())
  }, [dispatch])
  return (
    <Layout>
      <SearchBox />
      {pending ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Uh oh! Something went wrong.</h1>
      ) : (
        <Pokemon pokemon={filteredPokemon} />
      )}
    </Layout>
  )
}

export default HomePage
