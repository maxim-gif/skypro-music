import styled, { keyframes, css } from 'styled-components'

const glowing = keyframes`
0% { background-color: #313131;}
50% { background-color: #646464;}
100% { background-color: #313131; } 
`

export const MainSaidBar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`

export const SaidBarBlock = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
export const SaidBarList = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`

export const SaidBarImg = styled.img`
width: 100%;
height: auto;
`
export const SaidBarItem = styled.div`
& > a{
    display: ${({ $isLoading }) => ($isLoading ? "none" : "block")};
    }
&:not(:last-child) {
    margin-bottom: 30px;
    };
animation: ${({ $isLoading }) =>$isLoading ? css`${glowing} 1300ms infinite` : 'none'};
width: 250px;
height: 150px;
`