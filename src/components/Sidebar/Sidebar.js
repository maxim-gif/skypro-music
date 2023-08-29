import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Sidebar.style.js'
import {Personal} from '../Personal/Personal.js'
const Sidebar = ({isLoading}) => {
  return(
    <S.MainSaidBar>
      <Personal/>
      <S.SaidBarBlock>
      <S.SaidBarList>
        <S.SaidBarItem $isLoading={isLoading}>
          <S.SaidBarLink href="#">
            <S.SaidBarImg
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </S.SaidBarLink>
        </S.SaidBarItem>
        <S.SaidBarItem $isLoading={isLoading}>
          <S.SaidBarLink href="#">
            <S.SaidBarImg
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </S.SaidBarLink>
        </S.SaidBarItem>
        <S.SaidBarItem $isLoading={isLoading}>
          <S.SaidBarLink href="#">
            <S.SaidBarImg
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </S.SaidBarLink>
        </S.SaidBarItem>
      </S.SaidBarList>
      </S.SaidBarBlock>
    </S.MainSaidBar>
) 
}
Sidebar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export  {Sidebar};