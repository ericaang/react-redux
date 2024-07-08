import { createSlice } from "@reduxjs/toolkit";
let id = 0;

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.name,
      });
    },
    removeEmployee: (state, action) => {
      const index = state.findIndex(
        (employee) => employee.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});
export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
