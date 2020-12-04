import React, { useState } from "react";
import "./Insert.css";

const Insert = () => {
  const [todo, setTodo] = useState("");
  

  const handleTodoChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return console.log({
      todo,
    });
  };

  return (
    <form className="insert-task" onSubmit={handleSubmit}>
      <label htmlFor="myToDo">today todos</label>
      <input
        type="text"
        placeholder="type something todo today..."
        name="myToDo"
        onChange={handleTodoChange}
        value={todo}
      />

      <button type="submit" disabled={ todo.length > 0 ? false : true }>
        add
      </button>
    </form>
  );
};

export default Insert;
