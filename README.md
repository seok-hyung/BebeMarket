# 🍼 Bebe Market | 육아 커뮤니티 플랫폼
<img width="3491" alt="베베마켓" src="https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/c880cfcf-d732-40f4-aa4f-9aa77be506bd">


> Bebe Market은 육아 중인 부모들을 위한 커뮤니티 플랫폼입니다.<br>
> 이 플랫폼은 육아에 필요한 정보를 공유하고 교류할 수 있는 장을 제공합니다.<br>
> `육아 꿀팁` `육아템 추천` `아기용품 거래` `이유식 레시피 공유`<br>


- 배포 URL : `127.0.0.1:8000`
- Test ID : `127.0.0.1:8000`
- Test PW : `127.0.0.1:8000`

[링크]
💎 [프로젝트 레포지토리](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket)
📚 [팀 스터디 레포지토리](https://www.notion.so/12c57d2ccab14d1cb045fc9c8477d9f7?pvs=4)
📝 [팀 워크스페이스](https://www.notion.so/fa26227061e6455eb9ffaa4890b5820b?v=6b0e9d29545a4964874dfb61c3ed7150&pvs=4)
🎨 [디자인 피그마](https://www.figma.com/file/nJWmlNXio2PaUPKxgFp0nm/%EA%B0%90%EA%B7%A4?type=design&node-id=7088-4332&mode=design&t=NBFWiiIi6UpSdBv5-0)



## 📌목차

- 팀원 소개
- 역할 분담
- 디렉토리 구조
- 기술 및 개발 환경
- 기능 시연
- [코드 컨벤션](https://www.notion.so/9baf128ad01040488e5aa5a6daa78d50?pvs=21) 
- [커밋 컨벤션](https://www.notion.so/db10cf69f07448b487795899770d8f23?pvs=21)



## 팀원 소개


| 이석형| 임수정 | 임지인 | 정수연 |
| ------ | ------ | ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) | ![이미지4](이미지4_URL) |
| [@seok-hyung](https://github.com/seok-hyung) | [@sujung-lim](https://github.com/sujung-lim) | [@LimJeeIn](https://github.com/LimJeeIn) | [@susuje](https://github.com/susuje) |



## 역할 분담


❤️ 이석형
- UI
-- 
- 기능
--

💜  임수정
- UI
-- 
- 기능
--

💚  ️임지인
- UI
-- 홈 포스트, 프로덕트 공통 컴포넌트 마크업
-- 이메일 로그인 마크업
-- 팔로잉/팔로워 목록 페이지 마크업

- 기능
-- 이메일 로그인 기능 및 토큰 검증, 유효성 검사
-- 팔로우, 언팔로우 목록 기능 구현

💙  정수연
- UI
-- 
- 기능
--

## 디렉터리 구조


```
└─ final-20-BebeMarket
   ├─ .eslintrc.js
   ├─ .prettierrc
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico.svg
   │  └─ index.html
   ├─ README.md
   ├─ src
   │  ├─ api
   │  │  ├─ apiURL.js
   │  │  ├─ comment
   │  │  │  ├─ deleteCommentAPI.js
   │  │  │  ├─ getCommentAPI.js
   │  │  │  ├─ postCommentAPI.js
   │  │  │  └─ reportCommentAPI.js
   │  │  ├─ likeHeart
   │  │  │  ├─ likeAPI.js
   │  │  │  └─ unLikeAPI.js
   │  │  ├─ post
   │  │  │  ├─ deletePostAPI.js
   │  │  │  ├─ editPostAPI.js
   │  │  │  ├─ getPostDetailAPI.js
   │  │  │  ├─ getPostFeedAPI.js
   │  │  │  ├─ getProfilePostAPI.js
   │  │  │  ├─ reportPostAPI.js
   │  │  │  └─ uploadPostAPI.js
   │  │  ├─ product
   │  │  │  ├─ addProductAPI.js
   │  │  │  ├─ deleteProductAPI.js
   │  │  │  ├─ editProductAPI.js
   │  │  │  ├─ getProductListAPI.js
   │  │  │  └─ productDetailAPI.js
   │  │  ├─ profile
   │  │  │  ├─ editProfileAPI.js
   │  │  │  ├─ followAPI.js
   │  │  │  ├─ getFollowerAPI.js
   │  │  │  ├─ getFollowingAPI.js
   │  │  │  ├─ getProfileAPI.js
   │  │  │  └─ unFollowAPI.js
   │  │  ├─ search
   │  │  │  └─ searchUserAPI.js
   │  │  ├─ token
   │  │  │  └─ checkToken.js
   │  │  ├─ uploadImg
   │  │  │  ├─ uploadImageAPI.js
   │  │  │  └─ uploadImagesAPI.js
   │  │  └─ user
   │  │     ├─ accountnameValidAPI.js
   │  │     ├─ emailLoginAPI.js
   │  │     ├─ emailValidAPI.js
   │  │     ├─ getMyInfoAPI.js
   │  │     └─ joinAPI.js
   │  ├─ App.js
   │  ├─ assets
   │  │  ├─ css_sprites.png
   │  │  ├─ icon
   │  │  │  ├─ facebook.png
   │  │  │  ├─ facebook.svg
   │  │  │  ├─  favicon.png
   │  │  │  └─ ...
   │  │  └─ images
   │  │     ├─ basic-profile-img.png
   │  │     ├─ basic-profile-img.svg
   │  │     ├─ upload-file.png
   │  │     └─ ...
   │  ├─ atoms
   │  │  └─ Atoms.js
   │  ├─ components
   │  │  ├─ common
   │  │  │  ├─ button
   │  │  │  │  ├─ Button.jsx
   │  │  │  │  └─ Button.style.js
   │  │  │  ├─ home
   │  │  │  │  ├─ HomeAlbum.jsx
   │  │  │  │  ├─ HomeAlbum.style.js
   │  │  │  │  ├─ HomePost.jsx
   │  │  │  │  └─ HomePost.style.js
   │  │  │  ├─ input
   │  │  │  │  ├─ InputBox.jsx
   │  │  │  │  └─ InputBox.style.js
   │  │  │  ├─ modal
   │  │  │  │  ├─ DeleteModal.jsx
   │  │  │  │  └─ DeleteModal.style.js
   │  │  │  ├─ product
   │  │  │  │  ├─ Product.jsx
   │  │  │  │  └─ Product.style.js
   │  │  │  ├─ tab
   │  │  │  │  ├─ TabMenu.jsx
   │  │  │  │  └─ TabMenu.style.js
   │  │  │  ├─ topNav
   │  │  │  │  ├─ TopBasicNav.jsx
   │  │  │  │  ├─ TopBasicNav.style.js
   │  │  │  │  ├─ TopChatNav.jsx
   │  │  │  │  ├─ TopChatNav.style.js
   │  │  │  │  ├─ TopFollowNav.jsx
   │  │  │  │  ├─ TopFollowNav.style.js
   │  │  │  │  ├─ TopMainNav.jsx
   │  │  │  │  ├─ TopMainNav.style.js
   │  │  │  │  ├─ TopSearchNav.jsx
   │  │  │  │  ├─ TopSearchNav.style.js
   │  │  │  │  ├─ TopUploadNav.jsx
   │  │  │  │  └─ TopUploadNav.style.js
   │  │  │  └─ user
   │  │  │     ├─ Comment.jsx
   │  │  │     ├─ Comment.style.js
   │  │  │     ├─ UserFollow.jsx
   │  │  │     ├─ UserFollow.style.js
   │  │  │     ├─ UserSearch.jsx
   │  │  │     └─ UserSearch.style.js
   │  │  ├─ modal
   │  │  │  ├─ ChatModal
   │  │  │  │  └─ ChatModal.jsx
   │  │  │  ├─ CommentModal
   │  │  │  │  ├─ CommentAlert.jsx
   │  │  │  │  ├─ CommentModal.jsx
   │  │  │  │  └─ ReportCommentAlert.jsx
   │  │  │  ├─ PostModal
   │  │  │  │  ├─ PostAlert.jsx
   │  │  │  │  └─ PostModal.jsx
   │  │  │  ├─ ProductModal
   │  │  │  │  ├─ ProductAlert.jsx
   │  │  │  │  └─ ProductModal.jsx
   │  │  │  ├─ ProfileModal
   │  │  │  │  ├─ ProfileAlert.jsx
   │  │  │  │  └─ ProfileModal.jsx
   │  │  │  ├─ ReportModal
   │  │  │  │  ├─ ReportAlert.jsx
   │  │  │  │  └─ ReportModal.jsx
   │  │  │  └─ styled.jsx
   │  │  └─ postComment
   │  │     ├─ PostComment.jsx
   │  │     └─ PostComment.style.js
   │  ├─ index.js
   │  ├─ pages
   │  │  ├─ chat
   │  │  │  ├─ ChatList.jsx
   │  │  │  ├─ ChatList.style.js
   │  │  │  ├─ ChatRoom.jsx
   │  │  │  └─ ChatRoom.style.js
   │  │  ├─ error
   │  │  │  ├─ Error.jsx
   │  │  │  └─ Error.style.js
   │  │  ├─ follow
   │  │  │  ├─ Follower.jsx
   │  │  │  ├─ Follower.style.js
   │  │  │  ├─ Following.jsx
   │  │  │  └─ Following.style.js
   │  │  ├─ home
   │  │  │  ├─ Home.jsx
   │  │  │  └─ Home.style.js
   │  │  ├─ join
   │  │  │  ├─ JoinProfile.jsx
   │  │  │  ├─ JoinProfile.style.js
   │  │  │  ├─ SignUp.jsx
   │  │  │  └─ SignUp.style.js
   │  │  ├─ login
   │  │  │  ├─ Login.jsx
   │  │  │  ├─ Login.style.js
   │  │  │  ├─ SocialLogin.jsx
   │  │  │  └─ SocialLogin.style.js
   │  │  ├─ Pages.jsx
   │  │  ├─ postDetail
   │  │  │  ├─ PostDetail.jsx
   │  │  │  └─ PostDetail.style.js
   │  │  ├─ postEdit
   │  │  │  ├─ PostEdit.jsx
   │  │  │  └─ PostEdit.style.js
   │  │  ├─ productEdit
   │  │  │  ├─ ProductEdit.jsx
   │  │  │  └─ ProductEdit.style.js
   │  │  ├─ profile
   │  │  │  ├─ Profile.jsx
   │  │  │  └─ Profile.style.js
   │  │  ├─ profileEdit
   │  │  │  ├─ ProfileEdit.jsx
   │  │  │  └─ ProfileEdit.style.js
   │  │  ├─ search
   │  │  │  ├─ Search.jsx
   │  │  │  └─ Search.style.js
   │  │  ├─ splash
   │  │  │  ├─ Splash.jsx
   │  │  │  └─ Splash.style.js
   │  │  ├─ uploadPost
   │  │  │  ├─ UploadPost.jsx
   │  │  │  └─ UploadPost.style.js
   │  │  └─ uploadProduct
   │  │     ├─ UploadProduct.jsx
   │  │     └─ UploadProduct.style.js
   │  └─ styles
   │     └─ Globalstyled.jsx
   └─ yarn.lock

```

## 기술

| Front-end |  ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![styled-components](https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Recoil](https://img.shields.io/badge/Recoil-61DAFB?style=for-the-badge&logo=Recoil&logoColor=1189FB)| 
| ------ | ------ | 
| Back-end | 제공된 API 활용 | ![이미지3](이미지3_URL) | ![이미지4](이미지4_URL) |
| 협업 툴 | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white) | [@susuje](https://github.com/susuje) |
| 디자인 | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)  |


## 개발 환경

| 이슈 관리 |  ![Git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)| 
| ------ | ------ | 
| 브랜치 전략 | [Git-Flow](https://github.com/susuje)  | 

## 기능 시현

1) 홈

| splash | 로그인 | 회원 가입 |
| ------ | ------ | ------ | 
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) |

| 홈 피드 | 검색 | 
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) | ![이미지4](이미지4_URL) |

| 채팅 | 404 페이지 | 
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | 

2) 게시글

| 게시글 작성 | 게시글 수정 | 게시글 삭제 |
| ------ | ------ | ------ | 
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) | 

| 게시글 상세 및 댓글 | 댓글 삭제 | 댓글 신고 |
| ------ | ------ | ------ | 
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) | 

| 게시글 신고 | 좋아요, 좋아요 취소 | 
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | 

3) 프로필

| 내 프로필 | 프로필 수정 | 
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | 

| 팔로워, 팔로잉 | 타 유저 프로필 및 팔로우, 언팔로우 | 
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | 


4) 판매 상품

| 상품 등록 | 상품 삭제 |
| ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | 


