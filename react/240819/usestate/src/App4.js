import React, { useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";
import "./App4.css";

function App4() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <>
      <h1>오늘의 기분을 선택해주세요 😄</h1>
      <article>
        <MenuList onItemClick={setCurrentMood} mood={currentMood} />
        <DisplayMood mood={currentMood} />
      </article>
    </>
  );
}

export default App4;
