import styled from 'styled-components'
import { typeColors } from '../../assets/colors'

export const DisplayPhoto = styled.div`
&&{
  color: wheat;
background-color: #212529;
height: 128px;
width:  128px;
background-size: 200px;
align-self: center;  
padding: 0;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
pointer-events: none;
}
`

export const PokemonType = styled.div.attrs(props => ({
  type: props.type
}))`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: black;
  background-color: ${typeColors.fire};
  font-size: 8px;
  padding: 5px;
  height: max-content;
  width: max-content;
  text-transform: uppercase;
  margin: 10px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
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
