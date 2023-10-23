import React from 'react'
import * as S from './search.style.js'
const Search = () => {
    return (
        <S.CenterBlockSearch>
            <S.SearchSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText type="search" placeholder="Поиск" name="search" />
        </S.CenterBlockSearch>
    )
}
export { Search }
