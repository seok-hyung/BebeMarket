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
      <S.CommentContent>
        안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기
        지쳤어요 땡뻘땡뻘...어쩌구 저쩌구 눈이 침침해지네요 엉엉
      </S.CommentContent>
    </div>
  );
}
