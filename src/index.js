import React from "react";
import  ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";
// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)
