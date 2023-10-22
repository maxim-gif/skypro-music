import React from 'react'
import * as S from './Personal.style.js'
import { AuthContext } from '../../context/authContext.js'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Personal = () => {
    const { user, exit } = useContext(AuthContext)
    return (
        <S.SaidBarPersonal>
            <S.SaidBarPersonalName>{user.username}</S.SaidBarPersonalName>
            <S.SaidBarIcon as={Link} to="/login" onClick={exit}>
                <svg alt="logout">
                    <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                </svg>
            </S.SaidBarIcon>
        </S.SaidBarPersonal>
    )
}
export { Personal }
