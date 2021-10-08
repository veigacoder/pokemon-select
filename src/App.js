import { Pokedex } from './components'
import { Main, MainBody, MainHeader } from './elements/main'

const App = () => {
  return (
    <Main>
      <MainHeader>
        Header
      </MainHeader>
      <MainBody>
        <Pokedex />
      </MainBody>
    </Main>
  )
}

export default App
