import {
  PokedexBase,
  PokedexHeader,
  PokedexBody,
  Circle
} from '../../elements/pokedex-blocks'

import { PokedexInfo } from '../pokedex-body'

export const Pokedex = () => {
  return (
    <PokedexBase>
      <PokedexHeader>
        <svg height='50' width='50'>
          <circle cx='25' cy='25' r='20' fill='cyan' />
        </svg>
        Pokédexicon
      </PokedexHeader>
      <PokedexInfo />
    </PokedexBase>
  )
}

export default Pokedex
