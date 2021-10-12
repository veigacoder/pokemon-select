import {
  PokedexDisplay1,
  PokedexDisplay2,
  PokedexDisplayPhoto,
  PokedexDisplayPokemons,
  PokedexPokemonAvatar,
  PokedexPokemonSearcher,
  PokedexPokemonType,
  Table,
  TableItem,
  TableRow
} from '../../elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'
import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import { typeColors } from '../../assets/colors'

export const PokedexInfo = () => {
  const [pokes, setPokes] = useState([])
  const [abilities, setAbilities] = useState([])
  const [type, setType] = useState([])
  const [name, setName] = useState('Choose a pokémon')
  const [photo, setPhoto] = useState('https://toppng.com/public/uploads/thumbnail/okeball-pokemon-pixel-8-bit-gif-1156299108871jc8sofbw.png')

  const GetPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      setPokes(response.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const RenderPokemon = (item) => {
    return (
      <PokedexPokemonAvatar
        className='nes-container is-rounded' onClick={() => {
          setName(item.name)
          axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            .then(res => {
              setAbilities(res.data.abilities)
              setType(res.data.types)
              console.log(type)
              setPhoto(res.data.sprites.front_default)
              console.log(res)
            })
        }}
      >
        {item.name}
      </PokedexPokemonAvatar>
    )
  }
  const RenderItem = (item) => {
    return (
      <PokedexPokemonAvatar className='nes-container is-rounded'>
        {item.ability.name}
      </PokedexPokemonAvatar>

    )
  }
  const RenderType = (item) => {
    const chooseType = () => {
      if (item.type.name === 'bug') return typeColors.bug
      if (item.type.name === 'dark') return typeColors.dark
      if (item.type.name === 'dragon') return typeColors.dragon
      if (item.type.name === 'electric') return typeColors.electric
      if (item.type.name === 'fairy') return typeColors.fairy
      if (item.type.name === 'fighting') return typeColors.fight
      if (item.type.name === 'fire') return typeColors.fire
      if (item.type.name === 'flying') return typeColors.flying
      if (item.type.name === 'grass') return typeColors.grass
      if (item.type.name === 'ground') return typeColors.ground
      if (item.type.name === 'ice') return typeColors.ice
      if (item.type.name === 'ghost') return typeColors.ghost
      if (item.type.name === 'normal') return typeColors.normal
      if (item.type.name === 'poison') return typeColors.poison
      if (item.type.name === 'psychic') return typeColors.psychic
      if (item.type.name === 'rock') return typeColors.rock
      if (item.type.name === 'steel') return typeColors.steel
      if (item.type.name === 'water') return typeColors.water
    }
    return (
      <PokedexPokemonType className='nes-container is-rounded ' type={chooseType}>
        {item.type.name}
      </PokedexPokemonType>
    )
  }
  useEffect(() => {
    GetPokemon()
  }, [])

  return (
    <>
      <PokedexDisplay1 className='nes-container is-rounded'>
        <PokedexPokemonSearcher className='nes-input is-rounded' placeholder='try it' />
        <PokedexDisplayPokemons className='nes-container is-rounded'>
          {pokes.map(RenderPokemon)}
        </PokedexDisplayPokemons>
      </PokedexDisplay1>
      <PokedexDisplay2 className='nes-container is-rounded'>
        <Table>
          <TableRow>
            <TableItem>
              {name.toUpperCase()}
            </TableItem>
          </TableRow>
          <TableRow>
            <PokedexDisplayPhoto className='nes-container is-rounded'>
              <img src={photo} width='100%' height='100%' />
            </PokedexDisplayPhoto>
          </TableRow>
          <TableRow>
            {type.map(RenderType)}
          </TableRow>
        </Table>
        <Table />
        <Table>
          <TableRow>
            <TableItem>
              ABILITIES
            </TableItem>
          </TableRow>
          {abilities.map(RenderItem)}

        </Table>

      </PokedexDisplay2>
    </>
  )
}

export default PokedexInfo
