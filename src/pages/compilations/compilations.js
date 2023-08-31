import { MainNav } from '../../components/MainNav/MainNav.js'
import {Bar} from '../../components/bar/Bar.js'
import {Personal} from '../../components/Personal/Personal.js'
import {CenterBlockContent} from '../../components/CenterBlockContent/CenterBlockContent.js'
import {Search} from '../../components/search/search.js'
import { useParams } from "react-router-dom";
import * as S from './compilations.style.js'
import React from 'react';
import PropTypes from 'prop-types';
const { useState, useEffect } = React;


const Compilations = ({logout}) => {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  
  const getTitle = (id) => {
    switch(id) {
      case 1:
        return "Плейлист дня";
      case 2:
        return "100 танцевальных хитов";
      case 3:
        return "Инди-заряд";
    }
  }

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
          <S.CenterBlockH2>{getTitle(Number(params.id))}</S.CenterBlockH2>
          <CenterBlockContent isLoading={isLoading} compilationsId={Number(params.id)}/>
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

Compilations.propTypes = {
  logout: PropTypes.func.isRequired,
};

export  {Compilations};