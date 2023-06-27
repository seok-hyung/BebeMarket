# 🍼 Bebe Market | 육아 커뮤니티 플랫폼<br>
<img width="3491" alt="베베마켓" src="https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/c880cfcf-d732-40f4-aa4f-9aa77be506bd">
<br>

> Bebe Market은 육아 중인 부모들을 위한 커뮤니티 플랫폼입니다.<br>
> 이 플랫폼은 육아에 필요한 정보를 공유하고 교류할 수 있는 장을 제공합니다.<br>
> `육아 꿀팁` `육아템 추천` `아기용품 거래` `이유식 레시피 공유`<br>
<br>
<br>

- 배포 URL : `127.0.0.1:8000`
- Test ID : `127.0.0.1:8000`
- Test PW : `127.0.0.1:8000`
<br>
<br>

[링크]
💎 [프로젝트 레포지토리](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket)
📚 [팀 스터디 레포지토리](https://www.notion.so/12c57d2ccab14d1cb045fc9c8477d9f7?pvs=4)
📝 [팀 워크스페이스](https://www.notion.so/fa26227061e6455eb9ffaa4890b5820b?v=6b0e9d29545a4964874dfb61c3ed7150&pvs=4)
🎨 [디자인 피그마](https://www.figma.com/file/nJWmlNXio2PaUPKxgFp0nm/%EA%B0%90%EA%B7%A4?type=design&node-id=7088-4332&mode=design&t=NBFWiiIi6UpSdBv5-0)
<br>
<br>


## 📌목차

- 팀원 소개
- 역할 분담
- 디렉토리 구조
- 기술 및 개발 환경
- 기능 시연
- [코드 컨벤션](https://www.notion.so/9baf128ad01040488e5aa5a6daa78d50?pvs=21) 
- [커밋 컨벤션](https://www.notion.so/db10cf69f07448b487795899770d8f23?pvs=21)

<br>
<br>

## 팀원 소개


| 이석형| 임수정 | 임지인 | 정수연 |
| ------ | ------ | ------ | ------ |
| ![이미지1](이미지1_URL) | ![이미지2](이미지2_URL) | ![이미지3](이미지3_URL) | ![이미지4](이미지4_URL) |
| [@seok-hyung](https://github.com/seok-hyung) | [@sujung-lim](https://github.com/sujung-lim) | [@LimJeeIn](https://github.com/LimJeeIn) | [@susuje](https://github.com/susuje) |

<br>
<br>

## 역할 분담


❤️ 이석형
- UI<br>
--

- 기능<br>
--


💜  임수정
- UI<br>
-- 페이지: 마이 프로필, 사용자 프로필, 프로필 수정, 소셜 로그인 화면<br>
-- 컴포넌트: 버튼, 게시글 앨범형
  
- 기능<br>
-- 프로필 수정 페이지 사용자 이름, 계정 유효성 검사<br>
-- 프로필 페이지 (판매 중인 상품 불러오기, 게시글 불러오기) 구현<br>

- 협업<br>
-- 노션 작성, README.md 작성

💚  ️임지인
- UI<br>
-- 홈 포스트, 프로덕트 공통 컴포넌트 마크업<br>
-- 이메일 로그인 마크업<br>
-- 팔로잉/팔로워 목록 페이지 마크업

- 기능<br>
-- 이메일 로그인 기능 및 토큰 검증, 유효성 검사를 통해 입력값이 적절한지 확인<br>
-- 팔로우, 언팔로우 목록 기능 구현

- 협업<br>
-- README.md 작성

💙  정수연
- UI<br>
-- 페이지 : 게시글 작성 및 수정, 게시글 상세, Splash 화면<br>
-- 공통 컴포넌트 : Modal, NavBar<br>

- 기능<br>
-- 게시글 등록 ( + 이미지 업로드), 게시글 수정, 삭제,  신고<br>
-- 게시글 상세 페이지 확인<br>
-- 댓글 등록, 삭제, 신고<br>
-- 좋아요 및 좋아요 취소<br>
-- 상 하단 Nav 및 모달 기능<br>
-- 상품 수정 및 삭제, 웹사이트 방문<br>
--  Splash 페이지 animation<br>

- 디자인<br>
-- 로고 및 아이콘 등 컨셉 디자인 담당<br>
-- Mockup 이미지 제작<br>
<br>
<br>
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
## [🧷기술 스택 상세 설명으로 이동](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/wiki/기술-스택-선택-이유)
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





## 기능 시연

## [🧷기능 상세 설명으로 이동](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/wiki/기능-상세-설명)

1) 홈

| splash | 로그인 | 회원 가입 |
| ------ | ------ | ------ | 
| ![스플래쉬](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/bc9971ac-6d01-4ecd-96dc-2abd7d07eb79) | ![로그인](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/21aa1964-c15c-478c-83a8-868b7f5756ca) | ![회원가입](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/a1765abf-abe0-47ec-85f4-3fb9aca50587) |

| 홈 피드 | 검색 | 
| ------ | ------ |
| ![홈피드](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/91ccb32e-5881-4c5a-ac6b-6b016da5e3a1) | ![검색](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/2d82fa1c-0083-4b8e-b7b9-cd243e95642e)
  

| 채팅 | 404 페이지 | 
| ------ | ------ |
| ![채팅](https://github.com/FRONTENDSCHOOL5/final-20-BebeMarket/assets/99380780/c4190c98-f535-4c70-86cd-3cf719760aca)
 | 404 페이지 |

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



## 🙌 공통 주요 기능

Recoil을 이용하여 전역 상태를 관리하고, useState를 이용하여 컴포넌트 간 상태를 관리하는 방식을 사용하여 상태를 효율적으로 관리하고 있습니다. <br>
또한, 커스텀 InputBox 컴포넌트를 작성하여 코드의 가독성을 높이고 있습니다. <br>
이를 통해 코드의 유지보수성을 높이고, 사용자 경험을 개선하고자 노력하고 있습니다. <br>
마지막으로, axios를 활용하여 API 요청을 처리하고 있습니다. 이를 통해 비동기 처리를 직관적으로 구현하고 있습니다.<br>
따라서 이 프로젝트의 강점은 Recoil과 useState를 통해 상태를 효율적으로 관리하고 있고<br>
axios를 활용하여 비동기 처리를 구현하고 있어 코드의 직관성을 높였습니다.


## 🌷적극적인 깃허브 활용 (참고 - 수정하기)

태스크, 이슈, PR 관리 등에 깃허브를 적극적으로 활용하였습니다.

구체적인 PR 작성
PR에는 이슈를 링크해 어떻게 해결했는지, 어떤 글을 참고했는 지에 대한 설명과 중점적으로 봐주었으면 하는 부분을 명시해 효율적인 코드 리뷰를 유도하였습니다.

Issue와 Pull Request에 템플릿을 적용
깃허브의 Issue와 Pull Request에 템플릿을 적용하여 커뮤니케이션에 사용되는 비용을 줄이고자 하였습니다.
FEATURE, BUG 두 가지 Issue 템플릿을 만들어 사용하였습니다.

깃허브 위키
📑깃허브 위키에 코딩, 커밋, PR 컨벤션을 정리해 두어 편하게 볼 수 있도록 하였습니다.


## ❓ Recoil 사용 이유

Recoil을 사용하는 이유는 대표적으로 세 가지가 있습니다. 

1) Recoil은 상태를 효과적으로 관리할 수 있습니다.<br>
컴포넌트 간에 공유되는 다양한 상태를 효과적으로 관리할 수 있어서, 복잡한 상태를 관리하는 것이 용이해집니다.<br>
예를 들어, 팔로워 정보 조회 기능에서 useRecoilValue를 이용하여 인증된 사용자만이 팔로워 정보를 조회할 수 있도록 설정할 수 있습니다. 

2) Recoil은 업데이트 성능을 최적화할 수 있습니다. <br>
Recoil을 사용하면 컴포넌트를 즉각적으로 리렌더링하지 않고, 변경된 값을 Recoil Store에서 가져오기 때문에 성능 개선이 가능합니다. <br>
또한, 변경된 상태의 범위가 제한됨으로써 불필요한 렌더링을 최적화할 수 있습니다. <br>
예를 들어, 팔로워 정보를 업데이트할 때, useState를 이용해 각 컴포넌트 상태를 저장하고 API로부터 정보를 업데이트하는 것이 성능 최적화에 도움이 됩니다. 

3) Recoil은 중앙 집중화를 가능케 합니다. <br>
Recoil을 사용하면 상태를 관리하는 패턴이 일관성을 유지하므로, 상태 업데이트 로직을 직관적으로 작성할 수 있습니다. <br>
이에 따라 컴포넌트에서 중앙 집중적으로 상태를 변경하는 패턴을 유지하면서 코드 가독성도 높아집니다.<br>
예를 들어, 로그인 여부나 계정 정보를 전역 상태로 관리하여 리액트 애플리케이션 전역에서 필요한 상태를 공유할 수 있도록 관리하는 것이 중앙 집중화를 가능케 합니다.<br>
따라서 Recoil을 사용하는 이유는 상태를 효율적으로 관리하고 전역 상태를 공유하여 코드의 복잡도를 낮추기 위함입니다.

##  ✨ 앞으로의 또 다른 시작 ✨

- 맵 API 활용
- 웹 접근성을 고려해 시각, 청각, 지체, 인지적 장애 등 다양한 장애를 가진 사용자들이 웹 사이트나 애플리케이션을 사용할 때,
  어떤 방식으로든 이용이 가능하도록 보장
- 




