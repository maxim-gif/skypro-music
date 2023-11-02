import React from 'react'
const { useContext } = React
import * as S from './search.style.js'
import { AuthContext } from '../../context/authContext.js'

const Search = () => {
    const { setSearchText, searchText } = useContext(AuthContext)

    const handleSearchChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <S.CenterBlockSearch>
            <S.SearchSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
            </S.SearchSvg>
            <S.SearchText
                type="search"
                placeholder="Поиск"
                name="search"
                value={searchText}
                onChange={handleSearchChange}
            />
        </S.CenterBlockSearch>
    )
}
export { Search }
