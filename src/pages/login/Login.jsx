import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';

import InputBox from '../../components/common/input/InputBox';
import { emailLoginAPI } from '../../api/user/emailLoginAPI';
import {
  userTokenState,
  isLoginState,
  accountNameState,
} from '../../atoms/Atoms';
import { useSetRecoilState } from 'recoil';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const setUserToken = useSetRecoilState(userTokenState); // 사용자 토큰 상태 설정
  const setIsLoginState = useSetRecoilState(isLoginState); // 로그인 상태 설정
  const setAccountNameData = useSetRecoilState(accountNameState); // 계정 이름 상태 설정

  // 입력 변경시 이메일 유효성 검사
  const handleEmailChange = useCallback((e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setEmailError(
      emailValue === '' || emailReg.test(emailValue)
        ? ''
        : '* 올바른 이메일 형식이 아닙니다',
    );
  }, []);

  // 입력 변경시 비밀번호 유효성 검사
  const handlePasswordChange = useCallback((e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(
      passwordValue.length < 6 ? '비밀번호는 6자 이상이어야 합니다.' : '',
    );
  }, []);

  // 에러와 입력값을 통해 버튼 활성화 여부 결정
  useEffect(() => {
    if (
      emailError === '' &&
      passwordError === '' &&
      email !== '' &&
      password !== ''
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [emailError, passwordError, email, password]);

  // 로그인 처리
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();

      if (!isButtonDisabled) {
        const data = await emailLoginAPI(email, password);

        if (!data || !data.user || !data.user.token) {
          setPasswordError('*이메일 또는 비밀번호가 일치하지 않습니다.');
        } else {
          setIsLoginState(true);
          setUserToken(data.user.token);
          setAccountNameData(data.user.accountname);
          navigate('/home');
        }
      }
    },
    [
      isButtonDisabled,
      email,
      password,
      navigate,
      setIsLoginState,
      setUserToken,
      setAccountNameData,
    ],
  );

  return (
    <>
      <S.LoginMain>
        <S.Title>로그인</S.Title>
        <S.LoginForm onSubmit={handleLogin}>
          <InputBox
            label="이메일"
            id="userEmail"
            type="email"
            onChange={handleEmailChange}
            value={email}
            borderBottomColor={emailError ? 'on' : null}
            show={emailError ? 'on' : null}
            errorMessage={emailError}
          />
          <InputBox
            label="비밀번호"
            id="userPassword"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            borderBottomColor={passwordError ? 'on' : null}
            show={passwordError ? 'on' : null}
            errorMessage={passwordError}
          />
        </S.LoginForm>
        <S.CustomNextButton onClick={handleLogin} active={isButtonDisabled}>
          로그인
        </S.CustomNextButton>
        <S.JoinEmail onClick={() => navigate('/join/signup')}>
          이메일로 회원가입
        </S.JoinEmail>
      </S.LoginMain>
    </>
  );
}

export default React.memo(Login);
