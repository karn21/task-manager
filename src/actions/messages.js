import { CREATE_MESSAGE } from "./actionTypes";

export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
