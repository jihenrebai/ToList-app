import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const [filter, setFilter] = useState("all"); // "all", "done", "notDone"

  const tasks = useSelector((state) => state.tasks.tasks);

  const filteredTasks = filter === "all"
    ? tasks
    : filter === "done"
    ? tasks.filter(task => task.isDone)
    : tasks.filter(task => !task.isDone);

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("notDone")}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;