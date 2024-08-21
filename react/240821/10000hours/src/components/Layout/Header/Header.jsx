import React from "react";
import styles from "./Header.module.css";

const header = () => {
  return (
    <header id={styles.header}>
      <section className={styles.headerImgContainer}>
        <img
          src="img/title.png"
          alt="타이틀 이미지"
          className={styles.headerImg}
        />
      </section>
    </header>
  );
};

export default header;
