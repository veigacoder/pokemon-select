import 'nes.css/css/nes.min.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DisplayButton } from '../../elements/pokedex-blocks'

export const PokemonsInfo = () => {
  const pokemon = useSelector((state) => state)

  return (

    <>
      <>
        {pokemon.types.map(t =>
          <React.Fragment key={t.id}>
            <DisplayButton>{t.type.name}</DisplayButton>
          </React.Fragment>)}
      </>
    </>

  )
}

export default PokemonsInfo
