import React from 'react';
const { useState } = React;
import * as S from './MainNav.style.js'
const MainNav = () => {
  const [status, setStatus] = useState(true);
  const handleClick = () => setStatus(!status);
    return(
      <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu $status={status}>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink href="#">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="../signin.html">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  )
}

export  {MainNav};