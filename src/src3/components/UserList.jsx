import User from "./User";
const UserList = ({ users, toggleActivity }) => {
  return (
    <>
      <h1 className="title-list">User List</h1>
      <div className="user-list">
        {users.map((user) => (
          <User key={user.id} id={user.id} name={user.name} email={user.email} isActive={user.isActive} toggleActivity={toggleActivity} />
        ))}
      </div>
    </>
  );
};
export default UserList;
