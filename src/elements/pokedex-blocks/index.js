import styled from 'styled-components'

export const PokedexBase = styled.div`
display: inline-block;
margin-top: 10px;
background-color: #D64747;
width: 100%;
min-height: max-content;
position: relative;
&&{ 
  padding: 10px;
  margin: 15px;
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
height: max-content;
min-height: 400px;
&&{ 
  padding: 10px;
  margin: 10px
}
`

export const PokedexDisplay1 = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column;
position: static;
padding: 10px;
width: 50%;
min-width: 100px;
height: 1;
min-height:max-content ;
max-height: 600px;
&&{ 
  padding: 5px 10px 10px 10px;
  margin: 15px;
}


`

export const PokedexDisplay2 = styled.div`
background-color: #D9D9D9;
display:flex;
text-align: left;
justify-content: space-between;
padding: 10px;
width: 50%;
min-width: 100px;

&&{ 
  padding: 5px;
  margin: 15px;
}

`
export const PokedexDisplayPhoto = styled.div`
color: wheat;
background-color: gray;
height: 40px;
width:  40px;
background-size: 200px;
overflow: none;
&&{
  padding: 0;
}
`
export const PokedexDisplayPokemons = styled.div`
background-color:#C9C9C9;
width:  100%;
height: 100%;
overflow-x: hidden;
overflow-y: scroll;

display: flex;
flex-wrap: wrap;
grid-gap: 20px;


&&{
  padding: 10px;
  margin: 40px 0 0 0 ;
}
`
export const Table = styled.table`
text-decoration: none;
outline: none;
list-style: none;
color: #212121;
font-size: 14px;
padding: 0;
`
export const TableItem = styled.td`
margin: none;
`

export const PokedexPokemonSearcher = styled.input`
&&{
  width: 50%;
  height: 8px;
  outline: none;
  font-size: 16px;
  padding: 20px;
  background-color: #C9C9C9;
  border-color: black;
}
`
export const PokedexPokemonAvatar = styled.div`
&&{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #D9D9D9;
  font-size: 10px;
  transition: all 300ms cubic-bezier(.27,1.16,.81,-0.14);
}
:hover {
  background-color: #222;
  color: #D9D9D9;
}
`
