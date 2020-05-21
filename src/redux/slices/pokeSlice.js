import { createSlice } from '@reduxjs/toolkit'
import {
  sendPokemon1,
  sendPokemon2,
  sendPokemon3,
  sendPokemon4,
  sendPokemon5,
  sendPokemon6
} from '../asyncThunks'

const pokeSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: [],
    hasError: false,
    errorMessage: null,
    isLoaded: false
  },
  reducers: {
    setPokemon: (state, { payload }) => {
      state.pokemon = payload
    }
  },
  extraReducers: {
    [sendPokemon1.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon1.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon1.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    },
    [sendPokemon2.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon2.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon2.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    },
    [sendPokemon3.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon3.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon3.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    },
    [sendPokemon4.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon4.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon4.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    },
    [sendPokemon5.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon5.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon5.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    },
    [sendPokemon6.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon6.rejected]: (state, { payload }) => {
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon6.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    }
  }
})

const { actions, reducer } = pokeSlice
export const { setPokemon } = actions
export default reducer
