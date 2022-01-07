import {
  GET_POKEMONS,
  GET_POKEMON_EVOLUTIONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_POKEMON_PHOTO,
  GET_POKEMON_TYPE,
  POKEMONS_ERROR
} from '../types'
import axios from 'axios'

export const getPokemons = (limit = 36, offset = 0) => async dispatch => {
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

export const getPokemon = (name) => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${res.data.id}/`)
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
    dispatch({
      type: GET_POKEMON_EVOLUTIONS,
      payload: res2.data.evolves_from_species
    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: [{}]
    })
  }
}
