import React from 'react';
import * as S from './PostDetail.style';
import TopBasicNav from '../../components/common/topNav/TopBasicNav';
import HomePost from '../../components/common/home/HomePost';
import CommentInput from '../../components/common/user/Comment';
import PostComment from '../../components/postComment/PostComment';

import { useState, useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { userTokenState, accountNameState } from '../../atoms/Atoms';
import { getMyInfoAPI } from '../../api/user/getMyInfoAPI';
import { getPostDetailAPI } from '../../api/post/getPostDetailAPI';
import { useParams } from 'react-router-dom';

//<Route path="/post/:postId" element={<PostDetail />} />

export default function PostDetail() {
  //const { postId } = useParams(); 이걸로바뀌어야함.
  const postId = '648eff03b2cb20566339b578';

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountNameState);
  const [myProfileImg, setMyProfileImg] = useState('');

  const [postData, setPostData] = useState({});
  const post = postData.post;

  useEffect(() => {
    //console.log(token);
    getMyInfoAPI(token).then((data) => {
      setMyProfileImg(data.user.image); //프로필 사진 가져오기
    });

    getPostDetailAPI(postId, token).then((data) => {
      setPostData(data);
    });
  }, []);

  return (
    <S.Container>
      <TopBasicNav />
      {post && <HomePost post={post} />}
      <S.Line />
      <S.PostCommentWrapper>
        <PostComment />
        <PostComment />
      </S.PostCommentWrapper>
      <CommentInput myProfileImg={myProfileImg} />
    </S.Container>
  );
}
