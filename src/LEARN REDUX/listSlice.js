import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: 0,
      name: "",
      completed: false,
    },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      console.log("Add List :", action.payload.id);

      state.lists.push(action.payload);
    },
    removeList: (state, action) => {
      console.log("Remove id :", action.payload.id);
      const filteredState = state.lists.filter(
        (data) => data.id !== action.payload.id
      );
      state.lists = filteredState;
    },
    toggleComplete: (state, action) => {
      console.log("toggleComplete : ", action.payload);
      const filteredState = state.lists.find(
        (data) => data.id === action.payload.id
      );

      filteredState.completed = action.payload.completed;
    },
  },
});

export const { addList, removeList, toggleComplete } = listSlice.actions;
export default listSlice.reducer;
