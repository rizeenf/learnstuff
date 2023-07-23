export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          selesai: false,
        },
      ];
    }

    case "EDIT": {
      return state.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case "DELETE": {
      return state.filter((Text) => Text.id !== action.id);
    }

    default: {
      throw Error("Error action : " + action.type);
    }
  }
};
