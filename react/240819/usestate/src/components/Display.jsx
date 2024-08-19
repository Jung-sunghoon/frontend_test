function Display({ emotion }) {
  return (
    <div className="display">
      {emotion ? `기분이 ${emotion}` : "아직 선택하지 않았어요..."}
    </div>
  );
}

export default Display;
