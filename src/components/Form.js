import React, { Component } from "react";

export class Form extends Component {
  state = {
    title: "",
    description: "",
    task: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1">
        <div className="card mt-4 bg-light">
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Task title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
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
                  onChange={this.onChange}
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

export default Form;
