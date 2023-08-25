import styled, {css} from 'styled-components'

const PlaceholderMixin = css`
background-color: transparent;
color: #ffffff;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`
export const MainCenterBlock = styled.div`
width: 1136px;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
export const CenterBlockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4e4e4e;
margin-bottom: 51px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const SearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #ffffff;
fill: transparent;
`
export const SearchText = styled.input`
-webkit-box-flex: 100;
-ms-flex-positive: 100;
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
&::-webkit-input-placeholder {${PlaceholderMixin}}
&::-ms-input-placeholder{${PlaceholderMixin}}
&::placeholder{${PlaceholderMixin}}
`