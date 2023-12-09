import React from "react";
import { useDispatch } from "react-redux";
import { removeList, toggleComplete } from "./listSlice";

const Todo = ({ text, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span
        style={{
          textDecoration: completed ? "line-through" : "",
        }}
      >
        {text}
      </span>
      <button
        onClick={() =>
          dispatch(
            removeList({
              id,
            })
          )
        }
      >
        X
      </button>
    </div>
  );
};

export default Todo;
