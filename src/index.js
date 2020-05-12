import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./Components/Reducers/allReducers";

const saveToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
