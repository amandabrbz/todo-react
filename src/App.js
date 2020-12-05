import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Insert from "./components/InsertTaks/Insert";
import TodoTask from "./components/TodoTask/TodoTask";

function App(props) {
  const [tasks, setTasks] = useState(props.data);

  const taskItems = tasks.map((task) => (
    <TodoTask
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      delete={deleteTask}
    />
  ));

  function addTask(name) {
    const idNumber = Math.floor(Math.random() * 1000);
    const newTask = { id: idNumber, name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <>
      <Header />
      <Insert addTask={addTask} />
      <ul>
        {taskItems}
      </ul>
      <Footer />
    </>
  );
}

export default App;
