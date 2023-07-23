import { useReducer, useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { taskReducer } from "./taskReducer";

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialTask);
  // const [texts, setText] = useState(initialTask);

  const handleAddTask = (input) => {
    dispatch({
      type: "ADD",
      id: idNext++,
      name: input,
    });
  };

  const handleChangeStatus = (task) => {
    dispatch({
      type: "EDIT",
      task: task,
    });
  };

  const handleDeleteTask = (task) => {
    dispatch({
      type: "DELETE",
      id: task.id,
    });
  };

  // const handleAddTask = (e) => {
  //   setText([
  //     ...texts,
  //     {
  //       id: idNext++,
  //       name: e,
  //       selesai: false,
  //     },
  //   ]);
  // };

  // const handleChangeStatus = (task) => {
  //   setText(
  //     texts.map((t) => {
  //       if (t.id === task.id) {
  //         return task;
  //       } else {
  //         return t;
  //       }
  //     })
  //   );
  // };

  // const handleDeleteTask = (e) => {
  //   console.log(e.id);
  //   setText(texts.filter((Text) => Text.id !== e.id));
  // };

  return (
    <>
      <div>
        <h2>Task lister</h2>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={state}
          onChangeStatus={handleChangeStatus}
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
