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
import axios from 'axios'
import { typeColors } from '../../assets/colors'

export const PokedexInfo = () => {
  const [pokemons, setPokemons] = useState([])
  const [abilities, setAbilities] = useState([])
  const [type, setType] = useState([])
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [atualOffset, setOffset] = useState(0)

  const BASE_ROUTE = 'https://pokeapi.co/api/v2/'

  const GetPokemon = async (limit, offset) => {
    try {
      const response = await axios.get(`${BASE_ROUTE}pokemon?limit=${limit}&offset=${offset}`)
      setPokemons(response.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  const RenderPokemon = (item) => {
    return (
      <PokedexPokemonAvatar
        className='nes-container is-rounded' onClick={() => {
          setName(item.name)
          axios.get(`${BASE_ROUTE}pokemon/${item.name}`)
            .then(res => {
              console.log(res.data)
              setAbilities(res.data.abilities)
              setType(res.data.types)
              setPhoto(res.data.sprites.front_default)
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
    return (
      <PokedexPokemonType className='nes-container is-rounded ' type={chooseType}>
        {item.type.name}
      </PokedexPokemonType>
    )
  }
  const changePlus = () => {
    setOffset(atualOffset + 21)
    GetPokemon(21, atualOffset + 21)
    console.log(atualOffset)
  }
  const changeMinus = () => {
    if (atualOffset !== 0) {
      setOffset(atualOffset - 21)
      GetPokemon(21, atualOffset - 21)
    }
  }
  const changeHome = () => {
    setOffset(0)
    GetPokemon(21, 0)
  }

  useEffect(() => {
    GetPokemon(21, atualOffset)
  }, [])

  return (
    <>
      <PokedexDisplay1 className='nes-container is-rounded'>
        <PokedexPokemonSearcher className='nes-input is-rounded' placeholder='ditto' />
        <PokedexDisplayPokemons className='nes-container is-rounded'>
          {pokemons.map(RenderPokemon)}
        </PokedexDisplayPokemons>
        <TableRow>
          <PokedexPokemonAvatar
            onClick={changeHome}
            className='nes-container '
          >home
          </PokedexPokemonAvatar>
          <PokedexPokemonAvatar onClick={changeMinus} className='nes-container'>{'<'}</PokedexPokemonAvatar>
          <PokedexPokemonAvatar onClick={changePlus} className='nes-container '>{'>'}</PokedexPokemonAvatar>
        </TableRow>
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
        <Table>

          <PokedexPokemonAvatar>
            Shiny
          </PokedexPokemonAvatar>

        </Table>
      </PokedexDisplay2>
    </>
  )
}

export default PokedexInfo
