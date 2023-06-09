import React from 'react';
import * as S from './TopChatNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import verticalIcon from '../../../assets/icon/icon- more-vertical.svg';
export default function TopChatNav() {
  return (
    <S.Nav>
      <S.LeftDiv>
        <S.arrowButton>
          <img src={arrowLeft} alt="뒤로가기" />
        </S.arrowButton>
        <S.P>애월읍 위니브 감귤농장</S.P>
      </S.LeftDiv>

      <S.verticalButton>
        <img src={verticalIcon} alt="더보기" />
      </S.verticalButton>
    </S.Nav>
  );
}
