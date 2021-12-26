import styled from 'styled-components'

export const PokedexBase = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
background-color: #9E4949;
width: 100%;
height: 500px;
position: relative;
&&{ 
  padding: 10px;
  margin: 15px;
  @media (max-width: 1000px){
  height: 100%;
  padding: 5px;
  } 
}
`
export const PokedexHeader = styled.div`
display: flex;
justify-content: baseline;
align-items: center;
text-align: center;
height: 20px;
&&{ 
  padding: 10px;
}
`
export const PokedexBody = styled.div`
display: flex;
justify-content: center ;
background-color: #AB4C4C;
text-align: center;
height: 100%;
&&{ 
  padding: 10px;
  @media (max-width: 1000px){
  height: 100%;
  } 
}
`

export const PokedexDisplay1 = styled.div`
&&{ 
  background-color: #CCC;
  display: flex;
  position: static;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  width: 50%;
  max-width: 50%;
  height: auto;
  padding: 5px 10px 10px 10px;
  margin: 15px;
  @media (max-width: 1000px){
  font-size: 10px;
  } 
}


`

export const PokedexDisplay2 = styled.div`
&&{ 
background-color: #CCC;
  display:flex;
  text-align: left;
  justify-content: center;
  padding: 10px;
  width: 50%;
  padding: 5px;
  margin: 15px;
  @media (max-width: 1000px){
  font-size: 10px;
  } 
}

`
export const DisplayPhoto = styled.div`
color: wheat;
background-color: #A9A9A9;
height: 128px;
width:  128px;
background-size: 200px;
overflow: none;
align-self: center;

&&{
  padding: 0;
  @media (max-width: 1000px){
  height: 40%;
  width: 40%;
  } 
}
`
export const DisplayPokemons = styled.div`
background-color:#B9B9B9;

contain: content;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;

&&{
  padding: 10px;
  margin: 20px 0 0 0 ;

@media (max-width: 600px){
  
  overflow-x: scroll;
}}
`
export const Table = styled.table`
&&{
  color: #212121;
  font-size: 14px;
  height: max-content;
  width: 100%;
}
@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const TableItem = styled.td`
&& {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  padding: 15px 5px 15px 5px;
}

@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const Row = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const PokemonSearcher = styled.input`
&&{
  width:100%;
  height: 8px;
  outline: none;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  background-color: #C9C9C9;
  border-color: black;
  text-transform: uppercase;
}
`
export const DisplayButton = styled.div`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: max-content;
  background-color: #D9D9D9;
  font-size: 8px;
  padding: .5rem;
  height: auto;
  width: auto;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(.27,1.16,0.1,-0.14);
  @media (max-width: 1000px){
  font-size: 6px;
  padding: 5px;
  } 
}
:hover {
  background-color: #222;
  color: #D9D9D9;
}

`
export const ActionButton = styled.div`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: max-content;
  background-color: #D9D9D9;
  font-size: 8px;
  padding: .5rem;
  height: auto;
  width: auto;
  text-transform: uppercase;
  margin: 20px 10px 10px 10px;
  transition: all 300ms cubic-bezier(.27,1.16,0.1,-0.14);
  @media (max-width: 1000px){
  font-size: 6px;
  padding: 5px;
  } 
}
:hover {
  background-color: #222;
  color: #D9D9D9;
}
`

export const PokemonType = styled.div.attrs(props => ({
  type: props.type || '#D9D9D9'

}))`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: #121212;
  background-color: ${props => props.type};
  font-size: 8px;
  padding: 5px;
  height: max-content;
  width: max-content;
  text-transform: uppercase;
  margin: 10px;
}

`
