import {
  PokedexBase,
  PokedexHeader,
  PokedexBody,
  PokedexDisplay1,
  PokedexDisplay2
} from '../src/elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'
import {
  Main,
  MainBody,
  MainHeader
} from './elements/main'
import Pokemons from './components/pokemon-info/index'

const App = () => {
  return (
    <Main>
      <MainHeader />
      <MainBody>
        <PokedexBase className='nes-container is-rounded'>
          <PokedexHeader>
            Pokémon Select v1.0
          </PokedexHeader>
          <PokedexBody className='nes-container is-rounded'>
            <PokedexDisplay1> <Pokemons /></PokedexDisplay1>
            <PokedexDisplay2> Working</PokedexDisplay2>

          </PokedexBody>
        </PokedexBase>
      </MainBody>
    </Main>
  )
}

export default App
