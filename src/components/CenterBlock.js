import React from 'react';
import PropTypes from 'prop-types';
import CenterBlockContent from '../components/CenterBlockContent.js'
import Filter from '../components/filter.js'
function CenterBlock({isLoading}) {
    return(
    <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <Filter isLoading={isLoading}/>
        <CenterBlockContent isLoading={isLoading}/>
    </div>
    )
}
CenterBlock.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default CenterBlock;