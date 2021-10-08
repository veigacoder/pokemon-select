import styled from 'styled-components'

export const PokedexBase = styled.div`
display: inline-block;
margin-top: 10px;
background-color: #CF2525;
position: static;
top: 0;
bottom: 0;
height:100%;
width: 90%;
min-height: 600px;
border-radius: 10px;
border: 10px double #1E1E1E;

`
export const PokedexHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 10px 10px 0px 10px;
`
export const PokedexBody = styled.div`
display: flex;
position: relative;
justify-content: center ;
background-color: #AA1C1C;
border-radius: 10px;
height: 500px;
margin: 10px;
text-align: center;
border: 5px double #1E1E1E;
`

export const PokemonInfo = styled.div`
background-color: #1E1E1E;
color: wheat;
display: grid;
grid-auto-flow: row dense;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 10px;
width: 45%;
overflow-y: scroll; 
margin: 15px;
border-radius: 5px;
`

export const PokedexDisplay = styled.div`
background-color: #1E1E1E;
display:flex;
text-align: left;
justify-content: space-between;
padding: 10px;
width: 55%;
height: max-content;
border-radius: 5px;
margin: 15px;
`
export const PokedexDisplayPhoto = styled.div`
color: wheat;
background-color: gray;
height: 200px;
width:  200px;
background-size: 200px;
overflow: none;
`

export const List = styled.ul`
text-decoration: none;
outline: none;
list-style-position: none;
list-style: none;
margin: 0;
margin-block: 0;
padding-inline: 0;
color: white;
font-size: 20px;
`
export const ListItem = styled.li`
margin: none;
`

export const Circle = styled.div`
border-radius: 50%;
background: darkturquoise;
`
