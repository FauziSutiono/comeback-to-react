const User = ({ id, name, email, isActive, toggleActivity }) => {
  return (
    <div className="list-card">
      <h2 className="list-name">{name}</h2>
      <p className="list-email">{email}</p>
      <p className="list-state">{isActive}</p>
      <button className={`button ${isActive ? "deactivate" : "activate"}`} onClick={() => toggleActivity(id)}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

export default User;
