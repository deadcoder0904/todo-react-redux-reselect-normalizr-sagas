import React, { Fragment } from "react";

import TodoInput from "./containers/TodoInput";
import TodoList from "./containers/TodoList";

const TodoApp = ({ todos }) => (
  <Fragment>
    <TodoInput />
    <TodoList />
  </Fragment>
);

export default TodoApp;
