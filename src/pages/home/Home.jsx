import React, { useEffect, useState } from 'react';
import * as S from './Home.style';
import Image from '../../assets/images/symbol-logo-gray.svg';

import TopMainNav from '../../components/common/topNav/TopMainNav';
import TabMenu from '../../components/common/tab/TabMenu';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../atoms/Atoms';
import HomePost from '../../components/common/home/HomePost';
import getPostFeedAPI from '../../api/post/getPostFeedAPI';

function Home() {
  const navigate = useNavigate();
  const userToken = useRecoilValue(userTokenState);
  const [followerData, setFollowerData] = useState({});
  useEffect(() => {
    const getFollowerFeedDatas = async () => {
      const followerFeedDatas = await getPostFeedAPI(userToken);
      setFollowerData(followerFeedDatas);
    };
    getFollowerFeedDatas();
  }, []);
  const post = followerData.posts;
  return (
    <>
      {followerData?.length > 0 ? (
        <>
          <TopMainNav />
          <S.HomeWrapper>
            <HomePost post={post} />
          </S.HomeWrapper>
          <TabMenu />
        </>
      ) : (
        <>
          <TopMainNav />
          <S.HomeWrapper>
            <S.HomeDiv>
              <S.HomeImage src={Image} alt="홈 피드 내용이 없을때의 이미지" />
              <S.HomeDescription>
                유저를 검색해 팔로우 해보세요
              </S.HomeDescription>
              <S.SearchButton onClick={() => navigate('/search')}>
                검색하기
              </S.SearchButton>
            </S.HomeDiv>
          </S.HomeWrapper>
          <TabMenu />
        </>
      )}
    </>
  );
}

export default Home;
