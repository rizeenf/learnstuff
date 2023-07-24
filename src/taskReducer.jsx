export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          selesai: false,
        },
      ];
    }

    case "EDIT": {
      return state.map((t) => {
        if (t.id === action.payload.task.id) {
          return action.payload.task;
        } else {
          return t;
        }
      });
    }

    case "DELETE": {
      return state.filter((Text) => Text.id !== action.payload.id);
    }

    default: {
      throw Error("Error action : " + action.type);
    }
  }
};
