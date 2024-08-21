import React from "react";
import styles from "./Main.module.css";

const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectValue = e.target.subject.value;
    const timeValue = e.target.time.value;
    onSubmit(subjectValue, timeValue);
  };

  return (
    <form
      className={styles.inputForm}
      id={styles.trainingForm}
      onSubmit={handleSubmit}
    >
      <section className={styles.inputContainer}>
        <p>
          나는
          <input
            type="text"
            id={styles.subject}
            name="subject"
            placeholder="예)프로그래밍"
            required
          />
          전문가가 될 것이다.
        </p>
        <p>
          그래서 앞으로 매일 하루에
          <input
            type="text"
            id={styles.time}
            name="time"
            placeholder="예)5시간"
            required
          />
          시간씩 훈련할 것이다.
        </p>
      </section>
      <section className={styles.submitBtnContainer}>
        <button type="submit" className={styles.submitBtn}>
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
        <img
          src="/img/click.png"
          alt="클릭 이미지"
          className={styles.clickImg}
        />
      </section>
    </form>
  );
};

export default Form;
