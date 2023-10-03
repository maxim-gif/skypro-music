import * as S from './registration.style.js'
import { Link, useNavigate   } from "react-router-dom";
import { useEffect, useState, useContext  } from "react";
import { createUser } from "../../api/user.js";
import { AuthContext } from '../../context/authContext.js';

export const Registration = () => {

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { setEmail, setPassword, email, password } = useContext(AuthContext);


  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword]);

  const handleRegister = async () => {

    const emailPattern = /^[\w.@+-]+$/;
  
    if (!email || !password) {
      setError("Укажите почту/пароль")
      return; 
    }
    if (!emailPattern.test(email)) {
      setError("Неверный формат email");  
      return; 
    }
    if (!(password === repeatPassword)) {
      setError("Пароли не совпадают");
      return; 
    }
    if (password === repeatPassword) {
      createUser(email, password).then((response) => {response.status === 201 ? navigate('/login'):setError("Неизвестная ошибка регистрации");}); 
    } 
  
    // console.log(email);
    // console.log(password);
    // console.log(repeatPassword);
  };

    return (
    <S.Wrapper>
      <S.ContainerRegistration>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
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
            <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
            />
            {error && <S.Error>{error}</S.Error>}
            <S.ModalButtonRegistration onClick={handleRegister}>
              <Link>Зарегистрироваться</Link>
            </S.ModalButtonRegistration>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerRegistration>
    </S.Wrapper>
    )
}