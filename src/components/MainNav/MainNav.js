import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const { useState } = React;
import * as S from './MainNav.style.js'

const MainNav = ({logout}) => {
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
          <S.MenuLink as={Link} to="/">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
          <S.MenuLink as={Link} to="/favorites">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
          <S.MenuLink as={Link} to="/login" onClick={logout}>Выйти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  )
}
MainNav.propTypes = {
  logout: PropTypes.func.isRequired,
};
export  {MainNav};