import 'nes.css/css/nes.min.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  DisplayButton,
  DisplayPokemonsNames,
  PokemonSearchBar,
  GridRow,
  ActionButton
} from '../../elements/pokedex-display-1'
import { actionCreators } from '../../store'

export const Pokemons = () => {
  const pokemon = useSelector((state) => state)
  const dispatch = useDispatch()
  const { getPokemons, getPokemon } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <GridRow>
        <PokemonSearchBar className='nes-container is-rounded' />
      </GridRow>
      <GridRow>
        <DisplayPokemonsNames>
          {pokemon.pokemons.map(p =>
            <React.Fragment key={p.id}>
              <DisplayButton onClick={() => getPokemon(p.name)}>{p.name}</DisplayButton>
            </React.Fragment>
          )}
        </DisplayPokemonsNames>
      </GridRow>
      <GridRow>
        <ActionButton>home</ActionButton>
        <ActionButton>-</ActionButton>
        <ActionButton>SEARCH</ActionButton>
        <ActionButton>+</ActionButton>
        <ActionButton>+5</ActionButton>

      </GridRow>
    </>
  )
}

export default Pokemons
