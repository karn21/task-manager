import { GET_TASKS, NEW_TASK, DELETE_TASK } from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    default:
      return state;
  }
}
