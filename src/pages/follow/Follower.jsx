import React, { useEffect, useState } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserFollow from '../../components/common/user/UserFollow';
import { loadFollowerListAPI } from '../../api/profile/getFollowerAPI';
import { useRecoilValue } from 'recoil';
import { accountNameState, userTokenState } from '../../atoms/Atoms';
import * as S from './Follower.style';

function Follower() {
  const [isFollower, setIsFollower] = useState([]);
  const userToken = useRecoilValue(userTokenState);
  const accountName = useRecoilValue(accountNameState);

  const loadFollowers = () => {
    loadFollowerListAPI(accountName, userToken)
      .then((data) => {
        console.log('API response:', data); // API 응답 확인
        if (data) {
          const dataArray = Object.values(data); // 객체를 배열로 변환 (필요한 경우)
          setIsFollower(dataArray);
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

  return (
    <div>
      <TopFollowNav title="Followers" />
      <S.FollowerWrapper>
        <S.FollowerUserList>
          {isFollower &&
            isFollower.map(
              (item) => (
                console.log('Rendering follower:', item),
                (<UserFollow key={item.accountname} data={item} />)
              ),
            )}
        </S.FollowerUserList>
      </S.FollowerWrapper>
      <TabMenu />
    </div>
  );
}

export default Follower;
