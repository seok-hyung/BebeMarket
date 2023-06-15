import React from 'react';
import TopUploadNav from '../../components/common/topNav/TopUploadNav';
import * as S from './ProfileEdit.style';
import ProfileImage from '../../assets/images/full-logo.svg';

export default function ProfileEdit() {
  return (
    <div>
      <TopUploadNav>
        <S.CustomDisabledSaveButton>저장</S.CustomDisabledSaveButton>
      </TopUploadNav>
      <S.ProfileEdit>
        <S.ProfileImage src={ProfileImage} />
        <S.InputWrapper>
          <p>사용자 이름</p>
          <input type="text" placeholder="2~10자 이내여야 합니다." />
        </S.InputWrapper>
        <S.InputWrapper>
          <p>계정 ID</p>
          <input
            type="text"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <p>소개</p>
          <input
            type=" "
            placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          />
        </S.InputWrapper>
      </S.ProfileEdit>
    </div>
  );
}
