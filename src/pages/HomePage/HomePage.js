import { MainNav } from '../../components/MainNav/MainNav.js'
import {Bar} from '../../components/bar/Bar.js'
import {Sidebar} from '../../components/Sidebar/Sidebar.js'
import {CenterBlock} from '../../components/CenterBlock/CenterBlock.js'
import * as S from './HomePage.style.js'
import React from 'react';
import PropTypes from 'prop-types';


const { useState, useEffect } = React;



const HomePage = ({logout}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <S.Wrapper>
       <S.Container>
        <S.Main>
          <MainNav logout={logout}/>
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

HomePage.propTypes = {
  logout: PropTypes.func.isRequired,
};
export  {HomePage};
