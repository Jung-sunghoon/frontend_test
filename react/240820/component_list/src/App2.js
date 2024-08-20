import React, { useState } from "react";
import "./App2.css";
import UserList from "./components/user/UserList";

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
  { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
  { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
];

export default function App2() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (id) => {
    setSelectedUserId(id === selectedUserId ? null : id);
  };

  return (
    <>
      <h1>유저 정보 목록</h1>
      <UserList
        users={users}
        selectedId={selectedUserId}
        userClick={handleUserClick}
      />
    </>
  );
}
