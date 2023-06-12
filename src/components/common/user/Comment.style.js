import styled from 'styled-components';

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  border-top: 0.5px solid #d9d9d9;
  padding: 13px 16px;
`;

export const CommentProfile = styled.img`
  width: 36px;
  margin: 0 18px;
`;

export const CommentInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--main-disabled-color);
  }
`;

export const PostButton = styled.button`
  color: var(--main-disabled-color);
  width: 40px;
`;
