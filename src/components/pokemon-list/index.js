import 'nes.css/css/nes.min.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { DisplayButton } from '../../elements/pokedex-blocks'
import { actionCreators } from '../../store'

export const Pokemons = () => {
  const pokemon = useSelector((state) => state)
  const dispatch = useDispatch()
  const { getPokemons, getPokemonType } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getPokemons()
  }, [])

  return (

    <>
      {pokemon.pokemons.map(p =>
        <React.Fragment key={p.id}>
          <DisplayButton onClick={() => getPokemonType(p.name)}>{p.name}</DisplayButton>
        </React.Fragment>)}
      <>
        {pokemon.types.map(t => <React.Fragment key={t.id}>
          <DisplayButton>{t.type.name}</DisplayButton>
                                </React.Fragment>)}
      </>
    </>

  )
}

export default Pokemons
