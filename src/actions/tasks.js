import axios from "axios";
import {
  GET_TASKS,
  NEW_TASK,
  DELETE_TASK,
  EDIT_TASK,
  CLEAR_TASKS,
} from "./actionTypes";
import { getErrors } from "./errors";
import { createMessage } from "./messages";

export const getTasks = () => (dispatch, getState) => {
  const config = getConfig(getState);
  axios
    .get("/api/tasks/", config)
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      getErrors(err.response.data, err.response.status);
    });
};

export const newTask = (task) => (dispatch, getState) => {
  const config = getConfig(getState);
  axios
    .post("/api/tasks/", task, config)
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

export const deleteTask = (id) => (dispatch, getState) => {
  const config = getConfig(getState);
  axios
    .delete(`/api/tasks/${id}/`, config)
    .then((res) => {
      dispatch(createMessage("Task Removed"));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => getErrors(err.response.data, err.response.status));
};

export const editTask = (id, task) => (dispatch, getState) => {
  const config = getConfig(getState);
  axios
    .put(`/api/tasks/${id}/`, task, config)
    .then((res) => {
      dispatch(createMessage("Task Updated"));
      dispatch({
        type: EDIT_TASK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const clearTasks = () => (dispatch) => {
  dispatch({
    type: CLEAR_TASKS,
  });
};

export const getConfig = (getState) => {
  const token = getState().auth.token;

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Token ${token}`;
  }
  const config = { headers };
  return config;
};
