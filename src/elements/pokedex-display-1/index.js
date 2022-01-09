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
display: grid;
grid-template-columns: repeat(4,1fr);
padding: 0;
margin: 0;
height: fit-content;
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
  position: relative;
}
`
export const DisplayButton = styled.button`
&&{
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self:  flex-start;
  min-height: max-content;
  background-color: #8F815B;
  font-size: 8px;
  padding: 5px;
  margin: 5px;
  height: 35px;
  width: 100px;
  text-transform: uppercase;
  transition: all 300ms cubic-bezier(.27,1.16,0.1,-0.14);
}
:hover {
  background-color: #BFB497;
}
-webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
`

export const GridRow = styled.div`
&&{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
margin: 5px 0 5px 0;
padding: 0;
}
`

export const GridColumn = styled.div`
&&{
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100%;
margin: 5px 0 5px 0;
padding: 0;
}
`
