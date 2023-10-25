import React from 'react'
import * as S from './filter.style.js'  
import { AuthContext } from '../../context/authContext.js'
import { useContext, useState, useEffect } from 'react'

const Filter = () => {

    const { searchEnable, authorList, filterAuthor, setFilterAuthor, setFilterYear, setFilterGenre } = useContext(AuthContext)
    if (!searchEnable) {
        return null
    }


    const [visibleFilter, setVisibleFilter] = useState()
    const [activeLink, setActiveLink] = useState(false);

    const switchFilterAuthor = (author) => {
        if (filterAuthor.indexOf(author) === -1) {
            setFilterAuthor(prevFilterAuthor => [...prevFilterAuthor, author])
        } else {
            setFilterAuthor(prevFilterAuthor => prevFilterAuthor.filter(item => item !== author))
        }
        setActiveLink(!activeLink)
    }

    const switchFilterYear = (year) => {
        setFilterYear(year)
    }
    const switchFilterGenre = (genre) => {
        setFilterGenre(genre)
    }

    useEffect(() => {
        console.log(filterAuthor);
    },[filterAuthor])


    const authorListHtml = authorList.map((author) => (
        <S.ModalLink key={author} onClick={(event) => {
            event.stopPropagation();
            switchFilterAuthor(author);
        }}>{author}</S.ModalLink>
    ))
    

    return (
        <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton
                $isActive={visibleFilter === 'author'}
                className={`_btn-text`}
                onClick={() =>
                    {
                        setVisibleFilter(visibleFilter === `author` ? '' : 'author')
                    }
                }
            >
                <span>исполнителю</span>
                <S.SelectAuthor>
                    <S.ModalLinkBox>{authorListHtml}</S.ModalLinkBox>
                </S.SelectAuthor>
            </S.FilterButton>
            <S.FilterButton
                $isActive={visibleFilter === 'year'}
                className={`_btn-text`}
                onClick={() =>
                    setVisibleFilter(visibleFilter === `year` ? '' : 'year')
                }
            >
                <span>году выпуска</span>
                <S.SelectYear>
                    <S.ModalLinkBox>
                        <S.ModalLink onClick={() => {switchFilterYear('default')}}>По умолчанию</S.ModalLink>
                        <S.ModalLink onClick={() => {switchFilterYear('new')}}>Сначала новые</S.ModalLink>
                        <S.ModalLink onClick={() => {switchFilterYear('old')}}>Сначала старые</S.ModalLink>
                    </S.ModalLinkBox>
                </S.SelectYear>
            </S.FilterButton>
            <S.FilterButton
                $isActive={visibleFilter === 'genre'}
                className={`_btn-text`}
                onClick={() =>
                    setVisibleFilter(visibleFilter === `genre` ? '' : 'genre')
                }
            >
                <span>жанру</span>
                <S.SelectGenre>
                    <S.ModalLinkBox>
                        <S.ModalLink onClick={() => {switchFilterGenre("Классическая музыка")}} >Классическая музыка</S.ModalLink>
                        <S.ModalLink onClick={() => {switchFilterGenre("Рок музыка")}} >Рок музыка</S.ModalLink>
                        <S.ModalLink onClick={() => {switchFilterGenre("Электронная музыка")}} >Электронная музыка</S.ModalLink>
                    </S.ModalLinkBox>
                </S.SelectGenre>
            </S.FilterButton>
        </S.CenterBlockFilter>
    )
}

export { Filter }
