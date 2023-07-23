import React, { useState } from "react";

function Task({ task, onChange, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  let taskContent;

  if (isEdit) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.name}
          onChange={(e) => {
            onChange({
              ...task,
              name: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span>{task.name}</span>
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

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
      {taskContent}
      <button onClick={() => onDelete(task)}>Delete</button>
    </label>
  );
}

export default Task;
