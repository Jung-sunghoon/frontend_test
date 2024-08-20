import React from "react";
import AnimalListItem from "./AnimalListItem";

export default function AnimalList({ animals }) {
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalListItem
          key={animal.id}
          name={animal.name}
          species={animal.species}
          age={animal.age}
        />
      ))}
    </ul>
  );
}
