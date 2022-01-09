import { combineReducers } from 'redux'
import {
  photoReducer,
  pokemonReducer,
  typeReducer,
  nameReducer,
  idReducer,
  evolutionReducer,
  searchReducer
} from './pokemonReducer'

const reducers = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer,
  name: nameReducer,
  photo: photoReducer,
  id: idReducer,
  evolution: evolutionReducer,
  search: searchReducer
})

export default reducers
