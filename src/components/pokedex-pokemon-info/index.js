import {
  PokedexDisplay1,
  PokedexDisplay2,
  PokedexDisplayPhoto,
  Table,
  TableItem,
  PokedexPokemonSearcher,
  PokedexDisplayPokemons,
  PokedexPokemonAvatar
} from '../../elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'
import React, { useState } from 'react'

export const PokedexInfo = () => {
  const [pokes, setPokes] = useState('pokémon')
  const [name, setName] = useState('Pokémon')
  const [photo, setPhoto] = useState('pokémon  photo')

  return (
    <>
      <PokedexDisplay1 className='nes-container is-rounded'>
        <PokedexPokemonSearcher className='nes-input is-rounded' />
        <PokedexDisplayPokemons className='nes-container is-rounded'>
          <PokedexPokemonAvatar className='nes-container is-rounded'>pokémon</PokedexPokemonAvatar>
          <PokedexPokemonAvatar className='nes-container is-rounded'>pokémon</PokedexPokemonAvatar>
        </PokedexDisplayPokemons>
      </PokedexDisplay1>
      <PokedexDisplay2 className='nes-container is-rounded'>
        <Table>
          <TableItem>
            Pokémon name: {name}
          </TableItem>
        </Table>
        <PokedexDisplayPhoto className='nes-container is-rounded'>
          <img
            src='https://i.pinimg.com/originals/1b/41/20/1b412053a7b59ab47149a3eb59e5804d.png'
            width='100%'
          />
        </PokedexDisplayPhoto>
      </PokedexDisplay2>
    </>
  )
}

export default PokedexInfo
