import React from 'react';
import * as S from './PostComment.style';
import moreIcon from '../../assets/icon/icon- more-vertical.svg';
export default function PostComment() {
  return (
    <div>
      <S.Container>
        <div>
          <S.UserImage />
          <S.Title>서귀포시 무슨농장</S.Title>
          <S.WrittenTime>· 5분 전</S.WrittenTime>
        </div>
        <S.MoreButton>
          <img src={moreIcon} />
        </S.MoreButton>
      </S.Container>
      <S.CommentContent>요것도 테스트!</S.CommentContent>
      <div>이건 테스트</div>
    </div>
  );
}
