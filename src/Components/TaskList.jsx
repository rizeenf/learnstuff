import React from "react";

function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <span key={task.id}>
          <h4>{task.name}</h4>
        </span>
      ))}
      <h3>This is list task</h3>
    </>
  );
}

export default TaskList;
