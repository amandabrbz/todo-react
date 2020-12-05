import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Insert from "./components/InsertTasks/Insert";
import TodoTask from "./components/TodoTask/TodoTask";
import {LinkTo} from "./components/Link/Link";

const App = (props) => {
  const [tasks, setTasks] = useState(props.data);

  const addTask = (name) => {
    const idNumber = Math.floor(Math.random() * 1000);
    const newTask = { id: idNumber, name: name, complete: false };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const handleCheckbox = (id) => {
    const update = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(update);
  }

  const taskItems = tasks.map((task) => (
    <TodoTask id={task.id} name={task.name} complete={task.complete} key={task.id} delete={deleteTask} handleCheckbox={handleCheckbox}/>
  ));

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Insert addTask={addTask} />
          </Route>
          <Route path="/tasks">
            <ul>{taskItems}</ul>
            <LinkTo link="/" whereTo="home" />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
