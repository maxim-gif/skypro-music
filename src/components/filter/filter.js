import React from 'react'
import * as S from './filter.style.js'
import { AuthContext } from '../../context/authContext.js'
import { useContext, useState } from 'react'

const Filter = () => {
    const {
        searchEnable,
        authorList,
        filterAuthor,
        setFilterAuthor,
        setFilterYear,
        setFilterGenre,
        filterYear,
        filterGenre,
    } = useContext(AuthContext)
    if (!searchEnable) {
        return null
    }

    const [visibleFilter, setVisibleFilter] = useState()

    const switchFilterAuthor = (author) => {
        if (filterAuthor.indexOf(author) === -1) {
            setFilterAuthor((prevFilterAuthor) => [...prevFilterAuthor, author])
        } else {
            setFilterAuthor((prevFilterAuthor) =>
                prevFilterAuthor.filter((item) => item !== author),
            )
        }
    }

    const switchFilterYear = (year) => {
        setFilterYear(year)
        console.log(filterYear === 'default')
    }

    const switchFilterGenre = (genre) => {
        if (filterGenre.indexOf(genre) === -1) {
            setFilterGenre((prevFilterGenre) => [...prevFilterGenre, genre])
        } else {
            setFilterGenre((prevFilterGenre) =>
                prevFilterGenre.filter((item) => item !== genre),
            )
        }
    }

    // useEffect(() => {
    //     console.log(filterAuthor);
    // },[filterAuthor])
    // useEffect(() => {
    //     console.log(filterGenre);
    // },[filterGenre])

    const authorListHtml = authorList.map((author) => (
        <S.ModalLink
            key={author}
            $activeLink={filterAuthor.includes(author)}
            onClick={(event) => {
                event.stopPropagation()
                switchFilterAuthor(author)
            }}
        >
            {author}
        </S.ModalLink>
    ))

    return (
        <S.CenterBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.FilterButton
                className={`_btn-text`}
                onClick={() => {
                    setVisibleFilter(visibleFilter === `author` ? '' : 'author')
                }}
            >
                <span>исполнителю</span>
                <S.SelectAuthor $isActive={visibleFilter === 'author'}>
                    <S.ModalLinkBox>{authorListHtml}</S.ModalLinkBox>
                </S.SelectAuthor>
                <S.CounterFilter $visible={filterAuthor.length === 0}>
                    {filterAuthor.length}
                </S.CounterFilter>
            </S.FilterButton>
            <S.FilterButton
                className={`_btn-text`}
                onClick={() =>
                    setVisibleFilter(visibleFilter === `year` ? '' : 'year')
                }
            >
                <span>году выпуска</span>
                <S.SelectYear $isActive={visibleFilter === 'year'}>
                    <S.ModalLinkBox>
                        <S.ModalLink
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterYear('default')
                            }}
                            $activeLink={filterYear === 'default'}
                        >
                            По умолчанию
                        </S.ModalLink>
                        <S.ModalLink
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterYear('new')
                            }}
                            $activeLink={filterYear === 'new'}
                        >
                            Сначала новые
                        </S.ModalLink>
                        <S.ModalLink
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterYear('old')
                            }}
                            $activeLink={filterYear === 'old'}
                        >
                            Сначала старые
                        </S.ModalLink>
                    </S.ModalLinkBox>
                </S.SelectYear>
            </S.FilterButton>
            <S.FilterButton
                className={`_btn-text`}
                onClick={() =>
                    setVisibleFilter(visibleFilter === `genre` ? '' : 'genre')
                }
            >
                <span>жанру</span>
                <S.SelectGenre $isActive={visibleFilter === 'genre'}>
                    <S.ModalLinkBox>
                        <S.ModalLink
                            $activeLink={filterGenre.includes(
                                'Классическая музыка',
                            )}
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterGenre('Классическая музыка')
                            }}
                        >
                            Классическая музыка
                        </S.ModalLink>

                        <S.ModalLink
                            $activeLink={filterGenre.includes('Рок музыка')}
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterGenre('Рок музыка')
                            }}
                        >
                            Рок музыка
                        </S.ModalLink>

                        <S.ModalLink
                            $activeLink={filterGenre.includes(
                                'Электронная музыка',
                            )}
                            onClick={(event) => {
                                event.stopPropagation()
                                switchFilterGenre('Электронная музыка')
                            }}
                        >
                            Электронная музыка
                        </S.ModalLink>
                    </S.ModalLinkBox>
                </S.SelectGenre>
                <S.CounterFilter $visible={filterGenre.length === 0}>
                    {filterGenre.length}
                </S.CounterFilter>
            </S.FilterButton>
        </S.CenterBlockFilter>
    )
}

export { Filter }
