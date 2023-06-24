import React, { useState } from 'react';
import {
  AlertContainer,
  DeleteConfirm,
  ReportDone,
  ButtonDiv,
  CancleButton,
} from '../styled';

import { useLocation, useNavigate } from 'react-router-dom';
import { accountNameState } from '../../../atoms/Atoms';
export default function ReportModal({ setisModalOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ReportDone>
      신고되었습니다!
      <CancleButton
        onClick={() => {
          setisModalOpen(false);
        }}
      >
        X
      </CancleButton>
    </ReportDone>
  );
}
