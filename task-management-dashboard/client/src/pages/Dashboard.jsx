import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Analytics from "../components/Analytics";
import toast, { Toaster } from "react-hot-toast";

function Dashboard() {

  

// NEW
import { mockTasks } from "../mockData";  // top of file

const isDemoMode = localStorage.getItem("demoMode") === "true";
const [tasks, setTasks] = useState(isDemoMode ? mockTasks : []);

  const [search, setSearch] = useState("");

  const addTask = (task) => {

    setTasks([...tasks, task]);

    toast.success("Task Added");
  };

  const deleteTask = (id) => {

    const updated =
      tasks.filter((task) => task.id !== id);

    setTasks(updated);

    toast.error("Task Deleted");
  };

  const toggleComplete = (id) => {

    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed
          }
        : task
    );

    setTasks(updated);
  };

  const editTask = (id) => {

    const newTitle = prompt("Edit Task");

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

    toast.success("Task Updated");
  };

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Toaster />

      <Sidebar />

      <div className="main-content">

        <h1>Advanced Task Dashboard</h1>

        <Analytics tasks={tasks} />

        <input
          className="search-box"
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TaskForm addTask={addTask} />

        <div className="task-grid">

          {filteredTasks.length === 0 ? (

            <div className="empty-state">
              <h2>No Tasks Found</h2>
              <p>Create tasks to begin</p>
            </div>

          ) : (

            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                editTask={editTask}
              />
            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;