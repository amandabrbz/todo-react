import React from "react";
import "./Todo-Task.css";

const Todo = (props) => {
  return (
    <li className="task-item">
      <div className="task-box">
        <input id={props.id} type="checkbox" defaultChecked={props.completed} />
        <label className={props.completed ? "done" : ""} htmlFor={props.id}>
          {props.name}
        </label>
        {props.completed && (
          <div className="task-delete">
            <button
              type="button"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default Todo;
