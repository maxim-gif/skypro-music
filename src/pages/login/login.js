import * as S from './login.style.js'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/user.js'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/authContext.js'
import { useGetRefreshTokenMutation } from '../../services/api.js'

export const Login = () => {
    const navigate = useNavigate()
    const emailPattern = /^[\w.@+-]+$/
    const [dataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(null)
    const {
        setEmail,
        setPassword,
        email,
        password,
        setUser,
        handleGetCompilationsFavorite,
    } = useContext(AuthContext)

    useEffect(() => setError(null), [email, password])

    const [getRefreshToken] = useGetRefreshTokenMutation()

    const handleGetRefreshToken = async () => {
        getRefreshToken({ email: email, password: password })
            .unwrap()
            .then((data) => {
                localStorage.setItem('refreshToken', data.refresh)
                console.log(localStorage.getItem('refreshToken'))
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const enter = async () => {
        if (!email || !password) {
            setError('Укажите почту/пароль')
            return
        }

        if (!emailPattern.test(email)) {
            setError('Неверный формат email')
            return
        }

        try {
            setDataLoading(true)
            const response = await loginUser(email, password)
            if (response.status !== 200) {
                setError('Пользователь с таким email или паролем не найден')
                return
            }
            const data = await response.json()
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data))
            handleGetRefreshToken()
            handleGetCompilationsFavorite()
            navigate('/')
        } catch (error) {
            setError(error.message)
        } finally {
            setDataLoading(false)
        }
    }
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin action="#">
                        <a href="../">
                            <S.ModalLogo>
                                <img src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </a>
                        <S.FirstModalInput
                            type="text"
                            name="login"
                            placeholder="Почта"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                        <S.ModalInput
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                        {error && <S.Error>{error}</S.Error>}
                        <S.ModalButtonEnter
                            onClick={enter}
                            disabled={dataLoading}
                        >
                            {dataLoading ? 'Загрузка...' : 'Войти'}
                        </S.ModalButtonEnter>
                        <S.ModalButtonSignup>
                            <Link to="/registration">Зарегистрироваться</Link>
                        </S.ModalButtonSignup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    )
}
