import React, { useState } from "react";
import { addNewTask } from "../store/task";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [task, setTask] = useState("");
  let id = 5;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    id++;
    let newTask = { task: task, id: id };
    dispatch(addNewTask(newTask));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
