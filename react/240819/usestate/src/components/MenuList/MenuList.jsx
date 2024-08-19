import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.css";

const menus = [
  "좋아요! 😃",
  "정말 좋아요! 🤭",
  "최고에요! 😄",
  "미쳤어요!! 🤪",
];

export default function MenuList({ onItemClick, mood }) {
  return (
    <ul>
      {menus.map((moodEl, index) => {
        return (
          <MenuListItem
            key={index}
            mood={moodEl}
            moodClick={onItemClick}
            isSelected={mood === moodEl}
          />
        );
      })}
    </ul>
  );
}
