import React from 'react';
import * as S from './MapModal.style';

const Modal = ({ closeModal, selectedItem }) => {
  return (
    <S.ModalWrapper>
      <S.ModalOverlay onClick={closeModal} />
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>어린이집 정보</S.ModalTitle>
          <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <S.Item>
            <S.Label>이름: </S.Label>
            <S.Detail>{selectedItem.CRNAME}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>전화번호: </S.Label>
            <S.Detail>{selectedItem.CRTELNO}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>유형: </S.Label>
            <S.Detail>{selectedItem.CRTYPENAME}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>보육실 수: </S.Label>
            <S.Detail>{selectedItem.NRTRROOMCNT}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>교직원수: </S.Label>
            <S.Detail>{selectedItem.CHCRTESCNT}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>정원 및 현원: </S.Label>
            <S.Detail>
              {selectedItem.CRCAPAT} / {selectedItem.CRCHCNT}
            </S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>통학차량: </S.Label>
            <S.Detail>{selectedItem.CRCARGBNAME}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>CCTV 설치수: </S.Label>
            <S.Detail>{selectedItem.CCTVINSTLCNT}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>주소: </S.Label>
            <S.Detail>{selectedItem.CRADDR}</S.Detail>
          </S.Item>
          <S.Item>
            <S.Label>홈페이지: </S.Label>
            <S.Detail>
              {selectedItem.CRHOME ? (
                <a href={selectedItem.CRHOME} target="_blank" rel="noreferrer">
                  {selectedItem.CRHOME}
                </a>
              ) : (
                '제공되지 않습니다'
              )}
            </S.Detail>
          </S.Item>
        </S.ModalBody>
        <S.ModalFooter>
          <S.FooterButton onClick={closeModal}>닫기</S.FooterButton>
        </S.ModalFooter>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default React.memo(Modal);
