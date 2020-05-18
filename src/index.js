import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import { BrowserRouter as Router } from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";
import { store } from "./store";

const options = {
  position: "top center",
  timeout: 4000,
  offset: "20px",
  transition: "scale",
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
