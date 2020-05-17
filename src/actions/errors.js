import { GET_ERRORS } from "./actionTypes";

export const getErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
