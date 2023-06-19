import styled from 'styled-components';
import { DisabledSaveButton } from '../../components/common/button/Button.style';
import { SaveButton } from '../../components/common/button/Button.style';

// 저장 버튼
export const CustomDisabledSaveButton = styled(DisabledSaveButton)`
  width: 90px;
  height: 32px;
  font-weight: 500;
  line-height: 19px;
  cursor: default;
`;

// 입력 값이 다 채워진 후 활성화된 버튼
export const CustomSaveButton = styled(SaveButton)`
  width: 90px;
  height: 32px;
  font-weight: 500;
  line-height: 19px;
`;

// 프로필 이미지
export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
`;

export const EditProfileImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

// 이름, 계정, 소개말
export const ProfileEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`;
