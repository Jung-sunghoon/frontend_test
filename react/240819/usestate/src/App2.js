import Resume from "./components/Resume";
import { useState } from "react";

function App2() {
  const [like, setLike] = useState("");

  function clickLike() {
    // like === "" ? setLike("Like") : setLike("");
    setLike(like ? "" : "Like");
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <button onClick={clickLike}>like</button> <span>{like}</span>
    </div>
  );
}

export default App2;
