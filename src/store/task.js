import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let id = 0;
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestedFail: (state, action) => {
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload.tasks);
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.tasks.id
      );
      state.tasks.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.tasks.id
      );
      state.tasks[index].completed = action.payload.tasks.completed;
    },
  },
});
export const {
  apiRequested,
  apiRequestedFail,
  getTasks,
  addTask,
  removeTask,
  completedTask,
} = taskSlice.actions;

export default taskSlice.reducer;

//Action creators
const url = "/tasks";
export const loadTask = () =>
  apiCallBegan({
    url,
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestedFail.type,
  });

export const addNewTask = (task) =>
  apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
  });

export const updateCompleted = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completedTask.type,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });
