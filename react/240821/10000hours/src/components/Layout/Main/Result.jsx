import React from "react";
import styles from "./Main.module.css";

const Result = ({ subject, days }) => (
  <section className={styles.formResult} id={styles.resultSection}>
    <p>
      당신은 <strong id={styles.subjectResult}>{subject}</strong> 전문가가 되기
      위해서
    </p>
    <p>
      대략 <strong id={styles.daysResult}>{days}</strong> 일 이상 훈련하셔야
      합니다!:)
    </p>
  </section>
);

export default Result;
