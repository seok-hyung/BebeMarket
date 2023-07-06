import styled from 'styled-components';

export const ListArticle = styled.article`
  width: 40%;
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
  margin-right: 20px;
`;

export const ContentTitle = styled.h2`
  font-weight: 700;
  font-size: 17px;
  color: var(--main-color);
`;

export const ContentInfo = styled.p`
  font-size: 15px;
  color: var(--sub-text-color);
`;
export const ContentNumber = styled.p`
  font-size: 15px;
  color: var(--sub-text-color);
`;

export const Location = styled.img`
  width: 28px;
  object-fit: cover;
  cursor: pointer;
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
`;

export const PaginationNumber = styled.li`
  border-radius: 6px;
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
`;
