import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon1 } from '../api/pokeApi1'
import { getPokemon2 } from '../api/pokeApi2'
import { getPokemon3 } from '../api/pokeApi3'
import { getPokemon4 } from '../api/pokeApi4'
import { getPokemon5 } from '../api/pokeApi5'
import { getPokemon6 } from '../api/pokeApi6'

export const sendPokemon1 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon1()
    return response
  }
)

export const sendPokemon2 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon2()
    return response
  }
)

export const sendPokemon3 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon3()
    return response
  }
)

export const sendPokemon4 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon4()
    return response
  }
)

export const sendPokemon5 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon5()
    return response
  }
)

export const sendPokemon6 = createAsyncThunk(
  'pokemon/sendPokemon',
  async thunkAPI => {
    const response = await getPokemon6()
    return response
  }
)
