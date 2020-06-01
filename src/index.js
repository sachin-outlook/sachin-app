import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Counter from "./components/counterComponent";
import Parent from "./components/component.Parent";
import Calulator from "./components/calculator";
import HelloWorld from "./components/componentFunc";
import { Hello } from "./components/componentFunc";

//console.log(promise);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <Calulator />,
  <HelloWorld />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
