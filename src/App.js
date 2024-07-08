import React from "react";
import Tasks from "./components/Tasks";
import store from "./store/configureStore";
import AddTask from "./components/AddTask";
//without react-redux
//import StoreContext from "./context/storeContext";

const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;
