import {
  GET_POKEMONS,
  GET_POKEMON_PHOTO,
  GET_POKEMON_TYPE,
  GET_POKEMON_NAME,
  GET_POKEMON_EVOLUTIONS,
  GET_POKEMON_ID
} from '../types'

export const pokemonReducer = (state = [{ content: 'empty' }], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload
    default: return state
  }
}

export const typeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMON_TYPE:
      return action.payload
    default: return state
  }
}

export const photoReducer = (state = '', action) => {
  switch (action.type) {
    case GET_POKEMON_PHOTO:
      return action.payload
    default: return state
  }
}

export const nameReducer = (state = '', action) => {
  switch (action.type) {
    case GET_POKEMON_NAME:
      return action.payload
    default: return state
  }
}
export const idReducer = (state = '', action) => {
  switch (action.type) {
    case GET_POKEMON_ID:
      return action.payload
    default: return state
  }
}

export const evolutionReducer = (state = '', action) => {
  switch (action.type) {
    case GET_POKEMON_EVOLUTIONS:
      if (action.payload !== null) { return action.payload }
    default: return ''
  }
}
