import React from "react";

function Task(props) {
  const task = props.task;
  return (
    <tr>
      <th>
        {task.completed ? (
          <i className="far fa-check-square text-success fa-lg"></i>
        ) : (
          <i className="far fa-times-circle text-danger fa-lg"></i>
        )}
      </th>
      <td>
        <h5>{task.title}</h5>
        <div>{task.description}</div>
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="text-muted small">
              {" "}
              Created : {task.created_at.substring(0, 16)}
            </div>
          </div>
          <div className="col-sm-6 float-right">
            <button className="btn btn-sm btn-secondary">Edit</button>
            <button
              className="btn btn-sm btn-danger ml-1 "
              onClick={() => props.handleDelete(task.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default Task;
