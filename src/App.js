import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Insert from "./components/Insert-Taks/Insert";

function App(props) {
  function addTask(name) {
    alert(name);
  }

  return (
    <>
      <Header />
      <Insert addTask={addTask} />
      <Footer />
    </>
  );
}

export default App;
