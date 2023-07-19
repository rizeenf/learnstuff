import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [texts, setText] = useState(initialTask);

  const handleAddTask = (e) => {
    setText([
      ...texts,
      {
        id: idNext++,
        name: e,
        selesai: false,
      },
    ]);
  };

  const handleEditTask = (e) => {
    //
    console.log(e);
  };

  const handleDeleteTask = (e) => {
    //
    console.log(e.id);
    setText(texts.filter((Text) => Text.id !== e.id));
  };

  return (
    <>
      <div>
        <h2>Task lister</h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={texts}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

let idNext = 3;
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
