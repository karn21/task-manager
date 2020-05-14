import React from "react";

function Form() {
  return (
    <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
      <div className="card m-4 bg-light">
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Task title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                placeholder="Task description"
              ></textarea>
            </div>
            <button className="btn btn-primary float-right">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
