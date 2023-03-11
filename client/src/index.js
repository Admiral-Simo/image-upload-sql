import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { api } from "./redux/api/apiSlice";
import Challenge from "./Challenge";

ReactDOM.render(
  <ApiProvider api={api}>
    <Provider store={store}>
      <Challenge />
    </Provider>
  </ApiProvider>,
  document.getElementById("root")
);
