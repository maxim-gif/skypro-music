import * as S from './login.style.js'
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user.js";
import { useContext, useState, useEffect  } from "react";
import { AuthContext } from '../../context/authContext.js';


export const Login = () => {
  

  const [error, setError] = useState(null);
  const emailPattern = /^[\w.@+-]+$/;


  const { setEmail, setPassword, email, password, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, [email, password]);

  const enter = () => {

    if (!email || !password) {
      setError("Укажите почту/пароль")
      return; 
    }

    if (!emailPattern.test(email)) {
      setError("Неверный формат email");  
      return; 
    }

    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error('Unauthorized');
        }
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/'); 
      })
      .catch((error) => {
        console.log(error);
      });
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
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {error && <S.Error>{error}</S.Error>}
              <S.ModalButtonEnter  onClick={enter}>
                <Link>Войти</Link>
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

