import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import InputBox from '../../components/common/input/InputBox';
import { emailLoginAPI } from '../../api/user/emailLoginAPI';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [isEmailRed, setIsEmailRed] = useState(false);
  const [isPasswordRed, setIsPasswordRed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // 이메일 유효성 검사
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailValue === '') {
      setEmailValid(false);
    } else if (!emailReg.test(emailValue)) {
      setIsEmailRed(true);
      setEmailValid(false);
      setEmailError('* 올바른 이메일 형식이 아닙니다');
    } else {
      setIsEmailRed(false);
      setEmailValid(true);
      setEmailError('');
    }
  };

  // 비밀번호 유효성 검사
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 6) {
      setPasswordValid(false);
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setIsPasswordRed(true);
    } else {
      setPasswordValid(true);
      setPasswordError('');
      setIsPasswordRed(false);
    }
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [emailValid, passwordValid]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isButtonDisabled) {
      const data = await emailLoginAPI(email, password);

      // 네트워크 관련 오류 처리 추가
      if (data.code === 'ERR_NETWORK') {
        console.error(
          '네트워크 에러가 발생했습니다. 인터넷 연결을 확인해주세요.',
        );
        return;
      }

      if (!data || !data.user || !data.user.token) {
        setIsPasswordRed(true);
        setPasswordError('*이메일 또는 비밀번호가 일치하지 않습니다.');
      } else {
        localStorage.setItem('token', data.user.token);
        navigate('/home');
      }
    }
  };

  return (
    <>
      <S.LoginMain>
        <S.Title>로그인</S.Title>
        <S.LoginForm onSubmit={handleLogin}>
          {/* InputBox 컴포넌트 사용 */}
          <InputBox
            label="이메일"
            id="userEmail"
            type="email"
            onChange={handleEmailChange}
            value={email}
            borderBottomColor={isEmailRed ? 'on' : null}
            show={isEmailRed ? 'on' : null}
            errorMessage={emailError}
          />
          <InputBox
            label="비밀번호"
            id="userPassword"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            borderBottomColor={isPasswordRed ? 'on' : null}
            show={isPasswordRed ? 'on' : null}
            errorMessage={passwordError}
          />
        </S.LoginForm>
        {
          <S.CustomNextButton onClick={handleLogin} active={isButtonDisabled}>
            로그인
          </S.CustomNextButton>
        }

        <S.JoinEmail onClick={() => navigate('/join/signup')}>
          이메일로 회원가입
        </S.JoinEmail>
      </S.LoginMain>
    </>
  );
}

export default Login;
