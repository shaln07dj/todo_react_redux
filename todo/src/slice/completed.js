import { createSlice } from "@reduxjs/toolkit";

export const completedSlice = createSlice({
  name: "complete",
  initialState: {
    value: [],
  },

  reducers: {
    addCompleted: (state, action) => {


    },
  },
});


export const {addCompleted}=completedSlice.actions

const {reducer:completedTodos}=completedSlice

export default completedTodos


