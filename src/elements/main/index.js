import styled from 'styled-components'

export const Main = styled.div`
background-color: #2C2C2C;
height: max-content;
min-height: 100%;
width: 100%;
min-width: max-content;
top:0px;
right:0px;
bottom:0px;
left:0px;
position: absolute;
`

export const MainHeader = styled.div`
background-color: #1C1C1C;
height: 100px;
width: 100%;
`
export const MainBody = styled.div`
display: flex;
justify-content: center;
min-height: max-content;
padding: 10px 0 10px 0;
background-color: #2C2C2C;
`
export const PokedexBase = styled.div`
&&{ 
display: flex;
flex-direction: column;
margin-top: 10px;
background-color: #AB4C4C;
height: max-content;
width: max-content;
position: relative;
margin: 15px
}
`
export const PokedexHeader = styled.div`
display: flex;
justify-content: start;
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
align-items: center;
background-color: #9E4949;
text-align: center;
height: max-content;
width: max-content;
`
export const PokedexDisplay1 = styled.div`
&&{ 
  background-color: #212529;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 512px;
  height: 512px;
  max-height: auto;
  margin: 10px;
}
`
export const PokedexDisplay2 = styled.div`
&&{ 
background-color: #E0D8C0;
  display:flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  align-items: flex-start;
  width: 512px;
  height: 512px;
  margin: 10px;
  
}
`
export const PokedexDisplayTools = styled.div`
&&{ 
background-color: #212529;
color: #fff;
display:flex;
text-align: left;
justify-content: center;
padding: 10px;
width: 96px;
min-width: fit-content;
height: 512px;
margin: 10px;
}
`
