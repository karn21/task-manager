import {
  GET_TASKS,
  NEW_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../actions/actionTypes";

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
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return task.id === action.payload.id ? action.payload : task;
        }),
      };
    default:
      return state;
  }
}
