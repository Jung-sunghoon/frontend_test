import React from "react";
import PriceFormatter from "./PriceFormatter";

const ProductImg = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

const ProductTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

const ProductSubTitle = ({ children }) => {
  return <h3>{children}</h3>;
};

const ProductDescription = ({ children }) => {
  return <p>{children}</p>;
};

const ProductPrice = ({ price, currencyCode }) => {
  return <PriceFormatter price={price} currencyCode={currencyCode} />;
};

const ContCard = ({ children }) => {
  return <article>{children}</article>;
};

export {
  ContCard,
  ProductImg,
  ProductTitle,
  ProductDescription,
  ProductSubTitle,
  ProductPrice,
};
