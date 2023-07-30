import React from "react";
import ListTask from "./components/ListTask";
import AddTask from "./components/Addtask";
import { Provider } from "react-redux";
import store from './store/index'
import './App.css';

function App() {
  return (
    
    <Provider store={store}>
    <div>
    <h1>My Todo App</h1>
      <AddTask />
      <ListTask/>
    </div>



  </Provider>

  );
}

export default App;
