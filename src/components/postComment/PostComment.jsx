import React, { useState, useEffect } from 'react';
import * as S from './PostComment.style';
import moreIcon from '../../assets/icon/icon- more-vertical.svg';
import CommentModal from '../modal/CommentModal/CommentModal';
import { useRecoilValue } from 'recoil';
import { accountNameState } from '../../atoms/Atoms';
export default function PostComment({ comment, postId }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isMyComment, setIsMyComment] = useState(false);
  const showModal = () => {
    setisModalOpen(true);
  };
  const accountname = useRecoilValue(accountNameState);
  useEffect(() => {
    if (comment.author.accountname === accountname) {
      setIsMyComment(true);
    }
  }, [comment.author.accountname, accountname]);
  //const commentId = comment.id 코멘트고유의id
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <div>
            <S.UserImage src={comment.author.image} />
            <S.Title>{comment.author.username}</S.Title>
            <S.WrittenTime>{comment.createdAt}</S.WrittenTime>
          </div>
          <S.MoreButton onClick={showModal}>
            <img src={moreIcon} />
          </S.MoreButton>
        </S.Container>
        <S.CommentContent>{comment.content}</S.CommentContent>
      </S.Wrapper>
      {isModalOpen ? (
        <CommentModal
          setisModalOpen={setisModalOpen}
          isMyComment={isMyComment}
          commentId={comment.id}
          postId={postId}
        />
      ) : null}
    </>
  );
}
