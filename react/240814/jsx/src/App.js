import "./App.css";

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  // 시간을 12단위로 표현하는 방법.
  const hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();

  // 오전, 오후 판단
  const ampm = today.getHours() > 12 ? "오후" : "오전";

  // 분이 한자리일 경우에 앞에 0을 붙이기
  const minutes =
    today.getMinutes() > 10 ? today.getMinutes() : "0" + today.getMinutes();
  const seconds = today.getSeconds();

  return (
    <div className="myDiv">
      <p className="year">년: {year}</p>
      <p className="monthDate">
        월/일: {month}/{date}
      </p>
      <p className="time">
        시간: {ampm} {hour}시 {minutes}분 {seconds}초
      </p>
    </div>
  );
}

export default App;
