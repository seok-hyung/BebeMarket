import React from 'react';
import * as S from './Login.style';
import { DisabledNextButton } from '../button/button';

function Login() {
  return (
    <>
      <S.LoginMain>
        <S.Title>로그인</S.Title>
        <S.LoginForm>
          <S.Container>
            <S.EmailLabel htmlFor="userEmail">이메일</S.EmailLabel>
            <S.EmailInput id="userEmail"></S.EmailInput>
          </S.Container>

          <S.Container>
            <S.PasswordLabel htmlFor="userPassword">비밀번호</S.PasswordLabel>
            <S.PasswordInput id="userPassword"></S.PasswordInput>
          </S.Container>
          <DisabledNextButton></DisabledNextButton>
          <S.JoinEmail>이메일로 회원가입</S.JoinEmail>
        </S.LoginForm>
      </S.LoginMain>
    </>
  );
}

export default Login;
