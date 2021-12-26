import { GET_POKEMONS, GET_POKEMONS_TYPE } from '../types'

const initialState = {
  pokemons: [{}],
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false

      }
    case GET_POKEMONS_TYPE:
      return {
        ...state,
        pokemons: action.payload,
        loading: false

      }
    default: return state
  }
}
