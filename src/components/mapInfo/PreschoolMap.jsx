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

  const openModalHandler = (preschool) => {
    setSelectedPreschool(preschool);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&libraries=services`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
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
    };
  }, []);

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

        map.setLevel(3); // 확대 수준 변경
        map.setCenter(coordinates); // 확대할 위치 설정
        setMapList([selectedPreschool]); // 지도에 표시된 핀을 선택한 업체로 업데이트
      }
    };

    handleLocationChange(displayPreschoolByLocationId);
  }, [map, handleLocationChange, list, searchValue, setSelectedLocationId]);

  -useEffect(() => {
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
        map.setLevel(8); // 축소 수준 변경
        map.setCenter(new kakao.maps.LatLng(37.566824, 126.978652));
      } else {
        map.setLevel(3); // 확대 수준 변경
        map.setCenter(coordinates); // 확대할 위치 설정
      }
    }
  }, [selectedLocationId, map, list, searchValue]);

  // 검색어가 변경될 때 지도를 초기 상태로 돌리는 코드 추가
  useEffect(() => {
    if (!map) return;

    // 검색어가 변경될 때 지도 상태를 초기화한다.
    map.setLevel(8); // 축소 수준 변경
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
      ;
    </>
  );
}

export default PreschoolMap;
