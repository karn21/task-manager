import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Alert from "./components/Alerts";

export class App extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="display-4 text-white text-center m-3">
              Task Manager
            </h1>
            <p className="text-center text-white">
              Made with &#10084; by{" "}
              <a href="http://karan.codes" className="text-warning">
                Karan Maurya
              </a>
            </p>
          </div>
        </div>
        <Alert></Alert>
        <div className="row">
          <Form></Form>
          <TaskList></TaskList>
        </div>
      </div>
    );
  }
}

export default App;
