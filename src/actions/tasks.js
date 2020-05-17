import axios from "axios";
import { GET_TASKS, NEW_TASK, DELETE_TASK } from "./actionTypes";
import { getErrors } from "./errors";
import { createMessage } from "./messages";

export const getTasks = () => (dispatch) => {
  axios
    .get("/api/tasks/")
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const newTask = (task) => (dispatch) => {
  axios
    .post("/api/tasks/", task)
    .then((res) => {
      dispatch(createMessage("Task Created"));
      dispatch({
        type: NEW_TASK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const deleteTask = (id) => (dispatch) => {
  axios
    .delete(`/api/tasks/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_TASK,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};
