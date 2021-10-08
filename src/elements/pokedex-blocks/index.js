import styled from 'styled-components'

export const PokedexBase = styled.div`
display: inline-block;
margin-top: 10px;
background-color: #CF2525;
height:100%;
width: 95%;
min-height: 200px;
&&{ 
  padding: 10px;
  margin: 10px;
}
`
export const PokedexHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 20px;
&&{ 
  padding: 10px;
  margin: 10px;
}
`
export const PokedexBody = styled.div`
display: flex;
justify-content: center ;
background-color: #AA1C1C;
text-align: center;
height: 400px;
&&{ 
  padding: 10px;
  margin: 10px;
}
`

export const PokemonInfo = styled.div`
background-color: #D9D9D9;
color: wheat;
display: grid;
grid-auto-flow: row dense;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 10px;
width: 45%;
overflow-y: scroll; 
overflow: visible;
margin: 15px;
&&{ 
  padding: 5px;
  margin: 10px;
}
`

export const PokedexDisplay = styled.div`
background-color: #D9D9D9;
display:flex;
text-align: left;
justify-content: space-between;
padding: 10px;
width: 55%;
&&{ 
  padding: 5px;
  margin: 10px;
  
}
`
export const PokedexDisplayPhoto = styled.div`
color: wheat;
background-color: gray;
height: 200px;
width:  200px;
background-size: 200px;
overflow: none;
&&{
  padding: 0;
}
`

export const List = styled.ul`
text-decoration: none;
outline: none;
list-style-position: none;
list-style: none;
color: #212121;
font-size: 20px;
padding: 0;
`
export const ListItem = styled.li`
margin: none;
`

export const Circle = styled.div`
border-radius: 50%;
background: darkturquoise;
`
