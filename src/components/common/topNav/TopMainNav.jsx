import React from 'react';
import * as S from './TopMainNav.style.js';
import searchIcon from '../../../assets/icon/icon-search.svg';

export default function TopMainNav() {
  return (
    <S.Nav>
      <S.Title>감귤마켓 피드</S.Title>
      <S.Button>
        <img src={searchIcon} alt="검색 아이콘" />
      </S.Button>
    </S.Nav>
  );
}
