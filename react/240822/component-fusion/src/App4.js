import React, { useState } from "react";
import styled from "styled-components";

// 컨테이너 카드 컴포넌트
const ContCard = styled.div`
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  margin: 20px auto;
`;

// 제품 이미지 컴포넌트
const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 16px;
`;

// 제품 제목 컴포넌트
const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

// 제품 부제목 컴포넌트
const ProductSubTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  color: #777;
  margin-bottom: 16px;
`;

// 제품 설명 컴포넌트
const ProductDescription = styled.p`
  font-size: 12px;
  color: #555;
  line-height: 1.4;
  margin-bottom: 16px;
`;

// 제품 가격 태그 컴포넌트
const PriceTag = styled.div`
  font-size: 1.4em;
  color: #000;
  font-weight: bold;
  margin-top: 15px;
`;

// 제품 가격 컴포넌트
const ProductPrice = ({ price, currency }) => {
  const formatPrice = (price, currency) => {
    switch (currency) {
      case "KRW":
        return `${price.toLocaleString("ko-KR")} 원`;
      case "USD":
        return `${price.toLocaleString("USD")} $`;
      case "EUR":
        return `${price.toLocaleString("EUR")} €`;
      default:
        return `${price} ${currency}`;
    }
  };

  return <PriceTag>{formatPrice(price, currency)}</PriceTag>;
};

const App4 = () => {
  const currencyList = ["KRW", "USD", "EUR"];
  const [currency, setCurrency] = useState("KRW");
  const [price, setPrice] = useState(50000);
  const exchangeRates = {
    KRW: 1,
    USD: 0.00075, // 예시 환율: 1원당 0.00075달러
    EUR: 0.00068, // 예시 환율: 1원당 0.00068유로
  };

  setTimeout(() => {
    const randomCurrency =
      currencyList[Math.floor(Math.random() * currencyList.length)];
    setCurrency(randomCurrency);
    setPrice(50000 * exchangeRates[randomCurrency]);
  }, 2000);

  return (
    <ContCard>
      <ProductImage
        src={"https://picsum.photos/id/237/200/300"}
        alt={"검은강아지"}
      />
      <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
      <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
      <ProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        distinctio sed molestias saepe reiciendis fugit illum enim et inventore,
        aliquam esse non nam consectetur minima atque consequuntur voluptates,
        eum quia.
      </ProductDescription>
      <ProductPrice price={price} currency={currency} />
    </ContCard>
  );
};

export default App4;
