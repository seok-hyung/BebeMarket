import React, { useEffect, useState } from 'react';
import * as S from './PasswordInput.style';

const PasswordInput = ({ onValidation, placeholder }) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordBlur = () => {
    if (password === '') {
      setIsValidPassword(null);
    } else {
      setIsValidPassword(validatePassword(password));
    }
  };

  useEffect(() => {
    const isValidPassword = validatePassword(password);
    onValidation(isValidPassword);
  }, [password, onValidation]);

  return (
    <S.InputBox>
      <S.Label>비밀번호</S.Label>
      <S.Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        isValid={isValidPassword}
        placeholder={placeholder || ''}
      />
      {isValidPassword === false && (
        <S.ErrorMessage valid={isValidPassword}>
          비밀번호는 최소 6자 이상이어야 합니다.
        </S.ErrorMessage>
      )}
    </S.InputBox>
  );
};

export default PasswordInput;
