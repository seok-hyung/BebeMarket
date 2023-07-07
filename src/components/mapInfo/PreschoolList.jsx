import React, { useState, useEffect } from 'react';
import * as S from './PreschoolList.style';
import locationIcon from '../../assets/icon/icon-map-location.svg';
import prevIcon from '../../assets/icon/icon-pagination-prev.svg';
import nextIcon from '../../assets/icon/icon-pagination-next.svg';

export default function PreschoolList() {
  return (
    <>
      <S.ListArticle>
        <ul>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>
                별빛어린이집 별빛어린이집 별빛어린이집 별빛어린이집 별빛어린이집
              </S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
          <S.ListContent>
            <S.ContentWrapper>
              <S.ContentTitle>별빛어린이집</S.ContentTitle>
              <S.ContentInfo>
                서울특별시 성북구 고려대로17가길 64 안암래미안아파트 관리동 1층
              </S.ContentInfo>
              <S.ContentNumber>02-956-8178</S.ContentNumber>
            </S.ContentWrapper>
            <S.Location src={locationIcon} />
          </S.ListContent>
        </ul>
        <S.Pagination>
          <img
            src={prevIcon}
            style={{
              width: '10px',
              marginRight: '15px',
              cursor: 'pointer',
            }}
          />
          <S.PaginationNumber>1</S.PaginationNumber>
          <S.PaginationNumber>2</S.PaginationNumber>
          <S.PaginationNumber>3</S.PaginationNumber>
          <S.PaginationNumber>4</S.PaginationNumber>
          <S.PaginationNumber>5</S.PaginationNumber>
          <img
            src={nextIcon}
            style={{
              width: '10px',
              marginLeft: '15px',
              cursor: 'pointer',
            }}
          />
        </S.Pagination>
      </S.ListArticle>
    </>
  );
}
