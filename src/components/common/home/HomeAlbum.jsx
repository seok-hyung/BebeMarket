import React from 'react';
import { HomeAlbumContainer, HomeAlbumItem } from './HomeAlbum.style';

const HomeAlbum = ({ image }) => {
  return (
    <HomeAlbumContainer>
      <HomeAlbumItem>
        <img src={image} alt="앨범형 이미지" />
      </HomeAlbumItem>
    </HomeAlbumContainer>
  );
};

export default HomeAlbum;
