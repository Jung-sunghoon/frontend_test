import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import MainContent from "./MainContent";
import styles from "./Main.module.css";

const Main = ({ setOpen }) => {
  const [subject, setSubject] = useState("");
  const [days, setDays] = useState(0);
  const [resultVisible, setResultVisible] = useState(false);

  const handleFormSubmit = (subjectValue, timeValue) => {
    const hours = parseFloat(timeValue);
    const totalHours = 10000;
    const daytimes = Math.ceil(totalHours / hours);

    setSubject(subjectValue);
    setDays(daytimes);
    setResultVisible(true);
  };

  const handleModalOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <main id={styles.main}>
      <MainContent />
      <Form onSubmit={handleFormSubmit} />
      {resultVisible && <Result subject={subject} days={days} />}
      <section className={styles.mainBtnWrapper}>
        <button className={styles.modalBtn} onClick={handleModalOpen}>
          훈련하러 가기 GO!GO!
        </button>
        <button className={styles.shareBtn}>공유하기</button>
      </section>
    </main>
  );
};

export default Main;
