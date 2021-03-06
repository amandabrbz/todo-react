import React, { useState } from "react";
import "./Insert.css";
import { LinkTo } from "../Link/Link";

const Insert = (props) => {
  const [todo, setTodo] = useState("");

  const handleTodoChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(todo);
    setTodo("");
  };

  const disabled = todo.length > 0 ? false : true;

  return (
    <>
      <form className="insert-task" onSubmit={handleSubmit}>
        <label htmlFor="myToDo">today todos</label>
        <input type="text" placeholder="type something todo today..." name="myToDo" onChange={handleTodoChange} value={todo} autoComplete="off" />
        <button type="submit" disabled={disabled}>
          save it
        </button>
      </form>

      <LinkTo link="/tasks" whereTo="tasks" />
    </>
  );
};

export default Insert;
