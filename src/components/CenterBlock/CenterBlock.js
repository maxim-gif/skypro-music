import React from 'react';
import PropTypes from 'prop-types';
import {CenterBlockContent} from '../CenterBlockContent/CenterBlockContent.js'
import {Filter} from '../filter/filter.js'
import {Search} from '../search/search.js'
import * as S from './CenterBlock.style.js'
const CenterBlock = ({isLoading}) => {
  return(
    <S.MainCenterBlock>
        <Search/>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
        <Filter $isLoading={isLoading}/>
        <CenterBlockContent isLoading={isLoading}/>
    </S.MainCenterBlock>
    )
}
CenterBlock.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export  {CenterBlock};