import {
  LOAD_USER,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/actionTypes";
import axios from "axios";
import { getErrors } from "./errors";
import { createMessage } from "./messages";
import { clearTasks, getConfig } from "./tasks";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_USER,
  });
  const config = getConfig(getState);
  axios
    .get("/api/auth/user", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  axios
    .post("api/auth/login", body, config)
    .then((res) => {
      dispatch(createMessage("You are now Logged in!"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  const config = getConfig(getState);
  axios
    .post("/api/auth/logout", null, config)
    .then((res) => {
      dispatch(clearTasks());
      dispatch(createMessage("Logged out successfully."));
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const register = (username, email, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, email, password });

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch(createMessage("Your account has been created."));
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};
