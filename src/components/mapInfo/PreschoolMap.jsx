/* global kakao */

import React, { useEffect, useState } from 'react';
import * as S from './PreschoolMap.style';
import Modal from '../../components/modal/MapModal/MapModal';

function PreschoolMap({
  list,
  mapList,
  searchValue,
  handleLocationChange,
  setMapList,
  setMarkers,
  map,
  setMap,
}) {
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPreschool, setSelectedPreschool] = useState({});

  // 모달 창 열고 닫기 핸들러 함수
  const openModalHandler = (preschool) => {
    setSelectedPreschool(preschool);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  // 카카오 맵 스크립트 불러오기
  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // 초기 지도 렌더링
  useEffect(() => {
    loadScript(
      `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services`,
    )
      .then(() => {
        const scriptCheckInterval = setInterval(() => {
          if (window.kakao) {
            clearInterval(scriptCheckInterval);

            window.kakao.maps.load(() => {
              const { kakao } = window;
              const container = document.getElementById('map');
              const options = {
                center: new kakao.maps.LatLng(37.566824, 126.978652),
                level: 8,
              };
              const map = new kakao.maps.Map(container, options);

              const zoomControl = new kakao.maps.ZoomControl();
              map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

              setMap(map);
            });
          }
        });
      })
      .catch((err) => {
        console.error('Failed to load Kakao Maps SDK:', err);
      });
  }, []);

  // 마커 업데이트
  useEffect(() => {
    if (!map) return;

    const newMarkers = mapList
      .map(({ CRNAME, LA, LO, STCODE }) => {
        if (!CRNAME || !LA || !LO) {
          return null;
        }

        const position = new kakao.maps.LatLng(LA, LO);

        const marker = new kakao.maps.Marker({
          position,
          map,
        });
        marker.STCODE = STCODE;

        const infowindow = new kakao.maps.InfoWindow({
          position,
          content: `<div style="padding:5px; font-size:12px;">${CRNAME}</div>`,
        });

        // 마커 이벤트 리스너 등록
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          infowindow.open(map, marker);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function () {
          infowindow.close();
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          const zoomLevel = map.getLevel();
          const position = marker.getPosition();

          if (zoomLevel !== 3) {
            map.setLevel(3);
            map.setCenter(position);
          } else {
            openModalHandler(
              list.find((preschool) => preschool.STCODE === marker.STCODE),
            );
          }
        });

        return marker;
      })
      .filter((marker) => marker !== null);

    setMarkers((prevMarkers) => {
      prevMarkers.forEach((marker) => {
        marker.setMap(null);
      });

      return newMarkers;
    });
  }, [map, mapList, selectedLocationId, list]);

  // 위치 변경 시 기능 처리
  useEffect(() => {
    if (!map) return;

    const displayPreschoolByLocationId = (id) => {
      setSelectedLocationId(id);

      const selectedPreschool = list
        .filter((preschool) => preschool.CRNAME.includes(searchValue))
        .find((preschool) => preschool.STCODE === id);

      if (selectedPreschool) {
        const { kakao } = window;
        const coordinates = new kakao.maps.LatLng(
          selectedPreschool.LA,
          selectedPreschool.LO,
        );

        map.setLevel(3);
        map.setCenter(coordinates); // 확대할 위치 설정
        setMapList([selectedPreschool]); // 지도에 표시된 핀을 선택한 업체로 업데이트
      }
    };

    handleLocationChange(displayPreschoolByLocationId);
  }, [map, handleLocationChange, list, searchValue, setSelectedLocationId]);

  // 선택된 위치가 변경될 때 처리
  useEffect(() => {
    if (!selectedLocationId || !map || !list) return;

    const selectedPreschool = list
      .filter((preschool) => preschool.CRNAME.includes(searchValue))
      .find((preschool) => preschool.STCODE === selectedLocationId);

    if (selectedPreschool) {
      const { kakao } = window;
      const coordinates = new kakao.maps.LatLng(
        selectedPreschool.LA,
        selectedPreschool.LO,
      );

      if (
        map.getLevel() === 3 &&
        map.getCenter().toString() === coordinates.toString()
      ) {
        map.setLevel(8);
        map.setCenter(new kakao.maps.LatLng(37.566824, 126.978652));
      } else {
        map.setLevel(3);
        map.setCenter(coordinates); // 확대할 위치 설정
      }
    }
  }, [selectedLocationId, map, list, searchValue]);

  // 검색어 변경 시 지도 초기 상태로 리셋
  useEffect(() => {
    if (!map) return;

    // 검색어가 변경될 때 지도 상태를 초기화
    map.setLevel(8);
    map.setCenter(new kakao.maps.LatLng(37.566824, 126.978652));
  }, [searchValue]);

  return (
    <>
      <S.PreschoolMapContainer id="map"></S.PreschoolMapContainer>
      {openModal && (
        <Modal
          closeModal={closeModalHandler}
          selectedItem={selectedPreschool}
        />
      )}
    </>
  );
}

export default React.memo(PreschoolMap);
