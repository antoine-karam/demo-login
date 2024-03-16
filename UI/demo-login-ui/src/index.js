import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";

import App from "./App";
import store from './store';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
