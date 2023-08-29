import * as S from './registration.style.js'

export const Registration = () => {
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
              className="login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalButtonRegistration>
              <a href="../index.html">Зарегистрироваться</a>
            </S.ModalButtonRegistration>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerRegistration>
    </S.Wrapper>
    )
}