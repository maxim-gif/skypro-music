import React from 'react';
import * as S from './Personal.style.js'
const Personal = () => {
  return(
    <S.SaidBarPersonal>
      <S.SaidBarPersonalName>Sergey.Ivanov</S.SaidBarPersonalName>
      <S.SaidBarIcon>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SaidBarIcon>
    </S.SaidBarPersonal>
) 
}
export  {Personal};