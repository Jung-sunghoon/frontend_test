import "../../App2.css";

export default function UserListItem({ user, isSelected, onClick }) {
  return (
    <div>
      <dt>
        <span onClick={() => onClick(user.id)}>{user.name}</span>
      </dt>
      <dd className={`user-detail ${isSelected ? "active" : null}`}>
        <p>{user.email}</p>
        <p>{user.job}</p>
      </dd>
    </div>
  );
}
