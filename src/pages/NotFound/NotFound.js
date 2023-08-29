import * as S from './NotFound.style.js'  
export const NotFound = () => {
    return (
      <S.Wrapper>
        <S.Content>
            <S.Title>404</S.Title>
            <S.SubTitleBox>
              <S.SubTitle>Страница не найдена</S.SubTitle>
              <S.SubTitleImg src="img/crying.png" alt=""></S.SubTitleImg>
            </S.SubTitleBox>
            <S.Description>Возможно, она была удалена или перенесена на другой адрес</S.Description>
            <S.NotFoundButton>Вернуться на главную</S.NotFoundButton>
        </S.Content>
      </S.Wrapper>
    );
  }