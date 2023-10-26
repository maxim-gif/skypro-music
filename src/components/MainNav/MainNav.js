import React from 'react'
import { Link } from 'react-router-dom'
const { useState, useContext } = React
import * as S from './MainNav.style.js'
import { AuthContext } from '../../context/authContext.js'

const MainNav = () => {
    // const {  refetch } = useGetCompilationsFavoriteQuery();

    const { exit, setSearchEnable, handleGetCompilationsFavorite } =
        useContext(AuthContext)
    const [status, setStatus] = useState(true)
    const handleClick = () => setStatus(!status)

    return (
        <S.MainNav>
            <S.NavLogo>
                <S.LogoLink
                    as={Link}
                    onClick={() => {
                        setSearchEnable(true)
                    }}
                    to="/"
                >
                    <S.LogoImg src="/img/logo.png" alt="logo" />
                </S.LogoLink>
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
