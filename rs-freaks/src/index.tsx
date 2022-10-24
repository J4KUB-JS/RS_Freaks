import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/css/style.css";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
