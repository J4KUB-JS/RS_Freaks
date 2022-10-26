import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
