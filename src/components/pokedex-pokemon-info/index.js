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
import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'

export const PokedexInfo = () => {
  const [pokes, setPokes] = useState([])
  const [abilities, setAbilities] = useState([])
  const [type, setType] = useState([])
  const [name, setName] = useState('Choose a pokémon')
  const [photo, setPhoto] = useState(null)

  const GetPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=')
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
      <TableItem className='nes-container is-rounded'>
        {item.ability.name}
      </TableItem>
    )
  }
  const RenderType = (item) => {
    return (
      <TableItem className='nes-container is-rounded'>
        {item.type.name}
      </TableItem>
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
          <tr>
            <TableItem>
              {name.toUpperCase()}
            </TableItem>
          </tr>
          <tr>
            <PokedexDisplayPhoto className='nes-container is-rounded'>
              <img src={photo} width='100%' height='100%' />
            </PokedexDisplayPhoto>
          </tr>
        </Table>
        <Table>
          <tr>
            <TableItem>
              TYPE
            </TableItem>
          </tr>
          <tr>
            {type.map(RenderType)}
          </tr>
        </Table>
        <Table>
          <tr>
            <TableItem>
              ABILITIES
            </TableItem>
          </tr>
          <tr>
            {abilities.map(RenderItem)}
          </tr>
        </Table>

      </PokedexDisplay2>
    </>
  )
}

export default PokedexInfo
