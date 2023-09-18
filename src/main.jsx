import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiContextProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </React.StrictMode>
);
