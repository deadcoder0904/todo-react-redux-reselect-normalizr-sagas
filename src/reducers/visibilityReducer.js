import types from "../actions/types";

const visibilityReducer = (state = "all", action) => {
  if (action.type === types.SET_FILTER) return action.payload.filter;
  return state;
};

export default visibilityReducer;
