import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: calc(100vh - 108px); // 헤더 + 네브 === 108
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  //z-index: 5;
`;

export const LoadingImage = styled.img`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
`;
export const Div = styled.div`
  margin: 150px 0;
`;
export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin-top: 150px;
`;

export const HomeImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 25px;
`;

export const HomeDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--sub-text-color);
  margin-bottom: 20px;
`;

export const SearchButton = styled.button`
  width: 120px;
  height: 44px;
  background-color: var(--main-color);
  border-radius: 44px;
  color: white;
`;
// tagList
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 16px 0px 16px;
  width: 400px;
  margin-top: 50px;
  margin: 50px auto 0 auto;
  overflow-x: auto;
  white-space: nowrap;
`;

export const TagList = styled.button`
  display: inline-block; // 추가됨
  padding: 10px 15px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;

  ${({ clicked }) =>
    clicked && 'background-color: var(--main-color); color:white;'}
`;
