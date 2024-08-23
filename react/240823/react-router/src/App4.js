import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// - **Home Page :** /
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

// - **Product Detail Page** : /products/:id
// - ex) /products/1 , /products/2, /products/3, /products/4
const ProductDetail = () => {
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
};

// - **Product Detail Notice Page :** /products/:id/notice
// - ex) /products/1/notice , /products/2/notice…
const ProductDetailNotice = () => {
  return (
    <div>
      <h1>Product Notice</h1>
    </div>
  );
};

// - **Cart Page :** /cart
const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

// - **User Page :** /users
const User = () => {
  return (
    <div>
      <h1>User</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

// - **Coupon Page :** /users/coupon
const Coupon = () => {
  return (
    <div>
      <h1>Coupon</h1>
    </div>
  );
};

// - **Question Page :** /users/question
const Question = () => {
  return (
    <div>
      <h1>Question</h1>
    </div>
  );
};

// - **Notice Page :** /users/notice
const Notice = () => {
  return (
    <div>
      <h1>Notice</h1>
    </div>
  );
};

const App4 = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/1">Product Detail</Link>
          </li>
          <li>
            <Link to="/products/1/notice">Product Notice</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
          <ul>
            <li>
              <Link to="/users/coupon">User Coupon</Link>
            </li>
            <li>
              <Link to="/users/question">User Question</Link>
            </li>
            <li>
              <Link to="/users/notice">User Notice</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/notice" element={<ProductDetailNotice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<User />}>
          <Route index element="" />
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App4;
