import {MainNav} from './components/MainNav/MainNav.js'
import {Bar} from './components/bar/Bar.js'
import {Sidebar} from './components/Sidebar/Sidebar.js'
import {CenterBlock} from './components/CenterBlock/CenterBlock.js'
import { createGlobalStyle } from 'styled-components';
import * as S from './App.style.js'
import React from 'react';
const { useState, useEffect } = React;

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

._btn-text:hover {
  border-color: #d9b6ff;
  cursor: pointer;
}

._btn-text:hover > span{
  color: #d9b6ff;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}

._btn-icon:active > svg,
._btn-icon:active > svg {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
`;
const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <GlobalStyle />
      <S.Wrapper>
       <S.Container>
        <S.Main>
          <MainNav/>
          <CenterBlock isLoading={isLoading}/>
          <Sidebar isLoading={isLoading}/>
        </S.Main>
        <Bar isLoading={isLoading}/>
        <footer></footer>
       </S.Container>
      </S.Wrapper>
    </div>
  ); 
}

export default App;
