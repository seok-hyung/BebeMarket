import React, { useState, useEffect } from 'react';
import TopUploadNav from '../../components/common/topNav/TopUploadNav';
import * as S from './ProfileEdit.style';
import ProfileImage from '../../assets/images/full-logo.svg';
import EditProfileImage from '../../assets/images/img-button.svg';

export default function ProfileEdit() {
  //인풋 입력 상태 저장
  const [username, setUsername] = useState(''); //사용자 이름 값
  const [accountId, setAccountId] = useState(''); // 계정 ID 값
  const [introduction, setIntroduction] = useState(''); // 소개 값

  // 모든 input 값이 채워졌는지 확인
  const [isInputFilled, setIsInputFilled] = useState(false);

  useEffect(() => {
    if (username && accountId && introduction) {
      setIsInputFilled(true);
    } else {
      setIsInputFilled(false);
    }
  }, [username, accountId, introduction]);

  return (
    <div>
      <TopUploadNav>
        {isInputFilled ? (
          <S.CustomSaveButton>저장</S.CustomSaveButton>
        ) : (
          <S.CustomDisabledSaveButton>저장</S.CustomDisabledSaveButton>
        )}
      </TopUploadNav>
      <S.ProfileEdit>
        <S.ImageContainer>
          <S.ProfileImage src={ProfileImage} />
          <S.EditProfileImage src={EditProfileImage} />
        </S.ImageContainer>
        <S.InputWrapper>
          <p>사용자 이름</p>
          <input
            type="text"
            placeholder="2~10자 이내여야 합니다."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <p>계정 ID</p>
          <input
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <p>소개</p>
          <input
            type=" "
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </S.InputWrapper>
      </S.ProfileEdit>
    </div>
  );
}
