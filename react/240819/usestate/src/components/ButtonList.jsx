function ButtonList({ emotionList, onEmotionClick }) {
  return (
    <div className="button-list">
      {emotionList.map((emo, index) => (
        <button key={index} onClick={() => onEmotionClick(emo)}>
          기분이: {emo}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
