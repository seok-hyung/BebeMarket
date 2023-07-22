import React, { useState } from 'react';
import locationIcon from '../../assets/icon/icon-map-location.svg';
import SearchIcon from '../../assets/icon/icon-search.svg';

import * as S from './PreschoolList.style';
import { useRecoilValue } from 'recoil';
import {
  filteredPreschoolListState,
  mapSearchValueState,
} from '../../atoms/Atoms';

function PreschoolList({ list, onLocationChange, handleSearchChange }) {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;

  // 위치 아이콘 클릭 시 실행되는 함수
  const handleLocationClick = (STCODE, LA, LO) => {
    if (LA && LO) {
      // 모바일 화면에서 지도 레벨을 항상 1로 설정
      if (window.innerWidth <= 768) {
        onLocationChange(STCODE, 1); // 레벨 1 추가
      } else {
        onLocationChange(STCODE);
      }
    } else {
      alert('정보가 없습니다.');
    }
  };

  // 페이지 클릭 시 실행되는 함수
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    handleSearchChange(inputValue);
  };

  // 필터링된 유치원 목록을 가져옴
  const filteredLists = useRecoilValue(filteredPreschoolListState);

  // 표시할 유치원 목록을 계산
  const displayedPreschools = filteredLists.slice(
    currentPage * perPage,
    currentPage * perPage + perPage,
  );

  const pageCount = Math.ceil(filteredLists.length / perPage);

  const [inputValue, setInputValue] = useState('');

  // 입력 값 변경 시 실행되는 함수
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 검색 버튼 클릭 시 실행되는 함수
  const handleSubmit = () => {
    handleSearchChange(inputValue);
    setCurrentPage(0); // 페이지네이션을 1페이지로 되돌린다
  };

  return (
    <>
      <S.ListContainer>
        <h2 className="a11y-hidden">STORE</h2>
        <S.SearchContainer>
          <S.LogoImage />
          <form onSubmit={(e) => e.preventDefault()}>
            <S.SearchInputWrapper>
              <S.SearchInput
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
              <S.SearchButton type="button" onClick={handleSubmit}>
                <S.SearchSubmitIcon src={SearchIcon} />
              </S.SearchButton>
            </S.SearchInputWrapper>
          </form>
        </S.SearchContainer>
        {displayedPreschools.map(
          ({ STCODE, CRNAME, CRADDR, CRTELNO, LA, LO }) => (
            <div
              className={`preschool-list-item data-card`}
              data-id={STCODE}
              key={STCODE}
            >
              <S.ListContent>
                <S.ContentWrapper>
                  <S.ContentTitle className="name">{CRNAME}</S.ContentTitle>
                  <S.ContentInfo className="address">{CRADDR}</S.ContentInfo>
                  <S.ContentNumber className="en">
                    <S.ContentNumberBold className="bold">
                      TEL
                    </S.ContentNumberBold>
                    {CRTELNO}
                  </S.ContentNumber>
                </S.ContentWrapper>

                <S.Location
                  src={locationIcon}
                  onClick={() => handleLocationClick(STCODE, LA, LO)}
                />
              </S.ListContent>
            </div>
          ),
        )}

        <S.StyledReactPaginate
          forcePage={currentPage}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          previousLabel={'<'}
          nextLabel={'>'}
          onPageChange={(data) => handlePageClick(data)}
          containerClassName={'pagination no-break'}
          activeClassName={'active'}
        />
      </S.ListContainer>
    </>
  );
}

export default React.memo(PreschoolList);
