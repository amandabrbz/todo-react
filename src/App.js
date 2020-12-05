import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Insert from "./components/Insert-Taks/Insert";
import TodoTask from "./components/TodoTask/TodoTask";

function App(props) {
  const [tasks, setTasks] = useState(props.data);

  const taskData = tasks.map((task) => (
    <TodoTask
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  function addTask(name) {
    const idNumber = Math.floor(Math.random() * 100);
    const newTask = { id: idNumber, name: name, completed: true };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <Header />
      <Insert addTask={addTask} />
      <ul>
        {taskData}
      </ul>
      <Footer />
    </>
  );
}

export default App;
