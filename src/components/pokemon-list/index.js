import 'nes.css/css/nes.min.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DisplayButton, Table } from '../../elements/pokedex-blocks'
import { actionCreators } from '../../store'

export const Pokemons = () => {
  const pokemon = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()
  const { getPokemons } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getPokemons()
  }, [])
  return (

    <Table>
      {pokemon.map(p => <DisplayButton>{p.name}</DisplayButton>)}
    </Table>

  )
}

export default Pokemons
