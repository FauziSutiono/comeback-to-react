const AdminPanel = ({ user }) => {
  if (!user || user?.role !== "admin") {
    return <p style={{ color: "red", fontWeight: "bold" }}>Access Denied</p>;
  }

  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <h2>Admin Panel</h2>
      <p>Welcome, {user.name}! You have administrator access.</p>
    </div>
  );
};

export const Security = () => {
  const adminUser = { name: "Alice", role: "admin" };
  const regularUser = { name: "Bob", role: "user" };
  const guestUser = null;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Role-Based Access Control (RBAC) Example</h1>
      <h3>Admin User:</h3>
      <AdminPanel useer={adminUser} />
      <h3>Regular User:</h3>
      <AdminPanel user={regularUser} />
      <h3>Guest (No User Logged In)</h3>
      <AdminPanel user={guestUser} />
    </div>
  );
};
