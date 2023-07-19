import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [texts, setText] = useState(initialTask);
  let idNext = 3;

  const handleAddTask = (e) => {
    setText([
      ...TextEncoderStream,
      {
        id: idNext++,
        name: e,
        selesai: false,
      },
    ]);
  };

  return (
    <>
      <div>
        <h2>Task lister</h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={texts} />
      </div>
    </>
  );
}

const initialTask = [
  {
    id: 0,
    name: "ke dufan",
    selesai: true,
  },
  {
    id: 1,
    name: "ke blok m",
    selesai: true,
  },
  {
    id: 2,
    name: "ke pasar santa",
    selesai: false,
  },
];

export default App;
