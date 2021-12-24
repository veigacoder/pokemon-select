import 'nes.css/css/nes.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { typeColors } from '../../assets/colors'
import { getPokemons } from '../../store/actions/pokemonsActions'

export const PokedexInfo = (props) => {
  useEffect(() => {
    const pokemonsGet = axios.get('https://pokeapi.co/api/v2/pokemon')
  }, [])

  return (
    <div>
      {pokemons.map(p =>
        <React.Fragment key={p.id}>
          {p.name}
        </React.Fragment>
      )}
    </div>
  )
}

export default {
  PokedexInfo
}
