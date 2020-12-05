import React from "react";
import "./Todo-Task.css";

const Todo = (props) => {
  return (
    <li className="task-item">
      <div className="task-box">
        <input
          id={props.id} type="checkbox" defaultChecked={props.complete}
          onChange={() => props.handleCheckbox(props.id)}
        />
        <label className={props.complete ? "done" : ""} htmlFor={props.id}>
          {props.name}
        </label>
        {props.complete && (
          <div className="task-delete">
            <button type="button" onClick={() => props.delete(props.id)}>
              delete it
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default Todo;
