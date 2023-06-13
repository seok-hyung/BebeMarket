import React, { useEffect, useState } from 'react';
import EmailInput from '../../components/common/input/EmailInput';
import PasswordInput from '../../components/common/input/PasswordInput';
import * as S from './SignUp.style';

function SignUp(props) {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const emailValidationCallback = (isValid) => {
    setIsValidEmail(isValid);
  };

  const passwordValidationCallback = (isValid) => {
    setIsValidPassword(isValid);
  };

  useEffect(() => {
    setIsButtonActive(isValidEmail && isValidPassword === true);
  }, [isValidEmail, isValidPassword]);

  return (
    <>
      <S.JoinWrapper>
        <S.JoinTitle>이메일로 회원가입 </S.JoinTitle>
        <S.JoinForm>
          <EmailInput
            placeholder="이메일 주소를 입력해주세요"
            onValidation={emailValidationCallback}
          />
          <PasswordInput
            placeholder="비밀번호를 설정해주세요"
            onValidation={passwordValidationCallback}
          />
        </S.JoinForm>
        {
          <S.CustomNextButton disabled={isButtonActive}>
            다음
          </S.CustomNextButton>
        }
      </S.JoinWrapper>
    </>
  );
}

export default SignUp;
