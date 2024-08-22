import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow);

  const modalOpen = () => {
    setModalShow(true);
  };

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      <Modal modalShow={modalShow} modalClose={modalClose} />
    </div>
  );
}
export default App;
