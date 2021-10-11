import styled from 'styled-components'

export const PokedexBase = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
background-color: #D64747;
width: 100%;
height: 100%;
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
height: auto;
&&{ 
  padding: 10px;
  @media (max-width: 1000px){
  height: 100%;
  } 
}
`

export const PokedexDisplay1 = styled.div`
&&{ 
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  position: static;
  align-items: center;
  padding: 10px;
  width: 50%;
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
background-color: #D9D9D9;
  display:flex;
  text-align: left;
  padding: 10px;
  width: 50%;
  padding: 5px;
  margin: 15px;
  @media (max-width: 1000px){
  font-size: 10px;
  } 
}

`
export const PokedexDisplayPhoto = styled.div`
color: wheat;
background-color: gray;
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
export const PokedexDisplayPokemons = styled.div`
background-color:#C9C9C9;
width: 100%;
overflow-y: scroll;
overflow-x: hidden;
contain: content;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 20px;
&&{
  padding: 10px;
  margin: 20px 0 0 0 ;

@media (max-width: 1000px){
  grid-template-columns: 1fr;
}}
`
export const Table = styled.table`
color: #212121;
font-size: 14px;
height: max-content;
align-items: center;
justify-content: center;
width: 100%;
@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const TableItem = styled.td`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 12px;
text-transform: uppercase;
@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const TableRow = styled.tr`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 1000px){
  font-size: 10px;
  } 
`
export const PokedexPokemonSearcher = styled.input`
&&{
  width:30%;
  height: 8px;
  outline: none;
  font-size: 14px;
  padding: 20px;
  background-color: #C9C9C9;
  border-color: black;
  text-transform: uppercase;
}
`
export const PokedexPokemonAvatar = styled.div`
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
  transition: all 300ms cubic-bezier(.27,1.16,.81,-0.14);
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
export const PokedexPokemonType = styled.div.attrs(props => ({
  type: props.type || '#D9D9D9'

}))`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${props => props.type};
  font-size: 8px;
  padding: 5px;
  height: max-content;
  width: max-content;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(.27,1.16,.81,-0.14);
  margin: 10px;
}

`
