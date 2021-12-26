import { render } from '@testing-library/react'
import 'nes.css/css/nes.min.css'
import React, { Component, useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { DisplayPokemons } from '../../elements/pokedex-blocks'
import { getPokemons } from '../../store/actions/pokemonsActions'

class pokemons extends Component {
  componentDidMount () {
    this.props.getPokemons()
  }

  render () {
    const { pokemons } = this.props.pokemons
    console.log(pokemons)

    return (
      <>
        {pokemons.map(u =>
          <React.Fragment key={u.id}>
            <DisplayPokemons className='nes-container is-rounded'>
              {u.name}
            </DisplayPokemons>
          </React.Fragment>
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({ pokemons: state.pokemons })

export default connect(mapStateToProps, { getPokemons })(pokemons)
