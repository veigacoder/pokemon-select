import 'nes.css/css/nes.min.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { ChooseType } from '../../assets/colors'
import {
  DisplayPhoto,
  GridRow,
  GridColumn,
  PokemonType,
  ActionButton
} from '../../elements/pokedex-display-2'

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

        <GridRow>
          {pokemon.types.name.map(t =>
            <React.Fragment key={t.id}>
              <PokemonType type={ChooseType(t.type.name)}>{t.type.name}</PokemonType>
            </React.Fragment>)}
        </GridRow>
      </GridColumn>

      <GridColumn />

      <GridColumn>
        <GridRow />
      </GridColumn>
    </>

  )
}

export default PokemonsInfo
