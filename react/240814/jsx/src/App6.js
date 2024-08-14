import ColorText from "./components/ColorText";

const list = ["red", "green", "blue"];

function App6() {
  return (
    <div>
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />

      {list.map((color) => (
        <ColorText color={color} />
      ))}
    </div>
  );
}

export default App6;
