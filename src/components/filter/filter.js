import React from 'react';
const { useState } = React;
import * as S from './filter.style.js'
function Filter() {
    const [visibleFilter, setVisibleFilter] = useState();



    return(
        <S.CenterBlockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
          <S.FilterButton 
            isActive={visibleFilter === 'author'}
            className={`_btn-text`} 
            onClick={() =>  setVisibleFilter(visibleFilter === `author` ? '' : 'author') }
            >
            <span>исполнителю</span>
            <S.SelectAuthor>
                <S.ModalLinkBox>
                    <S.ModalLink>Nero</S.ModalLink>
                    <S.ModalLink>Dynoro</S.ModalLink>
                    <S.ModalLink>Ali Bakgor</S.ModalLink>
                    <S.ModalLink>Стоункат</S.ModalLink>
                    <S.ModalLink>AR/CO</S.ModalLink>
                    <S.ModalLink>Zeds Dead</S.ModalLink>
                    <S.ModalLink>Mr. Black</S.ModalLink>
                </S.ModalLinkBox>
            </S.SelectAuthor>
          </S.FilterButton>
          <S.FilterButton 
            isActive={visibleFilter === 'year'}
            className={`_btn-text`} 
            onClick={() =>  setVisibleFilter(visibleFilter === `year` ? '' : 'year') }
            >
          <span>году выпуска</span>
            <S.SelectYear>
                <S.ModalLinkBox>
                    <S.ModalLink>По умолчанию</S.ModalLink>
                    <S.ModalLink>Сначала новые</S.ModalLink>
                    <S.ModalLink>Сначала старые</S.ModalLink>
                </S.ModalLinkBox>
            </S.SelectYear>
          </S.FilterButton>
          <S.FilterButton 
            isActive={visibleFilter === 'genre'}
            className={`_btn-text`} 
            onClick={() =>  setVisibleFilter(visibleFilter === `genre` ? '' : 'genre') }
            >
          <span>жанру</span>
            <S.SelectGenre>
                <S.ModalLinkBox>
                    <S.ModalLink>Рок</S.ModalLink>
                    <S.ModalLink>Хип-хоп</S.ModalLink>
                    <S.ModalLink>Поп-музыка</S.ModalLink>
                    <S.ModalLink>Техно</S.ModalLink>
                    <S.ModalLink>Инди</S.ModalLink>
                    <S.ModalLink>Техно</S.ModalLink>
                    <S.ModalLink>Инди</S.ModalLink>
                </S.ModalLinkBox>
            </S.SelectGenre>
          </S.FilterButton>
        </S.CenterBlockFilter>
    )
}

export default Filter;