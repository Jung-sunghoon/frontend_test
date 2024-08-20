import React from "react";
import UserListItem from "./UserListItem";
import "../../App2.css";

export default function UserList({ users, selectedId, userClick }) {
  return (
    <dl>
      {users.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          isSelected={user.id === selectedId}
          onClick={userClick}
        />
      ))}
    </dl>
  );
}
