import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { accountNameState, userTokenState } from '../../atoms/Atoms';
import { getMyInfoAPI } from '../../api/user/getMyInfoAPI';
import { getProductListAPI } from '../../api/product/getProductListAPI';
import { getProfilePostAPI } from '../../api/post/getProfilePostAPI';
import { followAPI } from '../../api/profile/followAPI';
import { useNavigate } from 'react-router-dom';
import { getProfileAPI } from '../../api/profile/getProfileAPI';

// 공통 컴포넌트
import TopBasicNav from '../../components/common/topNav/TopBasicNav';
import {
  MediumFollowButton,
  UnfollowButton,
} from '../../components/common/button/Button';
import Product from '../../components/common/product/Product';
import HomePost from '../../components/common/home/HomePost';
import HomeAlbum from '../../components/common/home/HomeAlbum';
import TabMenu from '../../components/common/tab/TabMenu';

// 스타일
import * as S from './Profile.style';

// 이미지
import basicProfileImage from '../../assets/images/basic-profile-img.svg';
import postListOn from '../../assets/icon/icon-post-list-on.svg';
import postListOff from '../../assets/icon/icon-post-list-off.svg';
import postAlbumOn from '../../assets/icon/icon-post-album-on.svg';
import postAlbumOff from '../../assets/icon/icon-post-album-off.svg';

export default function Profile() {
  const [isListMode, setIsListMode] = useState(true);
  const [isFollowed, setIsFollowed] = useState(false);
  const [followingCount, setFollowingCount] = useState(0);
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  // const [posts, setPosts] = useState([]);
  const token = useRecoilValue(userTokenState);
  const myAccountname = useRecoilValue(accountNameState);
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [myPost, setMyPost] = useState([]);
  const { accountname } = useParams();
  const myPostArray = myPost.post;
  const navigate = useNavigate();

  useEffect(() => {
    setIsMyProfile(accountname === myAccountname);
  }, [accountname, myAccountname]);

  useEffect(() => {
    getProductListAPI(accountname, token).then((data) => {
      console.log(data);
    });
    getProfilePostAPI(accountname, token).then((data) => {
      console.log(data);
      setMyPost(data);
    });
  }, [accountname]);
  console.log(isMyProfile);

  // useEffect(() => {
  //   getMyInfoAPI(token).then((data) => {
  //     setProfile(data.user);
  //     console.log(accountname + 'hi');
  //   });

  //   getProfileAPI(accountname,token).then((data)=>{
  //     setProfile(data.user);
  //   })
  // }, [token, accountname]);

  useEffect(() => {
    if (!isMyProfile) {
      getProfileAPI(accountname, token)
        .then((data) => {
          setProfile(data.profile);
        })
        .catch((error) => {
          console.error('프로필 데이터를 불러오지 못했습니다.', error);
        });
    } else {
      getMyInfoAPI(token)
        .then((data) => {
          setProfile(data.user);
          console.log(accountname + 'hi');
        })
        .catch((error) => {
          console.error('프로필 데이터를 불러오지 못했습니다.', error);
        });
    }
  }, [isMyProfile, accountname, token]);

  // const toggleFollow = () => {
  //   setIsFollowed((prevIsFollowed) => !prevIsFollowed);
  // }; 아무 기능도 수행하지 않는 함수

  const toggleFollow = () => {
    console.log(accountname);
  };

  const handleFollow = () => {
    console.log(accountname);
    followAPI(accountname, token).then((data) => {
      console.log(data);
    });
  };
  const handleEditProfile = () => {
    navigate(`/profile/${myAccountname}/edit`);
    console.log('프로필 수정');
  };

  const handleUploadProduct = () => {
    navigate('/product');
    console.log('상품 등록');
  };

  console.log('myAccountname:', myAccountname);
  console.log('isMyProfile:', isMyProfile);
  // console.log(myPost);
  console.log(myPostArray);

  return (
    <div>
      <TopBasicNav />
      <S.ProfileWrapper>
        <S.ProfileContainer>
          <S.ProfileHeader>
            {/* 프로필 팔로워수 처리 변경 */}
            <S.Followers>
              <span>{profile ? profile.followerCount : 'Loading...'}</span>
              <span>followers</span>
            </S.Followers>
            {/* 프로필 이미지 처리 변경 */}
            <S.ProfileImage
              src={profile ? profile.image : basicProfileImage}
              alt="프로필 사진"
            />
            {/* 프로필 팔로잉수 처리 변경 */}
            <S.Followings>
              <span>{profile ? profile.followingCount : 'Loading...'}</span>
              <span>followings</span>
            </S.Followings>
          </S.ProfileHeader>
          <S.ProfileMain>
            {/* 프로필 정보 표시 변경 (사용자 이름, 계정명, 설명 등) */}
            <p>{profile ? profile.username : 'Loading...'}</p>
            <p>@{profile ? profile.accountname : 'Loading...'}</p>
            <p>{profile ? profile.description : 'Loading...'}</p>
          </S.ProfileMain>
          <S.ProfileFooter>
            {isMyProfile ? (
              <>
                <S.EditProfileButton onClick={handleEditProfile}>
                  프로필 수정
                </S.EditProfileButton>
                <S.UploadProductButton onClick={handleUploadProduct}>
                  상품 등록
                </S.UploadProductButton>
              </>
            ) : (
              <>
                <button className="dm-btn"></button>
                {isFollowed ? (
                  <UnfollowButton
                    onClick={() => {
                      toggleFollow();
                      handleFollow();
                    }}
                  />
                ) : (
                  <MediumFollowButton
                    onClick={() => {
                      toggleFollow();
                      handleFollow();
                    }}
                  />
                )}
                <button className="share-btn"></button>
              </>
            )}
          </S.ProfileFooter>
        </S.ProfileContainer>
        <S.ProductContainer>
          <h2>판매 중인 상품</h2>
          {/* <Product key={products.id} productData={products} /> */}
        </S.ProductContainer>
        <S.PostContainer>
          <S.ViewOptions>
            <S.PostListButton
              src={isListMode ? postListOn : postListOff}
              alt="피드 목록형으로 보기"
              onClick={() => setIsListMode(true)}
            ></S.PostListButton>
            <S.PostAlbumButton
              src={isListMode ? postAlbumOff : postAlbumOn}
              alt="피드 앨범형으로 보기"
              onClick={() => setIsListMode(false)}
            ></S.PostAlbumButton>
          </S.ViewOptions>
          {isListMode &&
            myPostArray &&
            myPostArray.map((post, index) => (
              <HomePost post={post} key={index} postId={post.id} />
            ))}
          {!isListMode && <HomeAlbum profileArray={myPostArray} />}
        </S.PostContainer>
      </S.ProfileWrapper>
      <TabMenu />
    </div>
  );
}

// const fetchData = () => {
//   getMyInfoAPI(token)
//     .then((data) => {
//       if (data) {
//         setProfile(data.user);
//         console.log(data);
//       } else {
//         console.error('프로필 데이터를 불러오지 못했습니다.');
//       }
//     })
//     .catch((error) => console.error('프로필 로딩 중 에러 발생:', error));

// 상품 목록 API 호출
// getProductListAPI(myAccountname, token)
//   .then((data) => {
//     if (data) {
//       //setProducts(data.product);
//       console.log(data);
//     } else {
//       console.error('상품 목록 데이터를 불러오지 못했습니다.');
//     }
//   })
//   .catch((error) => console.error('상품 목록 로딩 중 에러 발생:', error));

// 게시물 상세 API 호출
// getPostDetailAPI(id, token)
//   .then((data) => {
//     if (data) {
//       setProducts(data.posts);
//       console.log(data);
//     } else {
//       console.error('게시물 상세를 불러오지 못했습니다.');
//     }
//   })
//   .catch((error) =>
//     console.error('게시물 상세 로딩 중 에러 발생:', error),
//   );

// fetchData();
