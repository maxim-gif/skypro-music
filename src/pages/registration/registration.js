import * as S from './registration.style.js'
import { useNavigate   } from "react-router-dom";
import { useEffect, useState, useContext  } from "react";
import { createUser } from "../../api/user.js";
import { AuthContext } from '../../context/authContext.js';

export const Registration = () => {

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

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
    if (password.length < 8) {
      setError("Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов")
      return; 
    }
    
    if (password === repeatPassword) {
      setDataLoading(true);
      createUser(email, password).then(async (response) => {
        if(response.status === 201 ){
          navigate('/login');
          setDataLoading(false);
        } else if(response.status === 400) {
          const data = await response.json();
          setError(data.email[0]);
          setDataLoading(false);
        }
    });
    } 

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
            <S.ModalButtonRegistration onClick={handleRegister} disabled={dataLoading}>
              {dataLoading ? 'Загрузка...' : 'Зарегестрироваться'}
            </S.ModalButtonRegistration>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerRegistration>
    </S.Wrapper>
    )
}