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
import { getCommentAPI } from '../../api/comment/getCommentAPI';
import { useParams } from 'react-router-dom';

//<Route path="/post/:postId" element={<PostDetail />} />

export default function PostDetail() {
  const { postId } = useParams();
  // const postId = '648eff03b2cb20566339b578'; //글을 업로드하면 id가 자체적으로생김. 디스코드참고

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountNameState);
  const [myProfileImg, setMyProfileImg] = useState('');
  const [commentData, setCommentData] = useState([]);
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

  useEffect(() => {
    getCommentAPI(postId, token).then((data) => {
      setCommentData(Array.from(data.comments)); //유사배열객체 data.comments를 배열로바꾼다.
    });
  }, [commentData]);
  return (
    <S.Container>
      <TopBasicNav />
      {post && <HomePost post={post} postId={postId} />}
      <S.Line />
      <S.PostCommentWrapper>
        {commentData &&
          commentData
            .reverse()
            .map((comment) => (
              <PostComment comment={comment} key={comment.id} postId={postId} />
            ))}
      </S.PostCommentWrapper>
      <CommentInput myProfileImg={myProfileImg} postId={postId} />
    </S.Container>
  );
}
//<PostComment />
