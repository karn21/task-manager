import {
  LOAD_USER,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/actionTypes";
import axios from "axios";
import { getErrors } from "./errors";
import { clearTasks } from "./tasks";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: LOAD_USER,
  });
  const token = getState().auth.token;
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

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
  console.log(body);
  axios
    .post("api/auth/login", body, config)
    .then((res) => {
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
  const token = getState().auth.token;
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post("/api/auth/logout", null, config)
    .then((res) => {
      dispatch(clearTasks());
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};
