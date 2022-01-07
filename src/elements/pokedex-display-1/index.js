import styled from 'styled-components'

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
export const DisplayPokemonsNames = styled.div`
&&{
contain: content;
display: grid;
align-items: center;
justify-content: center;
grid-template-columns: repeat(4,1fr);
padding: 0;
margin: 0;
}
`
export const PokemonSearchBar = styled.input`
&&{
  width:100%;
  height: 8px;
  outline: none;
  text-align: left;
  font-size: 12px;
  padding: 10px;
  background-color: #8F815B;
  text-transform: uppercase;
}
`
export const DisplayButton = styled.button`
&&{
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: max-content;
  background-color: #8F815B;
  font-size: 9px;
  padding: 10px;
  margin: 5px;
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
  background-color: #BFB497;
}
`
export const ActionButton = styled.button`
&&{
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  min-height: max-content;
  background-color: #fff;
  color: #000;
  font-size: 8px;
  padding: 5px;
  height: auto;
  width: 100%;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(.27,1.16,0.1,-0.14);
  &+&{
    margin-left: 2px;
  }
}
`
export const PokemonType = styled.div.attrs(props => ({
  type: props.type || '#ddd'
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
export const GridRow = styled.div`
&&{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
margin: 5px 0 5px 0;
padding: 0;
}
`
