import React, { Component } from "react";
import PropTypes from "prop-types";

export class Form extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const {
      handleChange,
      handleSubmit,
      title,
      description,
      editing,
      cancelEdit,
    } = this.props;
    return (
      <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0 col-lg-5 offset-lg-1">
        <div className="card mt-4 bg-light">
          <div className="card-body">
            <h2 className="mb-2">{editing ? "Update Task" : "Add Task"}</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Task title"
                  name="title"
                  value={title}
                  onChange={handleChange}
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
                  value={description}
                  onChange={handleChange}
                ></textarea>
              </div>
              {editing ? (
                <div>
                  <button className="btn btn-warning" onClick={cancelEdit}>
                    Cancel
                  </button>
                  <button className="btn btn-success float-right">
                    Update Task
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary float-right">
                  Add Task
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
