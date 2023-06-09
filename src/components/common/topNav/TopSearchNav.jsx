import React from 'react';
import * as S from './TopSearchNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
export default function TopSearchNav() {
  return (
    <S.Nav>
      <S.Button>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.Button>
      <S.Input placeholder="계정 검색" />
    </S.Nav>
  );
}
