import { GET_POKEMONS, GET_POKEMONS_TYPE } from '../types'

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return action.payload

    default: return state
  }
}

export default pokemonReducer
