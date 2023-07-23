import React from "react";

function Task({ task, onChange, onDelete }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={task.selesai}
        onChange={(e) =>
          onChange({
            ...task,
            selesai: e.target.checked,
          })
        }
      />
      <span>{task.name}</span>
      <button>Edit</button>
      <button onClick={() => onDelete(task)}>Delete</button>
    </label>
  );
}

export default Task;
