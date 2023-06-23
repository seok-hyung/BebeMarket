import React, { useEffect, useState } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserFollow from '../../components/common/user/UserFollow';
import { loadFollowingListAPI } from '../../api/profile/getFollowingAPI';
import { useRecoilValue } from 'recoil';
import { accountNameState, userTokenState } from '../../atoms/Atoms';
import * as S from './Following.style';
import { useLocation } from 'react-router-dom';

function Following() {
  const [isFollowing, setIsFollowing] = useState([]);
  const userToken = useRecoilValue(userTokenState);
  const location = useLocation();
  const accountname = location.pathname.split('/')[2];
  const loadfollowing = () => {
    loadFollowingListAPI(accountname, userToken)
      .then((data) => {
        console.log('API response:', data); // API 응답 확인
        if (data) {
          const dataArray = Object.values(data); // 객체를 배열로 변환 (필요한 경우)
          setIsFollowing(dataArray);
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

  return (
    <div>
      <TopFollowNav title="Followings" />
      <S.FollowingWrapper>
        <S.FollowingUserList>
          {isFollowing &&
            isFollowing.map(
              (item) => (
                console.log('Rendering following:', item),
                (<UserFollow key={item.accountname} data={item} />)
              ),
            )}
        </S.FollowingUserList>
      </S.FollowingWrapper>
      <TabMenu />
    </div>
  );
}

export default Following;
