import React from "react";
import Task from "./Task";

function TaskList({ tasks, onChangeStatus, onDeleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} onDelete={onDeleteTask} onChange={onChangeStatus} />
        </div>
      ))}
    </>
  );
}

export default TaskList;
