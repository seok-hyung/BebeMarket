import React, { useState } from 'react';
import * as S from './TopSearchNav.style.js';
import arrowLeft from '../../../assets/icon/icon-arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import InputBox from '../input/InputBox.jsx';

export default function TopSearchNav({ onSearchInputChange }) {
  const navigate = useNavigate();
  const handleSearchInput = (e) => {
    if (onSearchInputChange) {
      onSearchInputChange(e.target.value);
    }
  };

  return (
    <S.Nav>
      <S.Button onClick={() => navigate(-1)}>
        <img src={arrowLeft} alt="뒤로가기" />
      </S.Button>
      <S.Input
        type="text"
        onChange={handleSearchInput}
        placeholder="계정 검색"
      />
    </S.Nav>
  );
}
