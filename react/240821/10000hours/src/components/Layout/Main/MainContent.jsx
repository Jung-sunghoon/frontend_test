import React from "react";
import styles from "./Main.module.css";

const MainContent = () => (
  <>
    <p className={styles.text1}>
      "연습은 어제의 당신보다 당신을 더 낫게 만든다."
    </p>
    <section className={styles.quotesContainer}>
      <div className={styles.quotesImgWrapper}>
        <p className={styles.quotesText}>
          <strong>1만 시간의 법칙</strong>은<br />
          어떤 분야의 전문가가 되기 위해서는
          <br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </div>
    </section>
  </>
);

export default MainContent;
