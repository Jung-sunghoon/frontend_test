import { useRef, useState } from "react";

export default function App4() {
  // 시작한 시간
  const startTime = useRef(null);
  // 누적 시간
  const [secondsPassed, setSecondsPassed] = useState(null);
  // 인터벌함수의 id
  const intervalId = useRef(null);

  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    startTime.current = Date.now() - secondsPassed;

    intervalId.current = setInterval(() => {
      setSecondsPassed(Date.now() - startTime.current);
    }, 10);

    setIsRunning(true);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setSecondsPassed(null);
    setIsRunning(false);
  }

  return (
    <>
      <h1>Time passed: {(secondsPassed / 1000).toFixed(3)}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
