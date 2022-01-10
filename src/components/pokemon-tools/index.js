import 'nes.css/css/nes.min.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BoxBadge, GridColumn, GridRow, IconBox } from '../../elements/pokedex-display-tools'
import { actionCreators } from '../../store'

export const Tools = () => {
  const dispatch = useDispatch()
  const {
    getPokemons
  } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <GridColumn>
        <GridRow>
          <IconBox className='nes-container is-rounded'>
            filter menu dropdown
            <BoxBadge className='nes-container is-rounded'>X</BoxBadge>
          </IconBox>
        </GridRow>
        <GridRow>
          <IconBox className='nes-container is-rounded'>settings</IconBox>
        </GridRow>
        <GridRow>
          <IconBox className='nes-container is-rounded'>credits</IconBox>
        </GridRow>
      </GridColumn>
    </>
  )
}

export default Tools
