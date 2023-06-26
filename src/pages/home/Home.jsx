import React, { useEffect, useState } from 'react';
import * as S from './Home.style';
import Image from '../../assets/images/symbol-logo-gray.svg';
import loadingGif from '../../assets/images/loading.gif';

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
  const [followerData, setFollowerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPostFeedAPI(userToken).then((data) => {
      setFollowerData(data.posts);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <TopMainNav />
      <S.HomeWrapper>
        {isLoading ? (
          // 로딩 중일 때 표시할 내용을 조건부 렌더링합니다.
          <S.LoadingImage src={loadingGif} alt="로딩중일 때 이미지" />
        ) : followerData?.length > 0 ? (
          followerData.map((post) => (
            <HomePost key={post.id} post={post} postId={post.id} />
          ))
        ) : (
          <>
            <S.HomeDiv>
              <S.HomeImage src={Image} alt="홈 피드 내용이 없을 때의 이미지" />
              <S.HomeDescription>
                유저를 검색해 팔로우 해보세요
              </S.HomeDescription>
              <S.SearchButton onClick={() => navigate('/search')}>
                검색하기
              </S.SearchButton>
            </S.HomeDiv>
          </>
        )}
      </S.HomeWrapper>
      <TabMenu />
    </>
  );
}

export default Home;
