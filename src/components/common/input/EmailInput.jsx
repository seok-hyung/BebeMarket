import React, { useEffect, useState } from 'react';
import * as S from './EmailInput.style';

function EmailInput({ onValidation, placeholder }) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailBlur = () => {
    if (email === '') {
      setIsValidEmail(null);
    } else {
      setIsValidEmail(validateEmail(email));
    }
  };
  useEffect(() => {
    const isValidEmail = validateEmail(email);
    onValidation(isValidEmail);
  }, [email, onValidation]);

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
        placeholder={placeholder || ''}
      />
      {isValidEmail === false && (
        <S.ErrorMessage valid={isValidEmail}>
          *올바르지 않은 이메일 형식입니다.
        </S.ErrorMessage>
      )}
    </S.InputBox>
  );
}

export default EmailInput;
