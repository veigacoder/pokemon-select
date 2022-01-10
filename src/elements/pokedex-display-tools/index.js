import styled from 'styled-components'
import { typeColors } from '../../assets/colors'

export const IconBox = styled.div`
height: 64px;
width: 64px;
background-color: #E0CFCF;
color: black;
font-size: 8px;
justify-content: center;
align-items: center;
display: flex;
position: relative;
`
export const BoxBadge = styled.div`
&&{
height: 28px;
width: 28px;
background-color: #E6E6E6;
color: red;
font-size: 16px;
justify-content: center;
align-items: center;
display: flex;
position: absolute;
padding: 0;
top: -20px;
left: 40px;
}
`

export const GridColumn = styled.div`
height: 100%;
width: 100%;
justify-content: flex-start;
align-items: center;
display: flex;
flex-direction: column;
`
export const GridRow = styled.div`
height: max-content;
width: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
`
