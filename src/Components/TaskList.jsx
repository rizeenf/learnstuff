import React from "react";

function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.selesai} />
          <span>{task.name}</span>
          <button onClick={() => onEditTask(task)}>Edit</button>
          <button onClick={() => onDeleteTask(task)}>Delete</button>
          <span>test</span>
        </div>
      ))}
    </>
  );
}

export default TaskList;
