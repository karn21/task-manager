import axios from "axios";
import { GET_TASKS } from "./actionTypes";

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
