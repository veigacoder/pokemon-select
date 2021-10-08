import {
  PokemonInfo,
  PokedexDisplay,
  PokedexDisplayPhoto,
  PokedexDisplayStats,
  PokedexDisplayName,
  List,
  ListItem,
  PokedexBody,
  PokedexHeader,
  PokemonInfoAvatar
} from '../../elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'
import React, { useState } from 'react'

export const PokedexInfo = () => {
  const [pokes, setPokes] = useState('pokémon')
  const [name, setName] = useState('Pokémon name')
  const [photo, setPhoto] = useState('pokémon  photo')

  return (
    <>
      <PokedexBody className='nes-container is-rounded '>
        <PokemonInfo className='nes-container is-rounded' />
        <PokedexDisplay className='nes-container is-rounded'>
          <List>
            <ListItem>
              {name}
            </ListItem>

            <ListItem>
              Pokémon stats
            </ListItem>

          </List>
          <PokedexDisplayPhoto className='nes-container is-rounded'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'
              width='100%'
            />
          </PokedexDisplayPhoto>
        </PokedexDisplay>
      </PokedexBody>
    </>
  )
}

export default PokedexInfo
