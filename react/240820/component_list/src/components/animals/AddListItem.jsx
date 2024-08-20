import React, { useState } from "react";

export default function AddListItem({ addAnimal }) {
  const [animalName, setAnimalName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (animalName && species && age) {
      addAnimal({ name: animalName, species, age });
      setAnimalName("");
      setSpecies("");
      setAge("");
    }
  };

  const handleAnimalNameInput = (e) => {
    console.log("animalName", e.target.value);
    setAnimalName(e.target.value);
  };

  const handleSpeciesInput = (e) => {
    console.log("species", e.target.value);
    setSpecies(e.target.value);
  };

  const handleAgeInput = (e) => {
    console.log("age", e.target.value);
    setAge(e.target.value);
  };

  return (
    <form>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <input
          value={animalName}
          type="text"
          placeholder="이름"
          onChange={handleAnimalNameInput}
        />
        <input
          value={species}
          type="text"
          placeholder="species"
          onChange={handleSpeciesInput}
        />
        <input
          value={age}
          type="text"
          placeholder="나이"
          onChange={handleAgeInput}
        />
        <button type="submit" onClick={handleSubmit}>
          추가하기
        </button>
      </fieldset>
    </form>
  );
}
