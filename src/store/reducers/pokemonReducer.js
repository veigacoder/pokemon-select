import { GET_POKEMONS, GET_POKEMONS_TYPE } from '../types'

export const pokemonReducer = (state = [{ content: 'empty' }], action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload
    default: return state
  }
}

export const typeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POKEMONS_TYPE:
      return action.payload
    default: return state
  }
}
