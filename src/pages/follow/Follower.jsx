import React, { useEffect, useState } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserFollow from '../../components/common/user/UserFollow';
import { loadFollowerListAPI } from '../../api/profile/getFollowerAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../atoms/Atoms';
import * as S from './Follower.style';
import { useLocation } from 'react-router-dom';

function Follower() {
  const [isFollower, setIsFollower] = useState([]);
  const userToken = useRecoilValue(userTokenState);
  const pageSize = 8; // 한 번에 로드할 팔로워 수
  const [pageNumber, setPageNumber] = useState(0); // 현재 페이지 번호, 초기값은 0으로 설정
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];
  const skip = pageNumber * pageSize;

  const loadFollowers = () => {
    loadFollowerListAPI(accountname, userToken, skip, pageSize)
      .then((data) => {
        console.log('API response:', data); // API 응답 확인
        if (data) {
          setIsFollower((prevState) => [...prevState, ...data]);
          setPageNumber((prevPageNumber) => prevPageNumber + 1); // 페이지 번호 증가
        } else {
          console.error('API returned null or undefined');
        }
      })
      .catch((error) => {
        console.error('Error loading followers:', error);
      });
  };

  useEffect(() => {
    console.log('Loading followers...');
    loadFollowers();
  }, []);

  // 이벤트 핸들러
  const handleLoadMore = () => {
    loadFollowers();
  };

  return (
    <div>
      <TopFollowNav title="Followers" />
      <S.FollowerWrapper>
        <S.FollowerUserList>
          {isFollower &&
            isFollower.map((item, index) => (
              <UserFollow key={`${item.accountname}-${index}`} data={item} />
            ))}
          <button onClick={handleLoadMore}>더 보기</button>
        </S.FollowerUserList>
      </S.FollowerWrapper>
      <TabMenu />
    </div>
  );
}

export default Follower;
