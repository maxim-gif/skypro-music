import React from 'react';
import PropTypes from 'prop-types';
import CenterBlockContent from '../CenterBlockContent.js'
import Filter from '../filter/filter.js'
import * as S from './CenterBlock.style.js'
function CenterBlock({isLoading}) {
    return(
    <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterBlockSearch>
        <h2 className="centerblock__h2">Треки</h2>
        <Filter $isLoading={isLoading}/>
        <CenterBlockContent isLoading={isLoading}/>
    </S.MainCenterBlock>
    )
}
CenterBlock.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default CenterBlock;