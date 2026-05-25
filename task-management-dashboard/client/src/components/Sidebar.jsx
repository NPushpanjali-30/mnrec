export default function Sidebar({ setUser, setPage }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <p onClick={() => setPage("tasks")}>Tasks</p>
      <p onClick={() => setPage("projects")}>Projects</p>
      <p onClick={() => setPage("profile")}>Profile</p>
      <p onClick={() => setPage("settings")}>Settings</p>

      <button className="logout" onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
}