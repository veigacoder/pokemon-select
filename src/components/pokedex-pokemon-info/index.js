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
    const chooseType = `${typeColors[item.type.name]}`
    console.log(chooseType)
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
