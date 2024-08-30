import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { sale, soldOut } from "../modules/stockCounter";

const Message = () => {
  // `stock`과 `goods` 상태를 `goodsReducer`로부터 가져옵니다.
  const { stock, message } = useSelector((state) => {
    return {
      stock: state.goodsReducer.stock,
      message: state.stockReducer.message,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const onSale = () => dispatch(sale());
  const onSoldOut = () => dispatch(soldOut());

  useEffect(() => {
    if (stock === 0) {
      onSoldOut();
    } else {
      onSale();
    }
  }, [stock]);

  return (
    <div>
      <span>{message}</span>
    </div>
  );
};

export default Message;
