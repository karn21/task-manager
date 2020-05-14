import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
      <div className="card m-4 border-primary">
        <div className="card-body text-primary">
          <div className="card-title">
            <h3 className="text-center">My Tasks</h3>
          </div>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link" href="#">
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Completed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Incomplete
              </a>
            </li>
          </ul>
          <table className="table table-striped">
            <tbody>
              {props.tasks.map((task) => (
                <Task key={task.id} task={task}></Task>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
