import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        ...task,
        description: editedDescription,
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDescription(task.description);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: task.isDone ? "line-through" : "none" }}
            onClick={handleToggle}
          >
            {task.description}
          </span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default Task;
