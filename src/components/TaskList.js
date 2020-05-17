import React, { Component } from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { getTasks, deleteTask, newTask, editTask } from "../actions/tasks";
import PropTypes from "prop-types";
import Form from "./Form";

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };

  state = {
    current: [],
    id: "",
    tab: "all",
    title: "",
    description: "",
    editing: false,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current: nextProps.tasks,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const task = { title, description };
    if (this.state.editing) {
      this.props.editTask(this.state.id, task);
      this.setState({
        title: "",
        description: "",
        id: "",
        editing: false,
      });
    } else {
      this.props.newTask(task);
    }
  };

  handleDelete = (id) => {
    this.props.deleteTask(id);
  };

  handleEdit = (id) => {
    const task = this.props.tasks.filter((task) => task.id === id);
    this.setState({
      id: id,
      title: task[0].title,
      description: task[0].description,
      editing: true,
    });
  };

  handleToggleComplete = (id) => {
    const task = this.props.tasks.filter((task) => task.id === id)[0];
    const newTask = { ...task, completed: !task.completed };
    this.props.editTask(id, newTask);
  };

  cancelEdit = () => {
    this.setState({
      title: "",
      description: "",
      editing: false,
    });
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
      <>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          editing={this.state.editing}
          cancelEdit={this.cancelEdit}
          description={this.state.description}
        ></Form>
        <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5">
          <div className="card my-4 border-primary">
            <div className="card-body text-primary">
              <div className="card-title">
                <h3 className="text-center">My Tasks</h3>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={`nav-link ${
                      this.state.tab === "all" && "active"
                    }`}
                    onClick={() => this.handleFilter("all")}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
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
                    style={{ cursor: "pointer" }}
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
                      handleEdit={this.handleEdit}
                      handleToggleComplete={this.handleToggleComplete}
                    ></Task>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const matchStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(matchStateToProps, {
  getTasks,
  deleteTask,
  newTask,
  editTask,
})(TaskList);
