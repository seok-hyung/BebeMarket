import React, { useEffect, useState } from 'react';
import * as S from './TabMenu.style.js';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../../../assets/icon/icon-home.svg';
import chatIcon from '../../../assets/icon/icon-message-circle-1.svg';
import editIcon from '../../../assets/icon/icon-edit.svg';
import userIcon from '../../../assets/icon/icon-user.svg';
import coloredHomeIcon from '../../../assets/icon/icon-home-fill.svg';
import coloredChatIcon from '../../../assets/icon/icon-message-circle-fill.svg';
import coloredUserIcon from '../../../assets/icon/icon-user-fill.svg';
import { accountNameState } from '../../../atoms/Atoms.js';
import { useRecoilValue } from 'recoil';

export default function TabMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const myAccountname = useRecoilValue(accountNameState);

  useEffect(() => {
    if (location.pathname === '/home') {
      setActiveTab(0); //home에서 다른 사람 프로필 들어가면 계속 activeTab이 0이므로 홈에 색깔이 유지됨.
    } else if (location.pathname === '/chat') {
      setActiveTab(1);
    } else if (location.pathname.includes('/profile/')) {
      if (location.pathname === `/profile/${myAccountname}`) {
        setActiveTab(2);
      } else {
        setActiveTab(-1);
      }
    }
  }, [location.pathname]);

  return (
    <S.Nav>
      <S.Ul>
        <li
          onClick={() => {
            setActiveTab(0);
            navigate('/home');
          }}
        >
          <S.Img src={activeTab === 0 ? coloredHomeIcon : homeIcon} />
          <S.P active={activeTab === 0}>홈</S.P>
        </li>
        <li onClick={() => navigate('/chat')}>
          <S.Img src={activeTab === 1 ? coloredChatIcon : chatIcon} />
          <S.P active={activeTab === 1}>채팅</S.P>
        </li>
        <li onClick={() => navigate('/uploadpost')}>
          <S.Img src={editIcon} />
          <S.P>게시물 작성</S.P>
        </li>
        <li onClick={() => navigate(`/profile/${myAccountname}`)}>
          <S.Img src={activeTab === 2 ? coloredUserIcon : userIcon} />
          <S.P active={activeTab === 2}>프로필</S.P>
        </li>
      </S.Ul>
    </S.Nav>
  );
}
