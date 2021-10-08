import {
  PokedexBase,
  PokedexHeader,
  PokedexBody,
  Circle
} from '../../elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'

import { PokedexInfo } from '../pokedex-body'

export const Pokedex = () => {
  return (
    <PokedexBase className='nes-container is-rounded'>
      <PokedexHeader>

        Pokédexicon
      </PokedexHeader>
      <PokedexInfo />
    </PokedexBase>
  )
}

export default Pokedex
