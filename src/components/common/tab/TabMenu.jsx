import React from 'react';
import * as S from './TabMenu.style.js';
import homeIcon from '../../../assets/icon/icon-home.svg';
import chatIcon from '../../../assets/icon/icon-message-circle-1.svg';
import editIcon from '../../../assets/icon/icon-edit.svg';
import userIcon from '../../../assets/icon/icon-user.svg';
export default function TabMenu() {
  return (
    <S.Nav>
      <S.Ul>
        <li>
          <S.Img src={homeIcon} />
          <S.P>홈</S.P>
        </li>
        <li>
          <S.Img src={chatIcon} />
          <S.P>채팅</S.P>
        </li>
        <li>
          <S.Img src={editIcon} />
          <S.P>게시물 작성</S.P>
        </li>
        <li>
          <S.Img src={userIcon} />
          <S.P>프로필</S.P>
        </li>
      </S.Ul>
    </S.Nav>
  );
}
