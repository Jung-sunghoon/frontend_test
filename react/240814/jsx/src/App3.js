import React from "react";

const items = [
  { id: 1, name: "Apple", desc: "빨간건 사과" },
  { id: 2, name: "Banana", desc: "바나나는 길어" },
  { id: 3, name: "Cherry", desc: "체리는 비싸" },
];

function FruitItem({ item }) {
  return (
    <React.Fragment>
      <dt>{item.name}</dt>
      <dd>{item.desc}</dd>
    </React.Fragment>
  );
}

function FruitList({ items }) {
  return (
    <dl>
      {items.map((item) => (
        <FruitItem key={item.id} item={item} />
      ))}
    </dl>
  );
}

function App3() {
  return <FruitList items={items} />;
}

export default App3;
