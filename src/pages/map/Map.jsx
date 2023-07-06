import React, { useEffect, useState } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import PreschoolMap from '../../components/mapInfo/PreschoolMap';
import PreschoolList from '../../components/mapInfo/PreschoolList';
import * as S from './Map.style';

function Map() {
  return (
    <>
      <TopFollowNav />
      <S.Map>
        <PreschoolMap />
        <PreschoolList />
      </S.Map>
      <TabMenu />
    </>
  );
}

export default Map;
