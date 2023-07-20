import React, { useEffect, useState, lazy, Suspense } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
const PreschoolMap = lazy(() =>
  import('../../components/mapInfo/PreschoolMap'),
);
const PreschoolList = lazy(() =>
  import('../../components/mapInfo/PreschoolList'),
);

import * as S from './Map.style';
import { useRecoilState } from 'recoil';
import { preschoolListState, mapSearchValueState } from '../../atoms/Atoms';

import { data } from '../../data/ChildCareInfo';

function Map() {
  const [preschoolList, setPreschoolList] = useRecoilState(preschoolListState);
  const [searchValue, setSearchValue] = useRecoilState(mapSearchValueState);
  const [mapList, setMapList] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    let preschoolListAPIDatas = data[0].ChildCareInfo.row;
    setPreschoolList(preschoolListAPIDatas);
    setMapList(preschoolListAPIDatas);
  }, []);

  const handleMapLocation = (STCODE) => {
    const selectedPreschool = preschoolList
      .filter((preschool) => preschool.CRNAME.includes(searchValue))
      .find((preschool) => preschool.STCODE === STCODE);

    if (selectedPreschool) {
      const { kakao } = window;
      const coordinates = new kakao.maps.LatLng(
        selectedPreschool.LA,
        selectedPreschool.LO,
      );

      // 이전에 생성된 마커 중에서 STCODE와 일치하는 것을 찾기
      const selectedMarker = markers.find((marker) => marker.STCODE === STCODE);

      // 만약 일치하는 마커가 있다면, 지도 이동 및 확대
      if (selectedMarker) {
        map.setLevel(3);
        map.setCenter(coordinates);
      } else {
        // 일치하는 마커가 없으면 기다렸다가 다시 시도
        setTimeout(() => handleMapLocation(STCODE), 200);
      }
    }
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);

    const filteredList = preschoolList.filter((item) =>
      item.CRNAME.includes(value),
    );
    setMapList(filteredList.length > 0 ? filteredList : preschoolList);
  };

  return (
    <>
      <TopFollowNav />
      <S.Map>
        {preschoolList && (
          <Suspense fallback={<div>Loading...</div>}>
            <PreschoolMap
              list={preschoolList}
              mapList={mapList}
              searchValue={searchValue}
              handleLocationChange={handleMapLocation}
              setMapList={setMapList}
              markers={markers}
              setMarkers={setMarkers}
              map={map}
              setMap={setMap}
            />
            <PreschoolList
              list={preschoolList}
              onLocationChange={handleMapLocation}
              handleSearchChange={handleSearchChange}
              searchValue={searchValue}
            />
          </Suspense>
        )}
      </S.Map>
      <TabMenu />
    </>
  );
}

export default Map;
