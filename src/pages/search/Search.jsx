import React, { useEffect, useState } from 'react';
import TopSearchNav from '../../components/common/topNav/TopSearchNav';
import TabMenu from '../../components/common/tab/TabMenu';
import UserSearch from '../../components/common/user/UserSearch';

import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../atoms/Atoms';
import { searchUserAPI } from '../../api/search/searchUserAPI';

export default function Search() {
  // 검색어 입력한 value값
  const [searchValue, setSearchValue] = useState('');
  // searchUserAPI
  const [searchUserData, setSearchUserData] = useState([]);
  const userToken = useRecoilValue(userTokenState);
  useEffect(() => {
    if (searchValue) {
      const getSearchUserAPIDatas = async () => {
        const searchUserAPIData = await searchUserAPI(userToken, searchValue);
        const filteredData = searchUserAPIData.filter(
          (user) =>
            user.accountname.includes(searchValue) ||
            (user.username && user.username.includes(searchValue)),
        );
        setSearchUserData(filteredData);
      };
      getSearchUserAPIDatas();
    } else {
      setSearchUserData([]);
    }
  }, [searchValue, userToken]);

  const searchInputChange = (value) => {
    setSearchValue(value);
  };
  // const post = followerData.posts;
  return (
    <>
      <TopSearchNav onSearchInputChange={searchInputChange} />
      {searchUserData.map((user) => (
        <UserSearch
          key={user.accountname}
          searchValue={searchValue}
          accountname={user.accountname}
          username={user.username}
          profileImage={user.profileImage}
        />
      ))}
      <TabMenu />
    </>
  );
}
