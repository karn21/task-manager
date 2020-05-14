import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

export class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "FrontEnd",
        description: "Create Front end for you project",
        completed: true,
        created_at: "2020-05-14T09:23:58.295920Z",
        updated: null,
      },
      {
        id: 2,
        title: "Backend",
        description: "Create Backend for your project",
        completed: false,
        created_at: "2020-05-14T09:24:14.973911Z",
        updated: null,
      },
      {
        id: 3,
        title: "Deploy",
        description: "Deploy completed project to Heroku",
        completed: false,
        created_at: "2020-05-14T09:24:33.545140Z",
        updated: null,
      },
      {
        id: 4,
        title: "Integrate React",
        description: "Integrate React to your Project",
        completed: false,
        created_at: "2020-05-14T09:24:50.978885Z",
        updated: null,
      },
      {
        id: 5,
        title: "Read Stories",
        description: "Read articles seperated by your mentor.",
        completed: true,
        created_at: "2020-05-14T09:45:37.764969Z",
        updated: null,
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid bg-dark" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
            <h1 className="display-3 text-white text-center m-3">
              Task Manager
            </h1>
          </div>
        </div>
        <div className="row">
          <Form></Form>
          <TaskList tasks={this.state.tasks}></TaskList>
        </div>
      </div>
    );
  }
}

export default App;
