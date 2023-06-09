import React from 'react';
import * as S from './TopBasicNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import verticalIcon from '../../../assets/icon/icon- more-vertical.svg';
export default function TopBasicNav() {
  return (
    <S.Nav>
      <S.arrowButton>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.arrowButton>
      <S.verticalButton>
        <img src={verticalIcon} alt="더보기" />
      </S.verticalButton>
    </S.Nav>
  );
}
