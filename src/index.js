import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import TodoApp from "./TodoApp";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

const App = () => (
  <div>
    <h1>Todo App {"\u2728"}</h1>
    <TodoApp />
  </div>
);

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
