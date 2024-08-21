import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <>
      <footer id={styles.footer}>
        <section className={styles.footerContainer}>
          <img src="/img/logo.png" alt="위니브 로고" />
          <p className={styles.footerText}>
            ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에
            있습니다. 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수
            있습니다.
          </p>
        </section>
      </footer>
    </>
  );
};

export default footer;
