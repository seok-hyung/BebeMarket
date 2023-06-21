import React from 'react';
import { HomeAlbumContainer, HomeAlbumItem } from './HomeAlbum.style';
import LayerImage from '../../../assets/icon/iccon-img-layers.svg';

const HomeAlbum = ({ profileArray }) => {
  console.log(profileArray);
  return (
    <HomeAlbumContainer>
      {profileArray.map((item, index) => {
        const images = item.image.split(',');

        return (
          <HomeAlbumItem key={index}>
            {images.length > 1 ? (
              <div
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <img src={images[0]} alt="앨범형 이미지" />
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={LayerImage} alt="아이콘" />
                </div>
              </div>
            ) : (
              <img src={item.image} alt="앨범형 이미지" />
            )}
          </HomeAlbumItem>
        );
      })}
    </HomeAlbumContainer>
  );
};

export default HomeAlbum;
