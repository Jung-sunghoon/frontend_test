import React from "react";

export default function DisplayMood({ mood }) {
  return <div>{mood ? `기분이 ${mood}` : "아직 선택하지 않았어요..."}</div>;
}
