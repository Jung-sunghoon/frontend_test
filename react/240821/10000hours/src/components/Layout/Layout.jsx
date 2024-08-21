import React from "react";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ setOpen }) => {
  return (
    <>
      <Header />
      <Main setOpen={setOpen} />
      <Footer />
    </>
  );
};

export default Layout;
