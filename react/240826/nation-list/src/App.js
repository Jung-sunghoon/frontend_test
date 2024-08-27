import React from "react";
import NationList from "./components/NationList";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Item = styled.div`
  margin: 60px auto;
  max-width: 300px;
  h2 {
    margin: 0 0 20px 0;
  }

  ul {
    list-style: none;
    padding: 10px;
  }

  li {
    border: 1px solid lightgray;
    padding: 10px;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 20px 0;
  }
`;

const App = () => {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();

        setNations(data);
      } catch (error) {
        console.error("데이터를 가져오는데 문제가 발생했습니다!", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <Item>
      <h1>나라 목록</h1>
      <ul>
        {nations.map((nation) => (
          <NationList
            key={nation.id}
            id={nation.id}
            title={nation.title}
            population={nation.population}
            loc={nation.loc}
          />
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations?loc=europe");
          }}
        >
          유럽 목록
        </button>
      </div>
    </Item>
  );
};

export default App;
