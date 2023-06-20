import React from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ButtonDiv,
  CancelButton,
  DeleteButton,
} from '../styled';
import { deleteCommentAPI } from '../../../api/comment/deleteCommentAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../../atoms/Atoms';

export default function CommentAlert({
  setIsAlertOpen,
  content,
  commentId,
  postId,
}) {
  const token = useRecoilValue(userTokenState);
  const deleteComment = () => {
    console.log('삭제');
    deleteCommentAPI(postId, token, commentId).then((data) =>
      console.log(data),
    );
  };
  return (
    <AlertContainer>
      <DeleteConfirm>{content}하시겠어요?</DeleteConfirm>
      <ButtonDiv>
        <CancelButton
          onClick={() => {
            setIsAlertOpen(false);
          }}
        >
          취소
        </CancelButton>
        <DeleteButton onClick={deleteComment}>{content}</DeleteButton>
      </ButtonDiv>
    </AlertContainer>
  );
}
//수정해야함
//<DeleteConfirm>{content} 하시겠어요?</DeleteConfirm>
//<DeleteButton>{content}</DeleteButton>
