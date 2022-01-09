import {
  GET_POKEMONS,
  GET_POKEMON_EVOLUTIONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_POKEMON_PHOTO,
  GET_POKEMON_TYPE,
  POKEMONS_ERROR,
  SEARCH_DECREMENT,
  SEARCH_INCREMENT,
  SEARCH_STATE
} from '../types'
import axios from 'axios'

export const getPokemons = (limit = 32, offset = 0) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results
    })
    dispatch({
      type: SEARCH_STATE,
      payload: {
        limit: limit,
        offset: offset
      }
    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: []
    })
  }
}

export const getPokemonsIncrement = (limit, offset) => async dispatch => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset + limit}`)
  if (offset + limit < res.data.count && offset !== null && offset !== undefined) {
    try {
      dispatch({
        type: SEARCH_INCREMENT,
        payload: res.data.results
      })
      dispatch({
        type: SEARCH_STATE,
        payload: {
          limit: limit,
          offset: offset + limit
        }
      })
    } catch (e) {
      dispatch({
        type: POKEMONS_ERROR,
        payload: []
      })
    }
  }
}

export const getPokemonsDecrement = (limit, offset) => async dispatch => {
  if (offset !== null && offset !== 0) {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset - limit}`)
      dispatch({
        type: SEARCH_DECREMENT,
        payload: res.data.results
      })
      dispatch({
        type: SEARCH_STATE,
        payload: {
          limit: limit,
          offset: offset - limit
        }
      })
    } catch (e) {
      dispatch({
        type: POKEMONS_ERROR,
        payload: []
      })
    }
  }
}
export const getPokemon = (name) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    dispatch({
      type: GET_POKEMON_TYPE,
      payload: res.data.types
    })
    dispatch({
      type: GET_POKEMON_PHOTO,
      payload: res.data.sprites
    })
    dispatch({
      type: GET_POKEMON_NAME,
      payload: res.data.name
    })
    dispatch({
      type: GET_POKEMON_ID,
      payload: res.data.id
    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: []
    })
  }
}
