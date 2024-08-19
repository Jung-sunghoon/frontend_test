import { useState } from "react";
import ButtonList from "./components/ButtonList";
import Display from "./components/Display";
import "./reset.css";
import "./App3.css";

export const emotionList = [
  "좋아요! 😃",
  "정말 좋아요! 🤭",
  "최고에요! 😄",
  "미쳤어요!! 🤪",
];

function App3() {
  const [emo, setEmo] = useState("");

  const handleEmotionClick = (selectedEmotion) => {
    setEmo(selectedEmotion);
  };

  return (
    <div className="main">
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <ButtonList
        emotionList={emotionList}
        onEmotionClick={handleEmotionClick}
      />
      <Display emotion={emo} />
    </div>
  );
}

export default App3;
