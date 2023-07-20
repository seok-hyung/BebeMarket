import React, { useEffect, useState, useCallback } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserFollow from '../../components/common/user/UserFollow';
import { loadFollowerListAPI } from '../../api/profile/getFollowerAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../atoms/Atoms';
import * as S from './Follower.style';
import { useLocation } from 'react-router-dom';

function Follower() {
  // 팔로워 데이터 및 페이지 정보 관리하는 state
  const [followers, setFollowers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const userToken = useRecoilValue(userTokenState);
  const pageSize = 8;
  const [pageNumber, setPageNumber] = useState(0);

  // 계정 이름 가져오기
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];
  const skip = pageNumber * pageSize;

  // 팔로워 목록 api 호출 함수
  const loadFollowers = useCallback(async () => {
    if (!hasMore) return;

    const data = await loadFollowerListAPI(
      accountname,
      userToken,
      skip,
      pageSize,
    );

    if (data) {
      // 팔로워 데이터 업데이트
      setFollowers((prevState) => [...prevState, ...data]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      if (data.length < pageSize) {
        setHasMore(false);
      }
    } else {
      console.error('API returned null or undefined');
    }
  }, [accountname, userToken, skip, pageSize, hasMore]);

  // 팔로워 데이터 가져오기
  useEffect(() => {
    if (pageNumber === 0) {
      loadFollowers();
    }
  }, [loadFollowers, pageNumber]);

  // 무한 스크롤 구현
  useEffect(() => {
    const handleScroll = () => {
      // 문서 끝에 도달하지 않았거나 더 이상 가져올 데이터가 없을 경우
      if (
        window.innerHeight + document.documentElement.scrollTop <
          document.documentElement.offsetHeight ||
        !hasMore // 더 이상 가져올 데이터가 없을 때
      )
        return;

      loadFollowers();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadFollowers, hasMore]);

  // 불필요한 리렌더링 방지용 메모이제이션 컴포넌트
  const MemoizedUserFollow = React.memo(UserFollow);

  return (
    <div>
      <TopFollowNav title="Followers" />
      <S.FollowerWrapper>
        <S.FollowerUserList>
          {followers &&
            followers.map((item, index) => (
              <MemoizedUserFollow
                key={`${item.accountname}-${index}`}
                data={item}
              />
            ))}
        </S.FollowerUserList>
      </S.FollowerWrapper>
      <TabMenu />
    </div>
  );
}

export default Follower;
