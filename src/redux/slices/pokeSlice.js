import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon } from '../../api/pokeApi'

export const sendPokemon = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon()
    console.log(response)
    return response
  }
)

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
    [sendPokemon.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.pokemon = payload
    },
    [sendPokemon.rejected]: (state, { payload }) => {
      console.log(payload)
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendPokemon.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    }
  }
})

const { actions, reducer } = pokeSlice
export const { setPokemon } = actions
export default reducer
