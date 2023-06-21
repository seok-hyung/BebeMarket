import React from 'react';
import defaultProfileImage from '../../../assets/images/basic-profile.svg';
import * as S from './UserSearch.style';

function UserSearch({ accountname, username, profileImage, searchValue }) {
  const highlightText = (text, keyword) => {
    if (!keyword) {
      return <>{text}</>;
    }

    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === keyword.toLowerCase() ? (
            <S.Span key={i}>{part}</S.Span>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  return (
    <S.UserBox>
      <S.ProfileImage
        src={profileImage ? profileImage : defaultProfileImage}
        alt="프로필 이미지"
      />
      <S.RightBox>
        <S.UserTitle>{highlightText(accountname, searchValue)}</S.UserTitle>
        <S.UserAddress>
          @{highlightText(username.replace(/\s+/g, '_'), searchValue)}
        </S.UserAddress>
      </S.RightBox>
    </S.UserBox>
  );
}

export default UserSearch;
