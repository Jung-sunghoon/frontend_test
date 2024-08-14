import { useState } from "react";
import Licat from "./components/Licat";
import Time from "./components/Time";

function App4() {
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1);
    console.log(like);
  }

  return (
    <div>
      <Licat name="gary" />
      <Time />
      <button onClick={clickLike}>버튼입니다. {like}</button>
    </div>
  );
}

export default App4;
