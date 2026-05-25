function TaskCard({
  task,
  deleteTask,
  toggleComplete,
  editTask
}) {

  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    !task.completed;

  return (
    <div className="task-card">

      <div>

        <h3>
          {task.title}
        </h3>

        <p>
          Project: {task.project || "General"}
        </p>

        <p>
          Due: {task.dueDate || "No Date"}
        </p>

        <p>
          Status: {
            task.completed
              ? "Done"
              : "In Progress"
          }
        </p>

        {isOverdue && (
          <p className="overdue">
            Overdue
          </p>
        )}

        <span
          className={`priority ${task.priority}`}
        >
          {task.priority}
        </span>

      </div>

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
  );
}

export default TaskCard;