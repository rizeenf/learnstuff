import React from "react";

export const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  hobby: "",
  age: "",
};

export const ACTIONS = {
  SUBMIT: "submit",
  CHANGE: "change",
};

function formReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SUBMIT: {
      return state;
    }

    case ACTIONS.CHANGE: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    default:
      throw Error("Error action :" + action.type);
  }
}

export default formReducer;
