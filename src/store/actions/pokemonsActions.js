import { GET_POKEMONS, GET_POKEMONS_TYPE, POKEMONS_ERROR } from '../types'
import axios from 'axios'

export const getPokemons = () => async dispatch => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results

    })
  } catch (e) {
    dispatch({
      type: POKEMONS_ERROR,
      payload: console.log(e)
    })
  }
}
