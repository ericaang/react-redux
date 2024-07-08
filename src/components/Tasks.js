import React, { useContext, useEffect, useState } from "react";
//without react-redux
//import StoreContext from "../context/storeContext";

//with react-redux
import { useDispatch, useSelector } from "react-redux";
import { loadTask } from "../store/task";

const Tasks = () => {
  //const store = useContext(StoreContext);
  //const [tasks, setTasks] = useState([]);

  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  /* useEffect(() => {
    store.dispatch(loadTask());

    const unsubscribe = store.subscribe(() => {
      const storeTasks = store.getState().tasks.tasks;
      if (tasks !== storeTasks) {
        setTasks(storeTasks);
      }
    });

    return () => {
      unsubscribe();
    }; 
  }, []); */

  useEffect(() => {
    dispatch(loadTask());
  }, []);

  console.log(tasks);
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
