import React from "react";

function Task(props) {
  const task = props.task;
  return (
    <tr>
      <th>
        {task.completed ? (
          <i className="far fa-check-square text-success fa-lg"></i>
        ) : (
          <i class="far fa-times-circle text-danger fa-lg"></i>
        )}
      </th>
      <td>
        <h5>{task.title}</h5>
        <div>{task.description}</div>
        <div className="m-1 float-right">
          <button className="btn btn-sm btn-secondary m-1">Edit</button>
          <button className="btn btn-sm btn-danger m-1">Remove</button>
        </div>
      </td>
    </tr>
  );
}

export default Task;
