import PropTypes from "prop-types";
export const User = ({ id, name, email, isActive, toggleActivity }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p className="user-card-status">Status: {isActive ? "Active" : "Inactive"}</p>

      <button className={`user-card-button ${isActive ? "deactive" : "active"}`} onClick={() => toggleActivity(id)}>
        {isActive ? "Deactive" : "Activate"}
      </button>
    </div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  toggleActivity: PropTypes.func.isRequired,
};
User.defaultProps = {
  isActive: false,
};
