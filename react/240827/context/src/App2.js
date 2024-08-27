import React, { useState, useContext } from "react";
import { createContext } from "react";

// ShoppingContext 생성
export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  return (
    <ShoppingContext.Provider
      value={{ products, cart, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

// ProductList 컴포넌트
const ProductList = () => {
  const { products, addToCart } = useContext(ShoppingContext);

  return (
    <div>
      <h2>상품 목록</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} - {item.price}원
            </span>
            <button onClick={() => addToCart(item)}>카트에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Cart 컴포넌트
const Cart = () => {
  const { cart, removeFromCart } = useContext(ShoppingContext);

  return (
    <div>
      <h2>장바구니</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - 수량: {cartItem.quantity}
              <button onClick={() => removeFromCart(cartItem.id)}>제거</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>장바구니가 비어있습니다.</p>
      )}
    </div>
  );
};

// App2 컴포넌트
const App2 = () => {
  const { cart } = useContext(ShoppingContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>쇼핑몰</h1>
      <p>카트에 있는 상품 개수: {totalItems}</p>
      <ProductList />
      <Cart />
    </div>
  );
};

// 최종 App 컴포넌트
const App = () => (
  <ShoppingProvider>
    <App2 />
  </ShoppingProvider>
);

export default App;
