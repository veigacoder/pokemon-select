import 'nes.css/css/nes.min.css'
import {
  Main,
  MainBody,
  MainHeader,
  PokedexBase,
  PokedexHeader,
  PokedexBody,
  PokedexDisplay1,
  PokedexDisplay2,
  PokedexDisplayTools
} from './elements/main'
import Pokemons from './components/pokemon-list/index'
import PokemonsInfo from './components/pokemon-info/index'
import Tools from './components/pokemon-tools'

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
            <PokedexDisplayTools className='nes-container is-rounded'><Tools /></PokedexDisplayTools>
            <PokedexDisplay1 className='nes-container is-rounded'> <Pokemons /></PokedexDisplay1>
            <PokedexDisplay2 className='nes-container is-rounded'> <PokemonsInfo /></PokedexDisplay2>

          </PokedexBody>
        </PokedexBase>
      </MainBody>
    </Main>
  )
}

export default App
