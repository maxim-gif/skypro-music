import React from 'react';
const { useState } = React;
function MainNav() {
  const [status, setStatus] = useState(true);
  const handleClick = () => setStatus(!status);
    return(
      <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={handleClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu" style={{ display: status ? 'block' : 'none' }}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">Главное</a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">Мой плейлист</a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">Войти</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNav;