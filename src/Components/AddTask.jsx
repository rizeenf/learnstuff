import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      />
      <button
        onClick={() => {
          setInput("");
          onAddTask(input);
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTask;
