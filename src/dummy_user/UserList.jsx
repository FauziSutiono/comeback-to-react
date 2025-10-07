export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li style={{ listStyleType: "none" }} className="read-the-docs" key={user.id}>
          <h4>{user.id}</h4>
          <a>{user.name}</a>
        </li>
      ))}
    </ul>
  );
};
