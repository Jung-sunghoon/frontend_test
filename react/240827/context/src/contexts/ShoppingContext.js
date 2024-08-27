import { createContext } from "react";

export const ShoppingContext = createContext([
  { id: 1, name: "노트북", price: 1000 },
  { id: 2, name: "스마트폰", price: 500 },
  { id: 3, name: "태블릿", price: 300 },
]);
