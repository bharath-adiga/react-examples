import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { register } from "./serviceWorker";
import configureStore from "./store/index";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = configureStore();
ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

register();
