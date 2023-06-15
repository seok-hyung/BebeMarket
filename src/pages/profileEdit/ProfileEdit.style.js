import styled from 'styled-components';
import { DisabledSaveButton } from '../../components/common/button/Button.style';

export const CustomDisabledSaveButton = styled(DisabledSaveButton)`
  width: 90px;
  height: 32px;
  background-color: var(--main-disabled-color);
  color: #fff;
  font-weight: 500;
  line-height: 19px;
`;

export const ProfileImage = styled.img`
  margin: 30px 0;
  width: 110px;
  height: 110px;
`;

export const ProfileEdit = styled.div`
  text-align: center;

  p {
    color: var(--sub-text-color);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }

  input {
    font-size: 14px;
    color: #000;
    border: none;
    padding-bottom: 8px;
    padding-top: 10px;

    &::placeholder {
      color: #dbdbdb;
    }
  }
`;

export const InputWrapper = styled.div`
  margin: auto;
  text-align: left;
  width: 322px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 15px;

  input:focus {
    outline: none;
  }
`;
