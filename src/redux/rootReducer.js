import { combineReducers } from '@reduxjs/toolkit'
import pokeReducer from './slices/pokeSlice'
import searchReducer from './slices/searchSlice'

export default combineReducers({
  pokemon: pokeReducer,
  search: searchReducer
})
