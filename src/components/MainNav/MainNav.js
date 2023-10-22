import React from 'react'
import { Link } from 'react-router-dom'
const { useState, useContext } = React
import * as S from './MainNav.style.js'
import { AuthContext } from '../../context/authContext.js'
import { useGetAccessTokenMutation } from '../../services/api.js'

const MainNav = () => {
    const [getAccessToken] = useGetAccessTokenMutation()
    // const {  refetch } = useGetCompilationsFavoriteQuery();

    const { exit, setSearchEnable } = useContext(AuthContext)
    const [status, setStatus] = useState(true)
    const handleClick = () => setStatus(!status)

    const handleGetCompilationsFavorite = () => {
        console.log(localStorage.getItem('refreshToken'))
        getAccessToken({ refresh: localStorage.getItem('refreshToken') })
            .unwrap()
            .then((result) => {
                console.log(`Bearer ${result.access}`)
                fetch(
                    'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${result.access}`,
                        },
                    },
                )
                    .then((response) => response.json())
                    .then((json) => console.log(json))
                // refetch({ headers: { Authorization: `Bearer ${result.access}` } })
                //     .then((result) => {
                //         console.log(result)
                //     })
                //     .catch((error) => {
                //         console.error('An error occurred:', error)
                //     })
            })
            .catch((error) => {
                console.error('An error occurred:', error)
            })
    }

    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoImg src="/img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger onClick={handleClick}>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
                <S.BurgerLine></S.BurgerLine>
            </S.NavBurger>
            <S.NavMenu $status={status}>
                <S.MenuList>
                    <S.MenuItem>
                        <S.MenuLink
                            as={Link}
                            onClick={() => {
                                setSearchEnable(true)
                            }}
                            to="/"
                        >
                            Главное
                        </S.MenuLink>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.MenuLink
                            as={Link}
                            onClick={() => {
                                setSearchEnable(false)
                                handleGetCompilationsFavorite()
                            }}
                            to="/compilations/0"
                        >
                            Мой плейлист
                        </S.MenuLink>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.MenuLink as={Link} to="/login" onClick={exit}>
                            Выйти
                        </S.MenuLink>
                    </S.MenuItem>
                </S.MenuList>
            </S.NavMenu>
        </S.MainNav>
    )
}

export { MainNav }
