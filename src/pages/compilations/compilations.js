import { MainNav } from '../../components/MainNav/MainNav.js'
import {Bar} from '../../components/bar/Bar.js'
import {Personal} from '../../components/Personal/Personal.js'
import * as S from './compilations.style.js'
import React from 'react';
import {CenterBlockContent} from '../../components/CenterBlockContent/CenterBlockContent.js'
import {Search} from '../../components/search/search.js'
const { useState, useEffect } = React;



const Compilations = () => {
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
          <MainNav/>
          <div>
          <Search/>
          <S.CenterBlockH2>Треки</S.CenterBlockH2>
          <CenterBlockContent isLoading={isLoading}/>
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

export  {Compilations};