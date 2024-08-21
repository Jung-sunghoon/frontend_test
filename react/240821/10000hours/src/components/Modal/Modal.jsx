import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ setOpen, open }) => {
  const handleModalClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <>
      <div className={`${styles.cheerModal} ${open ? styles.on : null}`}>
        <div className={styles.modalPopup}>
          <p className={styles.cheerText1}>화이팅!!</p>
          <p className={styles.cheerText2}>당신의 꿈을 응원합니다!</p>
          <picture>
            <source media="(max-width: 720px)" srcSet="./img/licatMobile.png" />
            <img src="/img/licat.png" alt="라이캣 이미지" />
          </picture>
          <button className={styles.closeBtn} onClick={handleModalClose}>
            <span>종료하고 진짜 </span>훈련하러 가기 GO!GO!
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
