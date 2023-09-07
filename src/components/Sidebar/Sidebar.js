import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Sidebar.style.js'
import {Personal} from '../Personal/Personal.js'
import { Link } from "react-router-dom";
const Sidebar = ({isLoading}) => {
  return(
    <S.MainSaidBar>
      <Personal/>
      <S.SaidBarBlock>
      <S.SaidBarList>
        <S.SaidBarItem $isLoading={isLoading}>
          <Link to="/compilations/1">
            <S.SaidBarImg
              src="img/playlist01.png"
              alt="day's playlist"
            />
          </Link>
        </S.SaidBarItem>
        <S.SaidBarItem $isLoading={isLoading}>
          <Link to="/compilations/2">
            <S.SaidBarImg
              src="img/playlist02.png"
              alt="day's playlist"
            />
          </Link>
        </S.SaidBarItem>
        <S.SaidBarItem $isLoading={isLoading}>
          <Link to="/compilations/3">
            <S.SaidBarImg
              src="img/playlist03.png"
              alt="day's playlist"
            />
          </Link>
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