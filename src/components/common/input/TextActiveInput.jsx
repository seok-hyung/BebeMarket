import React, { useState } from 'react';
import * as S from './TextActiveInput.style.js';

function TextActiveInput(props) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isFocusedOut, setIsFocusedOut] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    // setIsValidEmail(isEmailValid(email));
    setIsFocusedOut(true);
    if (email === '') {
      setIsValidEmail(null);
    } else {
      setIsValidEmail(isEmailValid(email));
    }
  };

  return (
    <S.InputBox>
      <S.Label htmlFor="email">이메일</S.Label>
      <S.Input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        isValid={isValidEmail}
      />
      {isValidEmail === false && (
        <S.ErrorMessage email show={isValidEmail === false}>
          *올바르지 않은 이메일 형식입니다.
        </S.ErrorMessage>
      )}
    </S.InputBox>
  );
}

export default TextActiveInput;
