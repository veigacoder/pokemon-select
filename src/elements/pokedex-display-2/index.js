import styled from 'styled-components'

export const DisplayPhoto = styled.div`
&&{
  color: wheat;
background-color: #212529;
height: 128px;
width:  128px;
background-size: 200px;
overflow: none;
align-self: center;  
padding: 0;
}
`

export const PokemonType = styled.div`
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
export const GridColumn = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
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
font-size: 10px;
}
`
