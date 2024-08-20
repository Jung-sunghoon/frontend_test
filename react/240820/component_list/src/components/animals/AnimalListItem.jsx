import React from "react";

export default function AnimalListItem({ name, species, age }) {
  return (
    <li>
      {name}는 {species}입니다 그리고 {age}살 입니다.
    </li>
  );
}
