import {
  GET_POKEMONS,
  GET_POKEMON_PHOTO,
  GET_POKEMON_TYPE,
  GET_POKEMON_NAME,
  GET_POKEMON_EVOLUTIONS,
  GET_POKEMON_ID,
  SEARCH_INCREMENT,
  SEARCH_STATE,
  SEARCH_DECREMENT
} from '../types'

export const pokemonReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        name: action.payload,
        loading: false
      }
    case SEARCH_INCREMENT:
      return {
        name: action.payload,
        loading: false
      }
    case SEARCH_DECREMENT:
      return {
        name: action.payload,
        loading: false
      }
    default: return state
  }
}
export const searchReducer = (state = { limit: String, offset: String, loading: true }, action) => {
  switch (action.type) {
    case SEARCH_STATE:
      return {
        values: action.payload,
        loading: false
      }
    default: return state
  }
}
export const typeReducer = (state = { name: [], loading: true }, action) => {
  switch (action.type) {
    case GET_POKEMON_TYPE:
      return {
        name: action.payload,
        loading: false
      }
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
      break
    default: return ''
  }
}
