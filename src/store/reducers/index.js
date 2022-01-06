import { combineReducers } from 'redux'
import { pokemonReducer, typeReducer } from './pokemonReducer'

const reducers = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer
})

export default reducers
