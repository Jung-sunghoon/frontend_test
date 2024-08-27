import React from "react";

const NationList = ({ title, population, id }) => {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <span>{population}</span>
    </li>
  );
};

export default NationList;
