import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import visibilityReducer from "./visibilityReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  todosReducer,
  visibilityReducer,
  notificationReducer
});

export default rootReducer;
