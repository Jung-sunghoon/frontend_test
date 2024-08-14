import "./App2.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function TripList() {
  return (
    <ul className="list-area">
      {list.map((list) => (
        <li key={list.no} className={list.visited ? "visited" : null}>
          {list.area}
        </li>
      ))}
    </ul>
  );
}

function App2() {
  return <TripList />;
}

export default App2;
