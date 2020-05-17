import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getTasks, deleteTask } from "../actions/tasks";
import PropTypes from "prop-types";

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };

  state = {
    current: [],
    tab: "all",
  };

  componentDidMount() {
    this.props.getTasks();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.tasks,
    });
  }

  handleDelete = (id) => {
    this.props.deleteTask(id);
  };

  handleFilter = (query) => {
    switch (query) {
      case "all":
        this.setState({
          current: this.props.tasks,
          tab: "all",
        });
        break;
      case "incomplete":
        this.setState({
          current: this.props.tasks.filter((task) => task.completed === false),
          tab: "incomplete",
        });
        break;
      case "complete":
        this.setState({
          current: this.props.tasks.filter((task) => task.completed === true),
          tab: "complete",
        });
        break;
      default:
        return;
    }
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
                <a
                  href="#"
                  className={`nav-link ${this.state.tab === "all" && "active"}`}
                  onClick={() => this.handleFilter("all")}
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${
                    this.state.tab === "complete" && "active"
                  }`}
                  onClick={() => this.handleFilter("complete")}
                >
                  Completed
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${
                    this.state.tab === "incomplete" && "active"
                  }`}
                  onClick={() => this.handleFilter("incomplete")}
                >
                  Incomplete
                </a>
              </li>
            </ul>
            <table className="table table-striped">
              <tbody>
                {this.state.current.map((task) => (
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
