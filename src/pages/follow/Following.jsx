import React, { useEffect, useState } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserFollow from '../../components/common/user/UserFollow';
import { loadFollowingListAPI } from '../../api/profile/getFollowingAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../atoms/Atoms';
import * as S from './Following.style';
import { useLocation } from 'react-router-dom';

function Following() {
  const [isFollowing, setIsFollowing] = useState([]);
  const userToken = useRecoilValue(userTokenState);
  const pageSize = 8; // 한 번에 로드할 팔로워 수
  const [pageNumber, setPageNumber] = useState(0); // 현재 페이지 번호, 초기값은 0으로 설정
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];
  const skip = pageNumber * pageSize;

  const loadfollowing = () => {
    loadFollowingListAPI(accountname, userToken, skip, pageSize)
      .then((data) => {
        console.log('API response:', data); // API 응답 확인
        if (data) {
          setIsFollowing((prevState) => [...prevState, ...data]);
          setPageNumber((prevPageNumber) => prevPageNumber + 1); // 페이지 번호 증가
        } else {
          console.error('API returned null or undefined');
        }
      })
      .catch((error) => {
        console.error('Error loading following:', error);
      });
  };

  useEffect(() => {
    console.log('Loading following...');
    loadfollowing();
  }, []);

  // 이벤트 핸들러
  const handleLoadMore = () => {
    loadfollowing();
  };

  return (
    <div>
      <TopFollowNav title="Followings" />
      <S.FollowingWrapper>
        <S.FollowingUserList>
          {isFollowing &&
            isFollowing.map((item, index) => (
              <UserFollow key={`${item.accountname}-${index}`} data={item} />
            ))}
          <button onClick={handleLoadMore}>더 보기</button>
        </S.FollowingUserList>
      </S.FollowingWrapper>
      <TabMenu />
    </div>
  );
}

export default Following;
