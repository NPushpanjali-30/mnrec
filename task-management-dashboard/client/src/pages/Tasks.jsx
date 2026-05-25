import { useState } from "react";

function Tasks() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (!task) return;

    setTasks([
      ...tasks,
      task
    ]);

    setTask("");
  };

  const deleteTask = (index) => {

    const updated = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updated);
  };

  return (
    <div>

      <h2>Tasks</h2>

      <div className="task-input">

        <input
          placeholder="Enter task"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />

        <button onClick={addTask}>
          Add
        </button>

      </div>

      {tasks.map((t, index) => (
        <div
          key={index}
          className="task-card"
        >
          <p>{t}</p>

          <button
            onClick={() =>
              deleteTask(index)
            }
          >
            Delete
          </button>
        </div>
      ))}

    </div>
  );
}

export default Tasks;