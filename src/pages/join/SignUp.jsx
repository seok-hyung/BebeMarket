import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EmailInput from '../../components/common/input/EmailInput';
import PasswordInput from '../../components/common/input/PasswordInput';
import { NextButton } from '../../components/common/button/Button.style';

const JoinWrapper = styled.div`
  width: 320px;
  margin: 50px auto;
  /* box-shadow: inset 0 0 0 5px red; */
`;
const JoinForm = styled.form``;

const JoinTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 40px;
  text-align: center;
`;

const CustomNextButton = styled(NextButton)`
  margin-top: 30px;
  background-color: ${(props) =>
    props.disabled === true ? '#55BDB3' : '#D9D9D9'};
`;

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
      <JoinWrapper>
        <JoinTitle>이메일로 회원가입 </JoinTitle>
        <EmailInput
          placeholder="이메일 주소를 입력해주세요"
          onValidation={emailValidationCallback}
        />
        <PasswordInput
          placeholder="비밀번호를 설정해주세요"
          onValidation={passwordValidationCallback}
        />
        {<CustomNextButton disabled={isButtonActive}>다음</CustomNextButton>}
      </JoinWrapper>
    </>
  );
}

export default SignUp;
