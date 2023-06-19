import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopUploadNav from '../../components/common/topNav/TopUploadNav';
import * as S from './UploadProduct.style';

import InputBox from '../../components/common/input/InputBox';
import EditProfileImage from '../../assets/images/img-button.svg';

export default function UploadProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState('');
  const [productError, setProductError] = useState('');
  const [isProductValid, setIsProductValid] = useState(false);

  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [isPriceValid, setIsPriceValid] = useState(false);

  const [salesLink, setSalesLink] = useState('');
  const [salesLinkError, setSalesLinkError] = useState('');
  const [isSalesLinkValid, setIsSalesLinkValid] = useState(false);

  const [isProductRed, setIsProductRed] = useState(false);
  const [isPriceRed, setIsPriceRed] = useState(false);
  const [isSalesLinkRed, setIsSalesLinkRed] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // 상품명 유효성 검사
  const handleProductChange = (e) => {
    const currentProduct = e.target.value;
    setProduct(currentProduct);
    if (currentProduct === '') {
      setIsProductRed(true);
      setIsProductValid(false);
      setProductError('* 상품명을 입력해주세요.');
    } else if (currentProduct.length < 2 || currentProduct.length >= 15) {
      setIsProductRed(true);
      setIsProductValid(false);
      setProductError('* 2~15자 이내여야 합니다.');
    } else {
      setIsProductRed(false);
      setIsProductValid(true);
      setProductError('');
    }
  };

  // 가격 유효성 검사
  const handlePriceChange = (e) => {
    const currentPrice = e.target.value;

    // ","를 제거한 숫자 문자열 리턴
    const filteredPrice = currentPrice.replace(/,/g, '');

    const priceRegex = /^[0-9]+$/;

    if (filteredPrice === '') {
      setIsPriceValid(false);
      setPrice('');
      setPriceError('* 가격을 입력해주세요.');
    } else if (!priceRegex.test(filteredPrice)) {
      setIsPriceRed(true);
      setIsPriceValid(false);
      setPriceError('* 숫자만 입력해주세요.');
      setPrice('NaN');
    } else {
      const parsedPrice = parseInt(filteredPrice);

      setIsPriceRed(false);
      setIsPriceValid(true);
      setPriceError('');

      // 천 단위 쉼표 추가
      const formattedPrice = parsedPrice.toLocaleString();
      setPrice(formattedPrice);
      e.target.value = formattedPrice;
    }
  };

  // 판매 링크 유효성 검사
  const handleSalesLinkChange = (e) => {
    const currentSalesLink = e.target.value;
    setSalesLink(currentSalesLink);
    const salesLinkRegex =
      /^(https|http):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;

    if (currentSalesLink === '') {
      setIsSalesLinkValid(false);
      setSalesLinkError('* URL을 입력해주세요.');
    } else if (!salesLinkRegex.test(currentSalesLink)) {
      setIsSalesLinkRed(true);
      setIsSalesLinkValid(false);
      setSalesLinkError('* URL을 입력해주세요.');
    } else {
      setIsSalesLinkRed(false);
      setIsSalesLinkValid(true);
      setSalesLinkError('');
    }
  };

  // 버튼 활성화
  useEffect(() => {
    if (isProductValid && isPriceValid && isSalesLinkValid) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
      // navigate('/profile/:accountname');
    }
  }, [isProductValid, isPriceValid, isSalesLinkValid]);

  return (
    <div>
      <TopUploadNav>
        {
          <S.CustomSaveButton active={isButtonDisabled}>
            저장
          </S.CustomSaveButton>
        }
      </TopUploadNav>
      <S.Product>
        <form>
          <S.CustomBoxLabel>이미지 업로드</S.CustomBoxLabel>
          <S.ImageContainer>
            <S.ProductThumbnail>
              <S.ProductImage src={EditProfileImage} />
            </S.ProductThumbnail>
          </S.ImageContainer>

          <InputBox
            label="상품명"
            id="product"
            type="text"
            placeholder={'2~15자 이내여야 합니다.'}
            onChange={handleProductChange}
            value={product}
            borderBottomColor={isProductRed ? 'on' : null}
            show={isProductRed ? 'on' : null}
            errorMessage={productError}
          />
          <InputBox
            label="가격"
            id="price"
            type="text"
            placeholder={'숫자만 입력 가능합니다.'}
            onChange={handlePriceChange}
            value={price}
            borderBottomColor={isPriceRed ? 'on' : null}
            show={isPriceRed ? 'on' : null}
            errorMessage={priceError}
          />
          <InputBox
            label="판매링크"
            id="salesLink"
            type="text"
            placeholder={'URL을 입력해 주세요.'}
            onChange={handleSalesLinkChange}
            value={salesLink}
            borderBottomColor={isSalesLinkRed ? 'on' : null}
            show={isSalesLinkRed ? 'on' : null}
            errorMessage={salesLinkError}
          />
        </form>
      </S.Product>
    </div>
  );
}
