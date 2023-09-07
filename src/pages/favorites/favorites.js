import React from 'react';
import { MainNav } from '../../components/MainNav/MainNav.js'
import {Bar} from '../../components/bar/Bar.js'
import {Personal} from '../../components/Personal/Personal.js'
import {CenterBlockContent} from '../../components/CenterBlockContent/CenterBlockContent.js'
import {Search} from '../../components/search/search.js'
import * as S from './favorites.style.js'
const { useState, useEffect } = React;
import PropTypes from 'prop-types';



const Favorites = ({logout}) => {
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
          <div>
          <Search/>
          <S.CenterBlockH2>Мои треки</S.CenterBlockH2>
          <CenterBlockContent isLoading={isLoading} favoritesStatus={true}/>
          </div>
          <S.PersonalBlock>
            <Personal/>
          </S.PersonalBlock>
        </S.Main>
        <Bar isLoading={isLoading}/>
        <footer></footer>
       </S.Container>
      </S.Wrapper>
    </div>
  );  
}

Favorites.propTypes = {
  logout: PropTypes.func.isRequired,
};

export  {Favorites};