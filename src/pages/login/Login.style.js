import styled from 'styled-components';

export const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: var(--main-text-color);
  margin-bottom: 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 322px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const EmailLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--sub-text-color);
`;

export const EmailInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0 8px;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-bottom-color: var(--main-color);
  }
`;

export const PasswordLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--sub-text-color);
`;

export const PasswordInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0 8px;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 30px;

  &:focus {
    outline: none;
    border-bottom-color: var(--main-color);
  }
`;

export const JoinEmail = styled.a`
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  color: var(--sub-text-color);
  margin-top: 20px;
  cursor: pointer;
`;
