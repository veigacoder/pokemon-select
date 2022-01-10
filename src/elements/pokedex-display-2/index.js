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
  background-color: ${props => props.type};
  font-size: 8px;
  padding: 5px;
  height: max-content;
  min-width: max-content;
  width: 100%;
  text-transform: uppercase;
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
width: 36px;
min-width: fit-content;
`
export const GridRow = styled.div`
&&{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
min-width: fit-content;
margin: 5px 0 5px 0;
padding: 0;
font-size: 10px;
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
  background-color: #212529;
  color:white;
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
