import React, { useReducer } from "react";
import formReducer, { INITIAL_STATE, ACTIONS } from "./formReducer";

function App2() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: ACTIONS.CHANGE,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  let content;
  {
    if (state === null) {
      content = (
        <>
          <span>Data kosong</span>
        </>
      );
    } else {
      content = (
        <>
          <span>{state.firstName}</span>
          <span>{state.lastName}</span>
          <span>{state.hobby}</span>
          <span>{state.age}</span>
        </>
      );
    }
  }

  return (
    <>
      <form>
        <label>
          <input
            type="text"
            onChange={handleChange}
            name="firstName"
            placeholder="First name"
          />
        </label>
        <label>
          <input
            type="text"
            onChange={handleChange}
            name="lastName"
            placeholder="Last name"
          />
        </label>
        <label>
          <input
            type="text"
            onChange={handleChange}
            name="hobby"
            placeholder="Hobby"
          />
        </label>
        <label>
          <input
            type="number"
            onChange={handleChange}
            name="age"
            placeholder="Age"
          />
        </label>
        <button>Submit</button>
      </form>
      {content}
    </>
  );
}

export default App2;
