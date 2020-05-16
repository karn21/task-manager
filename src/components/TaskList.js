import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getTasks, deleteTask } from "../actions/actions";

export class TaskList extends Component {
  state = {
    tasks: "",
    current: "",
  };

  componentDidMount() {
    this.props.getTasks();
  }

  handleDelete = (id) => {
    this.props.deleteTask(id);
  };

  render() {
    return (
      <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5">
        <div className="card my-4 border-primary">
          <div className="card-body text-primary">
            <div className="card-title">
              <h3 className="text-center">My Tasks</h3>
            </div>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Completed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Incomplete
                </a>
              </li>
            </ul>
            <table className="table table-striped">
              <tbody>
                {this.props.tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDelete={this.handleDelete}
                  ></Task>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const matchStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(matchStateToProps, { getTasks, deleteTask })(TaskList);
