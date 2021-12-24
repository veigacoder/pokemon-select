import {
  PokedexBase,
  PokedexHeader,
  PokedexBody
} from '../src/elements/pokedex-blocks'
import 'nes.css/css/nes.min.css'
import {
  Main,
  MainBody,
  MainHeader
} from './elements/main'
import {
  PokedexInfo
} from './components'

const App = () => {
  return (
    <Main>
      <MainHeader />
      <MainBody>
        <PokedexBase className='nes-container is-rounded'>
          <PokedexHeader>
            Pokémon Catalect v1.0
          </PokedexHeader>
          <PokedexBody className='nes-container is-rounded'>
            <PokedexInfo />
          </PokedexBody>
        </PokedexBase>

      </MainBody>

    </Main>
  )
}

export default App
