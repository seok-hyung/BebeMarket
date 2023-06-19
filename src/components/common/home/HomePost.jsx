import React, { useState, useEffect } from 'react';
import * as S from './HomePost.style';
import PostModal from '../../modal/PostModal/PostModal';
import { useRecoilValue } from 'recoil';
import { accountNameState } from '../../../atoms/Atoms';

function HomePost({ post }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isMyPost, setIsMyPost] = useState(false);
  const showModal = () => {
    setisModalOpen(true);
  };
  const accountname = useRecoilValue(accountNameState);

  useEffect(() => {
    if (post.author.accountname === accountname) {
      setIsMyPost(true);
    }
  }, [post.author.accountname, accountname]);

  return (
    <>
      <S.Wrapper>
        <S.Article>
          <S.UserImage src={post.author.image} />
          <S.PostWapper>
            <S.PostHeader>
              <S.Title>
                {post.author.username}
                <S.SubTitle>{post.author.accountname}</S.SubTitle>
              </S.Title>
              <S.MoreButton onClick={showModal}></S.MoreButton>
            </S.PostHeader>
            <S.PostDetail>
              <S.Content>{post.content}</S.Content>
              {post.image.split(',').length === 1 ? (
                <S.ContentImage src={post.image.split(',')[0]} />
              ) : (
                <S.MultipleImgUl>
                  {post.image.split(',').map((image, index) => (
                    <S.ContentImageWrapper key={index}>
                      <S.ContentImage src={image} alt="포스트 이미지" />
                    </S.ContentImageWrapper>
                  ))}
                </S.MultipleImgUl>
              )}
            </S.PostDetail>
            <S.PostIconWrapper>
              <S.Like>
                <S.LikeIcon></S.LikeIcon>
                <S.LikeCount>{post.heartCount}</S.LikeCount>
              </S.Like>
              <S.Comment>
                <S.CommentIcon></S.CommentIcon>
                <S.CommentCount>{post.commentCount}</S.CommentCount>
              </S.Comment>
            </S.PostIconWrapper>
            <S.PostDate>{post.createdAt}</S.PostDate>
          </S.PostWapper>
        </S.Article>
      </S.Wrapper>
      {isModalOpen ? (
        <PostModal setisModalOpen={setisModalOpen} isMyPost={isMyPost} />
      ) : null}
    </>
  );
}
export default HomePost;

// {post.image.split(',').length === 1 ? (
//   <S.ContentImage src={post.image.split(',')[0]} />
// ) : (
//   <S.MultipleImgUl>
//     <S.ContentImageWrapper>
//       <S.ContentImage src={post.image.split(',')[0]} />
//     </S.ContentImageWrapper>
//     <S.ContentImageWrapper>
//       <S.ContentImage src={post.image.split(',')[1]} />
//     </S.ContentImageWrapper>
//   </S.MultipleImgUl>
// )}

// if (post.author.accountname === accountname) {
//   setIsMyPost(true);
// } 라고 했을때는 isMyPost가 재렌더링 되어서 무한루프가 일어난다.
