import React, { Component } from "react";
import { connect } from "react-redux";
import { newTask } from "../actions/tasks";
import PropTypes from "prop-types";

export class Form extends Component {
  static propTypes = {
    newTask: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const task = { title, description };
    this.props.newTask(task);
    this.setState({
      title: "",
      description: "",
    });
  };

  render() {
    return (
      <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1">
        <div className="card mt-4 bg-light">
          <div className="card-body">
            <h2 className="mb-2">Add Task</h2>
            <form action="" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Task title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Task description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <button className="btn btn-primary float-right">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { newTask })(Form);
