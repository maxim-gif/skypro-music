import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Sidebar.style.js'
const { useContext } = React
import { Personal } from '../Personal/Personal.js'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext.js'

const Sidebar = ({ isLoading }) => {
    const { setSearchEnable, handleGetCompilationsId } = useContext(AuthContext)

    return (
        <S.MainSaidBar>
            <Personal />
            <S.SaidBarBlock>
                <S.SaidBarList>
                    <S.SaidBarItem $isLoading={isLoading}>
                        <Link
                            onClick={() => {
                                setSearchEnable(false)
                                handleGetCompilationsId(1)
                            }}
                            to="/compilations/1"
                        >
                            <S.SaidBarImg
                                src="/img/playlist01.png"
                                alt="day's playlist"
                            />
                        </Link>
                    </S.SaidBarItem>
                    <S.SaidBarItem $isLoading={isLoading}>
                        <Link
                            onClick={() => {
                                setSearchEnable(false)
                                handleGetCompilationsId(2)
                            }}
                            to="/compilations/2"
                        >
                            <S.SaidBarImg
                                src="/img/playlist02.png"
                                alt="day's playlist"
                            />
                        </Link>
                    </S.SaidBarItem>
                    <S.SaidBarItem $isLoading={isLoading}>
                        <Link
                            onClick={() => {
                                setSearchEnable(false)
                                handleGetCompilationsId(3)
                            }}
                            to="/compilations/3"
                        >
                            <S.SaidBarImg
                                src="/img/playlist03.png"
                                alt="day's playlist"
                            />
                        </Link>
                    </S.SaidBarItem>
                </S.SaidBarList>
            </S.SaidBarBlock>
        </S.MainSaidBar>
    )
}
Sidebar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}
export { Sidebar }
