import 'nes.css/css/nes.min.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  DisplayButton,
  DisplayPokemonsNames,
  PokemonSearchBar,
  GridRow,
  ActionButton,
  GridColumn
} from '../../elements/pokedex-display-1'
import { actionCreators } from '../../store'

export const Pokemons = () => {
  const pokemon = useSelector((state) => state)
  const dispatch = useDispatch()
  const {
    getPokemons,
    getPokemon,
    getPokemonsIncrement,
    getPokemonsDecrement
  } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <GridColumn>
      <GridRow>
        <PokemonSearchBar className='nes-container is-rounded' />
      </GridRow>
      <GridRow>
        <DisplayPokemonsNames>
          {pokemon.pokemons.loading
            ? <DisplayButton>'loading'</DisplayButton>
            : pokemon.pokemons.name.map(p =>
              <React.Fragment key={p.id}>
                <DisplayButton onClick={() => getPokemon(p.name)}>{p.name}</DisplayButton>
              </React.Fragment>
            )}
        </DisplayPokemonsNames>
      </GridRow>
      <GridRow>
        <ActionButton onClick={() =>
          getPokemons()}
        >HOME
        </ActionButton>
        <ActionButton onClick={() =>
          getPokemonsDecrement(
            pokemon.search.values.limit,
            pokemon.search.values.offset)}
        >-
        </ActionButton>
        <ActionButton onClick={() => console.log(pokemon.search.values)}>SEARCH</ActionButton>
        <ActionButton onClick={() =>
          getPokemonsIncrement(
            pokemon.search.values.limit,
            pokemon.search.values.offset)}
        >
          +
        </ActionButton>
        <ActionButton>+5</ActionButton>

      </GridRow>
    </GridColumn>
  )
}

export default Pokemons
