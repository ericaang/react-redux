import React, { useEffect } from "react";

//with react-redux
import { useDispatch, useSelector } from "react-redux";
import { loadTask } from "../store/task";

const Tasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTask());
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {tasks.map((task) => (
            <p key={task.id}>{task.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;
