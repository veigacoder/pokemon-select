import 'nes.css/css/nes.min.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { ActionButton } from '../../elements/pokedex-display-1'
import { DisplayPhoto, GridRow, GridColumn, PokemonType } from '../../elements/pokedex-display-2'

export const PokemonsInfo = () => {
  const pokemon = useSelector((state) => state)

  return (
    <>
      <GridColumn>
        <GridRow>
          <DisplayPhoto className='nes-container is-rounded'>
            {
            pokemon.photo
              ? <img draggable='false' src={pokemon.photo.front_default} width='100%' height='100%' />
              : ''
            }
          </DisplayPhoto>
        </GridRow>

        <GridRow>
          <ActionButton>
            {`${pokemon.id} `}{pokemon.name}
          </ActionButton>

        </GridRow>
      </GridColumn>

      <GridColumn>
        <GridRow>
          {pokemon.types.name.map(t =>
            <React.Fragment key={t.id}>
              <PokemonType type={t.type.name}>{t.type.name}</PokemonType>
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
