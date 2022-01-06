import { GET_POKEMONS, GET_POKEMONS_TYPE, POKEMONS_ERROR } from '../types'
import axios from 'axios'

export const getPokemons = (limit = 21, offset = 0) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results

    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: [{}]
    })
  }
}

export const getPokemonType = (name) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    dispatch({
      type: GET_POKEMONS_TYPE,
      payload: res.data.types

    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: [{}]
    })
  }
}
