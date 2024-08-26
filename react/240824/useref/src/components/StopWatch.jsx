import { useRef, useState } from "react";

export default function Stopwatch() {
  // 시작한 시간
  const startTime = useRef(null);
  // 누적 시간
  const elapseTime = useRef(null);
  // 현재 시간
  const [now, setNow] = useState(null);
  // 인터벌함수의 id
  const intervalId = useRef(null);

  function handleStart() {
    if (!intervalId.current) {
      // 타이머가 실행 중이지 않을 때만 시작
      startTime.current = Date.now() - elapseTime.current; // 현재 시간에서 누적 시간을 뺀 값으로 시작 시간 설정
      setNow(Date.now());

      intervalId.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
  }

  function handleStop() {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      elapseTime.current = Date.now() - startTime.current; // 멈춘 시간까지의 경과 시간 저장
    }
  }

  function handleReset() {
    clearInterval(intervalId.current);
    intervalId.current = null;
    startTime.current = null;
    elapseTime.current = 0; // 누적 시간을 0으로 초기화
    setNow(null);
  }

  let secondsPassed = 0;
  if (startTime.current !== null && now !== null) {
    secondsPassed = (now - startTime.current) / 1000; // 밀리초를 초 단위로 변환
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
