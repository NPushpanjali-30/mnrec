import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

import "./index.css";

const supabaseUrl =
  "https://vlsmexpqktdtyunzkzgg.supabase.co";

const supabaseKey = "sb_publishable_RxWNDzr4zfXnBIWrI1tkXg_i0aPph_6";
  

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

function App() {

  const [user, setUser] = useState(null);

  const [username, setUsername] =
    useState("Pushpanjali");

  const [newUsername, setNewUsername] =
    useState("");

  const [newEmail, setNewEmail] =
    useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  const [page, setPage] =
    useState("tasks");

  const [title, setTitle] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [dueDate, setDueDate] =
    useState("");

  const [project, setProject] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [tasks, setTasks] =
    useState([]);

  // LOGIN
  const handleLogin = async () => {

    const email =
      document.getElementById("email").value;

    if (!email) {
      alert("Enter email");
      return;
    }

    const { error } = await supabase
      .from("users")
      .insert([{ email }]);

    if (error) {
      alert(error.message);
      return;
    }

    setUser({
      email,
      username: "Pushpanjali"
    });
  };

  // ADD TASK
  const addTask = () => {

    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      dueDate,
      project,
      completed: false,
      status: "To Do"
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setPriority("Medium");
    setDueDate("");
    setProject("");
  };

  // DELETE TASK
  const deleteTask = (id) => {

    setTasks(
      tasks.filter((task) =>
        task.id !== id
      )
    );
  };

  // COMPLETE TASK
  const toggleComplete = (id) => {

    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
            status: !task.completed
              ? "Done"
              : "In Progress"
          }
        : task
    );

    setTasks(updated);
  };

  // EDIT TASK
  const editTask = (id) => {

    const newTitle =
      prompt("Edit Task");

    if (!newTitle) return;

    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: newTitle
          }
        : task
    );

    setTasks(updated);
  };

  // ANALYTICS
  const completed =
    tasks.filter((t) => t.completed).length;

  const pending =
    tasks.length - completed;

  const overdue =
    tasks.filter(
      (task) =>
        task.dueDate &&
        new Date(task.dueDate)
          < new Date() &&
        !task.completed
    ).length;

  const chartData = [
    {
      name: "Completed",
      value: completed
    },
    {
      name: "Pending",
      value: pending
    }
  ];

  // FILTER TASKS
  const filteredTasks =
    tasks.filter((task) => {

      const textMatch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All"
          ? true
          : task.status === statusFilter;

      return textMatch && statusMatch;
    });

  // LOGIN PAGE
  if (!user) {

    return (
      <div className="login-container">

        <div className="login-box">

          <h1>Task Dashboard</h1>

          <input
            id="email"
            type="email"
            placeholder="Enter Email"
          />

          <button onClick={handleLogin}>
            Login
          </button>

        </div>

      </div>
    );
  }

  return (

    <div
      className={
        darkMode
          ? "dashboard dark"
          : "dashboard"
      }
    >

      {/* SIDEBAR */}
      <div className="sidebar">

        <h2>Dashboard</h2>

        <button
          className={
            page === "tasks"
              ? "active-btn"
              : ""
          }
          onClick={() => setPage("tasks")}
        >
          Tasks
        </button>

        <button
          className={
            page === "projects"
              ? "active-btn"
              : ""
          }
          onClick={() => setPage("projects")}
        >
          Projects
        </button>

        <button
          className={
            page === "profile"
              ? "active-btn"
              : ""
          }
          onClick={() => setPage("profile")}
        >
          Profile
        </button>

        <button
          className={
            page === "settings"
              ? "active-btn"
              : ""
          }
          onClick={() => setPage("settings")}
        >
          Settings
        </button>

        <button
          className="logout-btn"
          onClick={() => setUser(null)}
        >
          Logout
        </button>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <h1>
          Welcome {username}
        </h1>

        {/* TASKS PAGE */}
        {page === "tasks" && (

          <div>

            {/* SUMMARY */}
            <div className="stats">

              <div className="stat-card total-card">
                <h3>📋 Total</h3>
                <p>{tasks.length}</p>
              </div>

              <div className="stat-card completed-card">
                <h3>✅ Completed</h3>
                <p>{completed}</p>
              </div>

              <div className="stat-card pending-card">
                <h3>⏳ Pending</h3>
                <p>{pending}</p>
              </div>

              <div className="stat-card overdue-card">
                <h3>⚠️ Overdue</h3>
                <p>{overdue}</p>
              </div>

            </div>

            {/* CHARTS */}
            <div className="charts">

              <div className="chart-box">

                <h3>Task Completion</h3>

                <PieChart width={350} height={300}>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    <Cell fill="#22c55e" />
                    <Cell fill="#ef4444" />
                  </Pie>

                  <Tooltip />

                </PieChart>

                <div className="legend">

                  <div className="legend-item">
                    <span className="green-dot"></span>
                    Completed
                  </div>

                  <div className="legend-item">
                    <span className="red-dot"></span>
                    Pending
                  </div>

                </div>

              </div>

              <div className="chart-box">

                <h3>Task Analytics</h3>

                <BarChart
                  width={400}
                  height={300}
                  data={chartData}
                >

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis allowDecimals={false} />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#2563eb"
                  />

                </BarChart>

              </div>

            </div>

            {/* SEARCH + FILTER */}
            <div className="filter-row">

              <input
                className="search-box"
                placeholder="Search Tasks"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <select
                className="status-filter"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value
                  )
                }
              >

                <option>All</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>

              </select>

            </div>

            {/* TASK FORM */}
            <div className="task-input">

              <input
                placeholder="Task Title"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
              />

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >

                <option>High</option>
                <option>Medium</option>
                <option>Low</option>

              </select>

              <input
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
              />

              <input
                placeholder="Project Name"
                value={project}
                onChange={(e) =>
                  setProject(e.target.value)
                }
              />

              <button onClick={addTask}>
                Add Task
              </button>

            </div>

            {/* TASK LIST */}
            <div className="task-grid">

              {filteredTasks.map((task) => (

                <div
                  key={task.id}
                  className="task-card"
                >

                  <h3>{task.title}</h3>

                  <p>
                    Project:
                    {" "}
                    {task.project}
                  </p>

                  <p>
                    Due:
                    {" "}
                    {task.dueDate}
                  </p>

                  <p>
                    Status:
                    {" "}
                    {task.status}
                  </p>

                  <span
                    className={`priority ${task.priority}`}
                  >
                    {task.priority}
                  </span>

                  <div className="task-actions">

                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() =>
                        toggleComplete(task.id)
                      }
                    />

                    <button
                      onClick={() =>
                        editTask(task.id)
                      }
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteTask(task.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* RECENT TASKS */}
            <div className="recent-section">

              <h2>Recent Tasks</h2>

              {tasks
                .slice(-5)
                .reverse()
                .map((task) => (

                  <div
                    key={task.id}
                    className="recent-task"
                  >

                    <div>

                      <h4>{task.title}</h4>

                      <p>{task.project}</p>

                    </div>

                    <span
                      className={`priority ${task.priority}`}
                    >
                      {task.priority}
                    </span>

                  </div>

                ))}

            </div>

          </div>

        )}

        {/* PROJECTS PAGE */}
        {page === "projects" && (

          <div className="project-card">

            <h2>Projects</h2>

            <h3>MERN Task Dashboard</h3>

            <p>
              Progress:
              {" "}
              {completed}/{tasks.length}
            </p>

            <div className="progress-bar">

              <div
                className="progress"
                style={{
                  width: `${
                    tasks.length
                      ? (completed /
                          tasks.length) *
                        100
                      : 0
                  }%`
                }}
              ></div>

            </div>

          </div>

        )}

        {/* PROFILE PAGE */}
        {page === "profile" && (

          <div className="profile-card">

            <h2>Profile</h2>

            <p>
              Username:
              {" "}
              {username}
            </p>

            <p>
              Email:
              {" "}
              {user.email}
            </p>

            <p>
              Total Tasks:
              {" "}
              {tasks.length}
            </p>

            <p>
              Completed Tasks:
              {" "}
              {completed}
            </p>

          </div>

        )}

        {/* SETTINGS PAGE */}
        {page === "settings" && (

          <div className="settings-page">

            <h2>Settings</h2>

            {/* PROFILE SETTINGS */}
            <div className="settings-card">

              <h3>Profile Settings</h3>

              <input
                type="text"
                placeholder="Change Username"
                value={newUsername}
                onChange={(e) =>
                  setNewUsername(
                    e.target.value
                  )
                }
              />

              <input
                type="email"
                placeholder="Change Email"
                value={newEmail}
                onChange={(e) =>
                  setNewEmail(
                    e.target.value
                  )
                }
              />

              <button
                onClick={() => {

                  if (newUsername) {
                    setUsername(
                      newUsername
                    );
                  }

                  if (newEmail) {
                    setUser({
                      ...user,
                      email: newEmail
                    });
                  }

                  alert(
                    "Profile Updated"
                  );
                }}
              >
                Save Profile
              </button>

            </div>

            {/* DARK MODE */}
            <div className="settings-card">

              <h3>Theme</h3>

              <label>

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() =>
                    setDarkMode(
                      !darkMode
                    )
                  }
                />

                Enable Dark Mode

              </label>

            </div>

            {/* NOTIFICATIONS */}
            <div className="settings-card">

              <h3>Notifications</h3>

              <label>
                <input type="checkbox" />
                Email Notifications
              </label>

              <br />

              <label>
                <input type="checkbox" />
                Deadline Alerts
              </label>

            </div>

            {/* ACCOUNT */}
            <div className="settings-card">

              <h3>Account</h3>

              <button
                className="danger-btn"
                onClick={() =>
                  alert(
                    "Password reset link sent"
                  )
                }
              >
                Reset Password
              </button>

              <button
                className="danger-btn"
                onClick={() => {

                  const confirmDelete =
                    window.confirm(
                      "Delete account?"
                    );

                  if (confirmDelete) {

                    setUser(null);

                    alert(
                      "Account Deleted"
                    );
                  }
                }}
              >
                Delete Account
              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default App;