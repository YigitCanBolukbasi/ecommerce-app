import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import ThemeComponent from "./styles/theme/ThemeComponent";
import themeConfig from "./styles/theme/themeConfig";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeComponent themeConfig={themeConfig}>
        <App />
      </ThemeComponent>
    </Provider>
  </React.StrictMode>
);
