import React, { useState } from 'react';
import { Container, Ul, Li, GrayLine, Button } from '../styled';
import ProductAlert from './ProductAlert';
import { useNavigate } from 'react-router-dom';

export default function ProductModal({
  setisModalOpen,
  isMyProfile,
  productList,
}) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const handleToEdit = () => {
    navigate('/product/edit/${productId}'); //백틱으로 나중에바꿔주기
  };
  console.log(productList, 'ji');
  return (
    <>
      <Container onClick={() => setisModalOpen(false)}></Container>
      <Ul>
        <GrayLine></GrayLine>
        {isMyProfile ? (
          <>
            <Li>
              <Button onClick={() => setIsAlertOpen(true)}>삭제</Button>
            </Li>
            <Li>
              <Button onClick={handleToEdit}>수정</Button>
            </Li>
            <Li>
              <Button>웹사이트에서 상품 보기</Button>
            </Li>
          </>
        ) : (
          <Li>
            <a
              href={productList.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>웹사이트에서 상품 보기</Button>
            </a>
          </Li>
        )}
      </Ul>
      {isAlertOpen ? <ProductAlert setIsAlertOpen={setIsAlertOpen} /> : null}
    </>
  );
}
