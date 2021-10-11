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
  const [name, setName] = useState('Choose a pokémon')
  const [abilities, setAbilities] = useState([])

  const GetPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
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
            })
        }}
      >
        {item.name.toUpperCase()}
      </PokedexPokemonAvatar>
    )
  }
  const RenderItem = (item) => {
    return (
      <TableItem className='nes-container is-rounded'>
        {item.ability.name.toUpperCase()}
      </TableItem>
    )
  }

  useEffect(() => {
    GetPokemon()
  }, [])

  return (
    <>
      <PokedexDisplay1 className='nes-container is-rounded'>
        <PokedexPokemonSearcher className='nes-input is-rounded' />
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
            <PokedexDisplayPhoto className='nes-container is-rounded' />
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
