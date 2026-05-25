import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = () => {

    if (!title) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      dueDate,
      project,
      completed: false,
      status: "To Do"
    });

    setTitle("");
    setPriority("Medium");
    setDueDate("");
    setProject("");
  };

  return (
    <div className="task-form">

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <input
        type="text"
        placeholder="Project Name"
        value={project}
        onChange={(e) => setProject(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Task
      </button>

    </div>
  );
}

export default TaskForm;