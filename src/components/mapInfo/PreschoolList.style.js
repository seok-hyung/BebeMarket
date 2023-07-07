import styled from 'styled-components';

export const ListArticle = styled.article`
  width: 40%;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const ListContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const ContentTitle = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 17px;
  color: var(--main-color);
`;

export const ContentInfo = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  color: var(--sub-text-color);
`;
export const ContentNumber = styled.p`
  font-size: 15px;
  color: var(--sub-text-color);
`;

export const Location = styled.img`
  width: 32px;
  object-fit: cover;
  cursor: pointer;
  margin-left: 50px;
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 35px;
`;

export const PaginationNumber = styled.li`
  border-radius: 5px;
  padding: 5px 8px;
  cursor: pointer;
`;
