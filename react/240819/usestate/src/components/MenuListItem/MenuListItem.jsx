import React from "react";

export default function MenuListItem({ mood, moodClick, isSelected }) {
  const onItemClick = () => {
    moodClick(mood);
  };

  const getBackgroundColor = () => {
    return isSelected ? "skyblue" : null;
  };

  return (
    <li>
      <button
        style={{ backgroundColor: getBackgroundColor() }}
        onClick={onItemClick}
      >
        기분이: {mood}
      </button>
    </li>
  );
}
