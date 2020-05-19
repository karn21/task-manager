import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import Alert from "./components/Alerts";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
import { store } from "./store";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
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
            <Switch>
              <PrivateRoute exact path="/" component={TaskList}></PrivateRoute>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
