import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      description,
      isDone: false,
    };

    dispatch({ type: "ADD_TASK", payload: newTask });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;