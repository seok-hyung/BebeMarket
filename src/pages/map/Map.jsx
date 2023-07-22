import React, { useEffect, useState, lazy, Suspense } from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';

// 레이지 로딩을 사용하여 PreschoolMap 및 PreschoolList 컴포넌트를 동적으로 가져온다
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

  // 컴포넌트 마운트 시, 유치원 API 데이터를 가져와 저장
  useEffect(() => {
    let preschoolListAPIDatas = data[0].ChildCareInfo.row;
    setPreschoolList(preschoolListAPIDatas);
    setMapList(preschoolListAPIDatas);
  }, []);

  // 선택한 유치원의 위치를 처리하는 함수
  const handleMapLocation = (STCODE, level = 3) => {
    // 검색값이 포함된 유치원 목록에서 STCODE와 일치하는 항목 찾기
    const selectedPreschool = preschoolList
      .filter((preschool) => preschool.CRNAME.includes(searchValue))
      .find((preschool) => preschool.STCODE === STCODE);

    if (selectedPreschool) {
      const { kakao } = window;
      const coordinates = new kakao.maps.LatLng(
        selectedPreschool.LA,
        selectedPreschool.LO,
      );

      // STCODE와 일치하는 이전에 생성된 마커 찾기
      const selectedMarker = markers.find((marker) => marker.STCODE === STCODE);

      // 일치하는 마커가 있다면 지도 이동 및 확대
      if (selectedMarker) {
        map.setLevel(level);
        map.setCenter(coordinates);
      } else {
        // 일치하는 마커가 없으면 기다린 후 다시 시도
        setTimeout(() => handleMapLocation(STCODE), 200);
      }
    }
  };

  // 검색값이 변경될 때마다 실행되는 함수
  const handleSearchChange = (value) => {
    setSearchValue(value);

    // 검색값이 포함된 항목으로 필터링된 목록 생성
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
