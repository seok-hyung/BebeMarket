import React, { useEffect, useState, useCallback } from 'react';
import * as S from './Home.style';
import Image from '../../assets/images/symbol-logo-gray.svg';
import loadingGif from '../../assets/images/loading.gif';

import TopMainNav from '../../components/common/topNav/TopMainNav';
import TabMenu from '../../components/common/tab/TabMenu';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userTokenState, accountNameState } from '../../atoms/Atoms';
import HomePost from '../../components/common/home/HomePost';
import getPostFeedAPI from '../../api/post/getPostFeedAPI';
import getAllFeedAPI from '../../api/post/getAllFeedAPI';

function Home() {
  const navigate = useNavigate();
  const userToken = useRecoilValue(userTokenState);
  const userAccountname = useRecoilValue(accountNameState);
  const [feedData, setFeedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [selectedTag, setSelectedTag] = useState('팔로잉');

  const handleClickTag = async (tag) => {
    setSelectedTag(tag);
    if (tag === '팔로잉') {
      loadFollowingPosts();
    } else {
      const data = await getAllFeedAPI(userToken);
      const allFeedArr = data.posts;

      const regex = new RegExp(`\\\\tag:.*${tag}.*(?=,|\\\\|$)`);
      const TaggeddArr = allFeedArr.filter((item) =>
        item.author.accountname === userAccountname
          ? null
          : item.content.match(regex),
      );
      console.log(TaggeddArr);
      setFeedData(TaggeddArr);
    }
  };
  const Tags = [
    '팔로잉',
    '육아',
    '일상',
    '요리',
    '꿀팁',
    '음식점',
    '꿀템추천',
    '키즈카페',
  ];
  const loadFollowingPosts = useCallback(async () => {
    setIsLoading(true);
    const data = await getPostFeedAPI(userToken, 0, Infinity); // 모든 글을 불러오기 위해 skip을 설정하지 않고, Infinity를 넘겨줍니다.
    if (data) {
      setFeedData(data);
    }
    setIsLoading(false);
  }, [userToken]);

  const loadMorePosts = useCallback(async () => {
    setIsLoading(true);
    const data = await getPostFeedAPI(userToken, skip, 4);
    if (data) {
      setFeedData((prevState) => [...prevState, ...data]);
      if (data.length < 4) {
        setHasMore(false);
      } else {
        setSkip((prevState) => prevState + 4);
      }
    }
    setIsLoading(false);
  }, [skip, userToken]);

  useEffect(() => {
    loadMorePosts();
  }, []);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      if (!isLoading && hasMore) {
        loadMorePosts();
      }
    }
  }, [isLoading, hasMore, loadMorePosts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <TopMainNav />
      <S.TagWrapper>
        {Tags.map((tag, index) => (
          <S.TagList
            type="button"
            key={index}
            value={tag}
            onClick={() => handleClickTag(tag)}
            clicked={tag === selectedTag}
          >
            # {tag}
          </S.TagList>
        ))}
      </S.TagWrapper>
      <S.HomeWrapper>
        {isLoading ? (
          <S.LoadingImage src={loadingGif} alt="로딩중일 때 이미지" />
        ) : feedData?.length > 0 ? (
          feedData.map((post) => (
            <HomePost key={post.id} post={post} postId={post.id} />
          ))
        ) : (
          <S.Div>
            <S.HomeDiv>
              <S.HomeImage src={Image} alt="홈 피드 내용이 없을 때의 이미지" />
              <S.HomeDescription>
                유저를 검색해 팔로우 해보세요
              </S.HomeDescription>
              <S.SearchButton onClick={() => navigate('/search')}>
                검색하기
              </S.SearchButton>
            </S.HomeDiv>
          </S.Div>
        )}
      </S.HomeWrapper>
      <TabMenu />
    </>
  );
}

export default Home;
