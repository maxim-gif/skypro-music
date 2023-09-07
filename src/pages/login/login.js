import * as S from './login.style.js'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Login = ({login}) => {
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
                className="login"
                type="text"
                name="login"
                placeholder="Почта"
              />
              <S.ModalInput
                className="password"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalButtonEnter>
                <Link to="/" onClick={login}>Войти</Link>
              </S.ModalButtonEnter>
              <S.ModalButtonSignup>
              <Link to="/registration">Зарегистрироваться</Link>
              </S.ModalButtonSignup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.ContainerEnter>
      </S.Wrapper>
    );
  }

Login.propTypes = {
  login: PropTypes.func.isRequired,
};