import React from 'react';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';

import * as S from './TopUploadNav.style.js';
export default function TopUploadNav() {
  return (
    <S.Nav>
      <S.ArrowButton>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.ArrowButton>

      <S.UploadButton type="button">업로드</S.UploadButton>
    </S.Nav>
  );
}
