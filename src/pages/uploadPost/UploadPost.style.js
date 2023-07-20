import styled, { css } from 'styled-components';
import uploadImg from '../../assets/images/upload-file.svg';
import removeImg from '../../assets/icon/x.svg';
export const Container = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  padding: 20px 16px;
  display: flex;
`;

export const ImgProfile = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 13px;
  border-radius: 70%;
  overflow: hidden;
`;

export const Article = styled.article`
  width: 100%;
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: 'SUITE-Regular';
  font-size: 14px;
  margin-top: 14px;
`;

export const TextLengthWrap = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Label = styled.label`
  background-size: cover;
  background-image: url(${uploadImg});
  width: 50px;
  height: 50px;
  display: inline-block;
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

export const InputImg = styled.input`
  position: relative;
  z-index: -1px;
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  word-break: initial;
  word-wrap: initial;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  height: 22px;
  width: 22px;
  background-image: url(${removeImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

//

export const SingleImgCont = styled.div`
  position: relative;
  width: 304px;
  height: 228px;
  border: 0.5px solid var(--main-disabled-color);
  border-radius: 10px;
  overflow: hidden;
`;

export const SingleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MultipleImgScrollCont = styled.ul`
  display: flex;
  gap: 8px;
  width: calc(100vw - 85px);
  min-width: 304px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
    border-radius: 6px;
  }
`;

export const MultipleImgCont = styled.li`
  position: relative;
`;

export const MultipleImg = styled.img`
  width: 168px;
  height: 126px;
  border: 0.5px solid var(--main-disabled-color);
  border-radius: 10px;
  object-fit: cover;
`;

// tagList
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; //태그들이 화면 가로 크기를 초과하면 자연스럽게 2줄이 되도록 설정
  padding: 20px 16px 0px 16px;
`;

export const TagList = styled.button`
  padding: 10px 15px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;

  ${({ clicked }) =>
    clicked && 'background-color: var(--main-color); color:white;'}
  @media screen and (max-width: 497px) {
    &:nth-child(5) {
      margin-right: 0;
    }
  }
`;
