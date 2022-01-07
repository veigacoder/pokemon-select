import 'nes.css/css/nes.min.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { ActionButton, DisplayButton, PokemonType } from '../../elements/pokedex-display-1'
import { DisplayPhoto, GridRow, GridColumn } from '../../elements/pokedex-display-2'

export const PokemonsInfo = () => {
  const pokemon = useSelector((state) => state)

  return (
    <>
      <GridColumn>
        <GridRow>
          <DisplayPhoto className='nes-container is-rounded'>
            <img src={pokemon.photo.front_default} width='100%' height='100%' />
          </DisplayPhoto>
        </GridRow>

        <GridRow>
          <ActionButton>

            {pokemon.evolution.name}
          </ActionButton>
        </GridRow>
      </GridColumn>

      <GridColumn>
        <GridRow>
          {pokemon.types.map(t =>
            <React.Fragment key={t.id}>
              <PokemonType>{t.type.name}</PokemonType>
            </React.Fragment>)}
        </GridRow>
      </GridColumn>

      <GridColumn>
        <GridRow />
      </GridColumn>
    </>

  )
}

export default PokemonsInfo
